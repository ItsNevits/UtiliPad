import { defineAction } from "astro:actions";
import { z } from "astro:schema";

/**
 * Base64 conversion action (server-side)
 * Use this for heavy processing or when browser APIs are not available
 */
export const convertBase64 = defineAction({
  accept: "json",
  input: z.object({
    input: z.string(),
    mode: z.enum(["encode", "decode"]),
  }),
  handler: async ({ input, mode }) => {
    try {
      if (mode === "encode") {
        // Encode using Node.js Buffer
        const encoded = Buffer.from(input, "utf-8").toString("base64");
        return {
          success: true,
          output: encoded,
          isFile: false,
        };
      } else {
        // Decode using Node.js Buffer
        const decoded = Buffer.from(input, "base64").toString("utf-8");

        // Try to detect if it's a file by checking for binary content
        const isLikelyBinary = decoded.includes('\x00') || decoded.includes('\ufffd');

        return {
          success: true,
          output: decoded,
          isFile: isLikelyBinary,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Conversion failed",
        output: "",
        isFile: false,
      };
    }
  },
});

/**
 * Base64 file encoding action (server-side)
 * Handles file uploads and encodes them to Base64
 */
export const encodeFileToBase64 = defineAction({
  accept: "form",
  input: z.any(), // FormData
  handler: async (formData) => {
    try {
      const file = (formData as FormData).get("file");

      if (!file || !(file instanceof Blob)) {
        throw new Error("No file uploaded");
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64 = buffer.toString("base64");

      // Get file metadata
      const fileName = (file as any).name || "file";
      const mimeType = (file as any).type || "application/octet-stream";

      return {
        success: true,
        base64,
        fileName,
        mimeType,
        size: buffer.length,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to encode file",
        base64: "",
        fileName: "",
        mimeType: "",
        size: 0,
      };
    }
  },
});
