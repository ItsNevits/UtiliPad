import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import sharp from "sharp";
import JSZip from "jszip";

export const convertImages = defineAction({
  accept: "form",
  input: z.any(), // FormData no tiene schema estricto
  handler: async (formData) => {
    // Detectar si son múltiples archivos (para ZIP)
    const files: Blob[] = [];
    const formats: string[] = [];
    let isZip = false;

    for (const entry of (formData as FormData).entries()) {
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

    // Fallback para archivo único (API antigua)
    if (!isZip && files.length === 0) {
      const file = (formData as FormData).get("file");
      const format = ((formData as FormData).get("format") as string) || "jpeg";

      if (!file || !(file instanceof Blob)) {
        throw new Error("No file uploaded");
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

      return {
        type: "single",
        buffer: Array.from(new Uint8Array(outputBuffer)),
        format,
        filename: `converted.${format}`,
      };
    }

    // Lógica ZIP
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
      return {
        type: "zip",
        buffer: Array.from(zipBuffer),
        filename: "images.zip",
      };
    }

    throw new Error("No files to process");
  },
});
