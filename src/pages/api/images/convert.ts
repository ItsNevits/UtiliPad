export const prerender = false;

import sharp from "sharp";
import JSZip from "jszip";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    // Detect if multiple files are sent (for ZIP)
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
    // Fallback for single file (old API)
    if (!isZip && files.length === 0) {
      const file = formData.get("file");
      const format = formData.get("format") || "jpeg";
      if (!file || !(file instanceof Blob)) {
        return new Response("No file uploaded", { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      let outputBuffer: Buffer;
      switch (format) {
        case "png":
          outputBuffer = await sharp(buffer).png().toBuffer();
          break;
        case "webp":
          outputBuffer = await sharp(buffer).webp().toBuffer();
          break;
        case "tiff":
          outputBuffer = await sharp(buffer).tiff().toBuffer();
          break;
        case "avif":
          outputBuffer = await sharp(buffer).avif().toBuffer();
          break;
        case "jpeg":
        default:
          outputBuffer = await sharp(buffer).jpeg().toBuffer();
          break;
      }
      return new Response(new Uint8Array(outputBuffer), {
        status: 200,
        headers: {
          "Content-Type": `image/${format}`,
          "Content-Disposition": `attachment; filename=converted.${format}`,
        },
      });
    }
    // ZIP logic
    if (isZip && files.length > 0) {
      const zip = new JSZip();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const format = formats[i] || "jpeg";
        const name = (file as any).name || `image_${i + 1}`;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        let outputBuffer: Buffer;
        switch (format) {
          case "png":
            outputBuffer = await sharp(buffer).png().toBuffer();
            break;
          case "webp":
            outputBuffer = await sharp(buffer).webp().toBuffer();
            break;
          case "tiff":
            outputBuffer = await sharp(buffer).tiff().toBuffer();
            break;
          case "avif":
            outputBuffer = await sharp(buffer).avif().toBuffer();
            break;
          case "jpeg":
          default:
            outputBuffer = await sharp(buffer).jpeg().toBuffer();
            break;
        }
        zip.file(
          `${name.split(".")[0]}.${format}`,
          new Uint8Array(outputBuffer)
        );
      }
      const zipBuffer = await zip.generateAsync({ type: "uint8array" });
      return new Response(
        new Blob([zipBuffer.slice().buffer], { type: "application/zip" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": "attachment; filename=images.zip",
          },
        }
      );
    }
    return new Response("No files to process", { status: 400 });
  } catch (err: any) {
    return new Response("Error processing image(s): " + err.message, {
      status: 500,
    });
  }
};
