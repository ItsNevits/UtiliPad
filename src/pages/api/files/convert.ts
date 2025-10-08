export const prerender = false;

import JSZip from "jszip";
import mammoth from "mammoth";
import * as XLSX from "xlsx";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { marked } from "marked";
import { jsPDF } from "jspdf";
import { PDFDocument } from "pdf-lib";
import type { APIRoute } from "astro";

// Supported conversions (serverless-friendly)
const supportedConversions = {
  docx: ["html", "txt", "pdf"],
  xlsx: ["csv", "json", "html"],
  xls: ["csv", "json", "html"],
  ods: ["csv", "json", "html"],
  csv: ["xlsx", "json"],
  json: ["xlsx", "csv"],
  txt: ["docx"],
  md: ["docx", "html"],
  html: ["pdf"],
};

export const GET: APIRoute = async () => {
  // Return supported conversions
  return new Response(JSON.stringify(supportedConversions), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const files: Blob[] = [];
    const formats: string[] = [];
    let isZip = false;
    for (const entry of formData.entries()) {
      const [key, value] = entry;
      if (key === "files[]" && value instanceof Blob) {
        files.push(value);
      }
      if (key === "formats[]" && typeof value === "string") {
        formats.push(value);
      }
      if (key === "asZip" && value === "true") {
        isZip = true;
      }
    }
    // Fallback for single file
    if (!isZip && files.length === 0) {
      const file = formData.get("file");
      const format = formData.get("format") || "pdf";
      if (!file || !(file instanceof Blob)) {
        return new Response("No file uploaded", { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const name = (file as any).name as string | undefined;
      const ext = name?.split(".").pop()?.toLowerCase() || "";
      if (
        typeof ext !== "string" ||
        !(ext in supportedConversions) ||
        !supportedConversions[
          ext as keyof typeof supportedConversions
        ].includes(format as string)
      ) {
        return new Response("Conversion not supported", { status: 400 });
      }
      let resultBuffer: Buffer | null = null;
      let contentType = "application/octet-stream";
      let outName = `converted.${format}`;

      // TXT → DOCX
      if (ext === "txt" && format === "docx") {
        const text = buffer.toString("utf-8");
        const lines = text.split("\n");
        const doc = new Document({
          sections: [{
            properties: {},
            children: lines.map(line =>
              new Paragraph({
                children: [new TextRun(line || " ")],
              })
            ),
          }],
        });
        resultBuffer = Buffer.from(await Packer.toBuffer(doc));
        contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        outName = `${name?.split(".")[0]}.docx`;
      }

      // MD → DOCX
      else if (ext === "md" && format === "docx") {
        const markdown = buffer.toString("utf-8");
        const html = await marked(markdown);
        // Convert HTML to paragraphs (simple approach)
        const textContent = html.replace(/<[^>]+>/g, "\n").split("\n").filter(line => line.trim());
        const doc = new Document({
          sections: [{
            properties: {},
            children: textContent.map(line =>
              new Paragraph({
                children: [new TextRun(line)],
              })
            ),
          }],
        });
        resultBuffer = Buffer.from(await Packer.toBuffer(doc));
        contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        outName = `${name?.split(".")[0]}.docx`;
      }

      // MD → HTML
      else if (ext === "md" && format === "html") {
        const markdown = buffer.toString("utf-8");
        const html = await marked(markdown);
        resultBuffer = Buffer.from(html, "utf-8");
        contentType = "text/html";
        outName = `${name?.split(".")[0]}.html`;
      }

      // HTML → PDF
      else if (ext === "html" && format === "pdf") {
        const html = buffer.toString("utf-8");
        const doc = new jsPDF();
        // Extract text from HTML (simple approach - removes tags)
        const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        const lines = doc.splitTextToSize(text, 180);
        doc.text(lines, 10, 10);
        resultBuffer = Buffer.from(doc.output("arraybuffer"));
        contentType = "application/pdf";
        outName = `${name?.split(".")[0]}.pdf`;
      }

      // DOCX → PDF
      else if (ext === "docx" && format === "pdf") {
        const { value: html } = await mammoth.convertToHtml({ buffer });
        const doc = new jsPDF();
        // Extract text from HTML
        const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
        const lines = doc.splitTextToSize(text, 180);
        doc.text(lines, 10, 10);
        resultBuffer = Buffer.from(doc.output("arraybuffer"));
        contentType = "application/pdf";
        outName = `${name?.split(".")[0]}.pdf`;
      }

      // DOCX → HTML/TXT
      else if (ext === "docx" && format === "html") {
        const { value } = await mammoth.convertToHtml({ buffer });
        resultBuffer = Buffer.from(value, "utf-8");
        contentType = "text/html";
        outName = `${name?.split(".")[0]}.html`;
      } else if (ext === "docx" && format === "txt") {
        const { value } = await mammoth.convertToHtml({ buffer });
        // Strip HTML tags for TXT
        const text = value.replace(/<[^>]+>/g, "");
        resultBuffer = Buffer.from(text, "utf-8");
        contentType = "text/plain";
        outName = `${name?.split(".")[0]}.txt`;
      }
      // XLSX/XLS/ODS → CSV/JSON/HTML
      else if (
        ["xlsx", "xls", "ods"].includes(ext) &&
        ["csv", "json", "html"].includes(format as string)
      ) {
        const wb = XLSX.read(buffer, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        if (format === "csv") {
          const csv = XLSX.utils.sheet_to_csv(ws);
          resultBuffer = Buffer.from(csv, "utf-8");
          contentType = "text/csv";
          outName = `${name?.split(".")[0]}.csv`;
        } else if (format === "json") {
          const json = XLSX.utils.sheet_to_json(ws);
          resultBuffer = Buffer.from(JSON.stringify(json, null, 2), "utf-8");
          contentType = "application/json";
          outName = `${name?.split(".")[0]}.json`;
        } else if (format === "html") {
          const html = XLSX.utils.sheet_to_html(ws);
          resultBuffer = Buffer.from(html, "utf-8");
          contentType = "text/html";
          outName = `${name?.split(".")[0]}.html`;
        }
      }
      // CSV/JSON → XLSX
      else if (ext === "csv" && format === "xlsx") {
        const csvText = buffer.toString("utf-8");
        // Leer CSV como libro y obtener la hoja
        const wbFromCsv = XLSX.read(csvText, { type: "string" });
        const ws = wbFromCsv.Sheets[wbFromCsv.SheetNames[0]];
        // Convertir a JSON y luego a hoja nueva para asegurar formato
        const aoa = XLSX.utils.sheet_to_json(ws, {
          header: 1,
          raw: false,
        }) as unknown[][];
        const ws2 = XLSX.utils.aoa_to_sheet(aoa);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws2, "Sheet1");
        resultBuffer = Buffer.from(
          XLSX.write(wb, { type: "buffer", bookType: "xlsx" })
        );
        contentType =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        outName = `${name?.split(".")[0]}.xlsx`;
      } else if (ext === "json" && format === "xlsx") {
        let json = JSON.parse(buffer.toString("utf-8"));
        if (!Array.isArray(json)) json = [json];
        // Serializar campos anidados
        const serialized = json.map((row: any) => {
          const newRow: Record<string, any> = {};
          for (const key in row) {
            const value = row[key];
            if (typeof value === "object" && value !== null) {
              newRow[key] = JSON.stringify(value);
            } else {
              newRow[key] = value;
            }
          }
          return newRow;
        });
        const ws = XLSX.utils.json_to_sheet(serialized);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        resultBuffer = Buffer.from(
          XLSX.write(wb, { type: "buffer", bookType: "xlsx" })
        );
        contentType =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        outName = `${name?.split(".")[0]}.xlsx`;
      } else if (ext === "csv" && format === "json") {
        const csvText = buffer.toString("utf-8");
        const wbFromCsv = XLSX.read(csvText, { type: "string" });
        const ws = wbFromCsv.Sheets[wbFromCsv.SheetNames[0]];
        let json = XLSX.utils.sheet_to_json(ws);
        // Deserializar campos que sean JSON string
        json = json.map((row: any) => {
          const newRow: Record<string, any> = {};
          for (const key in row) {
            const value = row[key];
            if (
              typeof value === "string" &&
              (value.trim().startsWith("{") || value.trim().startsWith("["))
            ) {
              try {
                newRow[key] = JSON.parse(value);
              } catch {
                newRow[key] = value;
              }
            } else {
              newRow[key] = value;
            }
          }
          return newRow;
        });
        resultBuffer = Buffer.from(JSON.stringify(json, null, 2), "utf-8");
        contentType = "application/json";
        outName = `${name?.split(".")[0]}.json`;
      } else if (ext === "json" && format === "csv") {
        let json = JSON.parse(buffer.toString("utf-8"));
        if (!Array.isArray(json)) json = [json];
        // Serializar campos anidados
        const serialized = json.map((row: any) => {
          const newRow: Record<string, any> = {};
          for (const key in row) {
            const value = row[key];
            if (typeof value === "object" && value !== null) {
              newRow[key] = JSON.stringify(value);
            } else {
              newRow[key] = value;
            }
          }
          return newRow;
        });
        const ws = XLSX.utils.json_to_sheet(serialized);
        const csv = XLSX.utils.sheet_to_csv(ws);
        resultBuffer = Buffer.from(csv, "utf-8");
        contentType = "text/csv";
        outName = `${name?.split(".")[0]}.csv`;
      }
      if (!resultBuffer) {
        return new Response("Conversion not supported or not implemented", {
          status: 400,
        });
      }
      return new Response(new Uint8Array(resultBuffer), {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename=${outName}`,
        },
      });
    }
    // ZIP logic
    if (isZip && files.length > 0) {
      const zip = new JSZip();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const format = formats[i];
        const name = (file as any).name || `file_${i + 1}`;
        const ext = name.split(".").pop()?.toLowerCase() || "";
        if (
          typeof ext !== "string" ||
          !(ext in supportedConversions) ||
          !supportedConversions[
            ext as keyof typeof supportedConversions
          ].includes(format as string)
        ) {
          continue; // skip unsupported
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        let resultBuffer: Buffer | null = null;
        let outName = `${name.split(".")[0]}.${format}`;

        // TXT → DOCX
        if (ext === "txt" && format === "docx") {
          const text = buffer.toString("utf-8");
          const lines = text.split("\n");
          const doc = new Document({
            sections: [{
              properties: {},
              children: lines.map(line =>
                new Paragraph({
                  children: [new TextRun(line || " ")],
                })
              ),
            }],
          });
          resultBuffer = Buffer.from(await Packer.toBuffer(doc));
          outName = `${name.split(".")[0]}.docx`;
        }

        // MD → DOCX
        else if (ext === "md" && format === "docx") {
          const markdown = buffer.toString("utf-8");
          const html = await marked(markdown);
          const textContent = html.replace(/<[^>]+>/g, "\n").split("\n").filter(line => line.trim());
          const doc = new Document({
            sections: [{
              properties: {},
              children: textContent.map(line =>
                new Paragraph({
                  children: [new TextRun(line)],
                })
              ),
            }],
          });
          resultBuffer = Buffer.from(await Packer.toBuffer(doc));
          outName = `${name.split(".")[0]}.docx`;
        }

        // MD → HTML
        else if (ext === "md" && format === "html") {
          const markdown = buffer.toString("utf-8");
          const html = await marked(markdown);
          resultBuffer = Buffer.from(html, "utf-8");
          outName = `${name.split(".")[0]}.html`;
        }

        // HTML → PDF
        else if (ext === "html" && format === "pdf") {
          const html = buffer.toString("utf-8");
          const doc = new jsPDF();
          const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          const lines = doc.splitTextToSize(text, 180);
          doc.text(lines, 10, 10);
          resultBuffer = Buffer.from(doc.output("arraybuffer"));
          outName = `${name.split(".")[0]}.pdf`;
        }

        // DOCX → PDF
        else if (ext === "docx" && format === "pdf") {
          const { value: html } = await mammoth.convertToHtml({ buffer });
          const doc = new jsPDF();
          const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          const lines = doc.splitTextToSize(text, 180);
          doc.text(lines, 10, 10);
          resultBuffer = Buffer.from(doc.output("arraybuffer"));
          outName = `${name.split(".")[0]}.pdf`;
        }

        // DOCX → HTML/TXT
        else if (ext === "docx" && format === "html") {
          const { value } = await mammoth.convertToHtml({ buffer });
          resultBuffer = Buffer.from(value, "utf-8");
          outName = `${name.split(".")[0]}.html`;
        } else if (ext === "docx" && format === "txt") {
          const { value } = await mammoth.convertToHtml({ buffer });
          const text = value.replace(/<[^>]+>/g, "");
          resultBuffer = Buffer.from(text, "utf-8");
          outName = `${name.split(".")[0]}.txt`;
        }
        // XLSX/XLS/ODS → CSV/JSON/HTML
        else if (
          ["xlsx", "xls", "ods"].includes(ext) &&
          ["csv", "json", "html"].includes(format)
        ) {
          const wb = XLSX.read(buffer, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          if (format === "csv") {
            const csv = XLSX.utils.sheet_to_csv(ws);
            resultBuffer = Buffer.from(csv, "utf-8");
            outName = `${name.split(".")[0]}.csv`;
          } else if (format === "json") {
            const json = XLSX.utils.sheet_to_json(ws);
            resultBuffer = Buffer.from(JSON.stringify(json, null, 2), "utf-8");
            outName = `${name.split(".")[0]}.json`;
          } else if (format === "html") {
            const html = XLSX.utils.sheet_to_html(ws);
            resultBuffer = Buffer.from(html, "utf-8");
            outName = `${name.split(".")[0]}.html`;
          }
        }
        // CSV/JSON → XLSX
        else if (ext === "csv" && format === "xlsx") {
          const csvText = buffer.toString("utf-8");
          const wbFromCsv = XLSX.read(csvText, { type: "string" });
          const ws = wbFromCsv.Sheets[wbFromCsv.SheetNames[0]];
          const aoa = XLSX.utils.sheet_to_json(ws, {
            header: 1,
            raw: false,
          }) as unknown[][];
          const ws2 = XLSX.utils.aoa_to_sheet(aoa);
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws2, "Sheet1");
          resultBuffer = Buffer.from(
            XLSX.write(wb, { type: "buffer", bookType: "xlsx" })
          );
          outName = `${name.split(".")[0]}.xlsx`;
        } else if (ext === "json" && format === "xlsx") {
          let json = JSON.parse(buffer.toString("utf-8"));
          if (!Array.isArray(json)) json = [json];
          // Serializar campos anidados
          const serialized = json.map((row: any) => {
            const newRow: Record<string, any> = {};
            for (const key in row) {
              const value = row[key];
              if (typeof value === "object" && value !== null) {
                newRow[key] = JSON.stringify(value);
              } else {
                newRow[key] = value;
              }
            }
            return newRow;
          });
          const ws = XLSX.utils.json_to_sheet(serialized);
          const wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
          resultBuffer = Buffer.from(
            XLSX.write(wb, { type: "buffer", bookType: "xlsx" })
          );
          outName = `${name.split(".")[0]}.xlsx`;
        } else if (ext === "csv" && format === "json") {
          const csvText = buffer.toString("utf-8");
          const wbFromCsv = XLSX.read(csvText, { type: "string" });
          const ws = wbFromCsv.Sheets[wbFromCsv.SheetNames[0]];
          let json = XLSX.utils.sheet_to_json(ws);
          // Deserializar campos que sean JSON string
          json = json.map((row: any) => {
            const newRow: Record<string, any> = {};
            for (const key in row) {
              const value = row[key];
              if (
                typeof value === "string" &&
                (value.trim().startsWith("{") || value.trim().startsWith("["))
              ) {
                try {
                  newRow[key] = JSON.parse(value);
                } catch {
                  newRow[key] = value;
                }
              } else {
                newRow[key] = value;
              }
            }
            return newRow;
          });
          resultBuffer = Buffer.from(JSON.stringify(json, null, 2), "utf-8");
          outName = `${name.split(".")[0]}.json`;
        } else if (ext === "json" && format === "csv") {
          let json = JSON.parse(buffer.toString("utf-8"));
          if (!Array.isArray(json)) json = [json];
          // Serializar campos anidados
          const serialized = json.map((row: any) => {
            const newRow: Record<string, any> = {};
            for (const key in row) {
              const value = row[key];
              if (typeof value === "object" && value !== null) {
                newRow[key] = JSON.stringify(value);
              } else {
                newRow[key] = value;
              }
            }
            return newRow;
          });
          const ws = XLSX.utils.json_to_sheet(serialized);
          const csv = XLSX.utils.sheet_to_csv(ws);
          resultBuffer = Buffer.from(csv, "utf-8");
          outName = `${name.split(".")[0]}.csv`;
        }
        if (resultBuffer) {
          zip.file(outName, new Uint8Array(resultBuffer));
        }
      }
      const zipBuffer = await zip.generateAsync({ type: "uint8array" });
      return new Response(
        new Blob([zipBuffer.slice().buffer], { type: "application/zip" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": "attachment; filename=files.zip",
          },
        }
      );
    }
    return new Response("No files to process", { status: 400 });
  } catch (err: any) {
    return new Response("Error processing file(s): " + err.message, {
      status: 500,
    });
  }
};
