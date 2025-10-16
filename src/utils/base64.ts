/**
 * Base64 encoding/decoding utilities
 */

import type {
  Base64ConversionResult,
  Base64FileDetection,
  FilePreviewType,
} from "@/types/base64.type";
import { MAGIC_NUMBERS, MIME_TYPE_MAP } from "@/types/base64.type";

/**
 * Check if we're in a browser environment
 */
const isBrowser = typeof window !== "undefined";

/**
 * Encode text to Base64 (Client-side)
 *
 * Note: Uses browser-native btoa API which is marked as deprecated
 * in Node.js TypeScript definitions, but works perfectly in browsers.
 * The deprecation warning is for Node.js only, not for browser usage.
 *
 * For server-side encoding, use the action: actions.convertBase64()
 * which uses Node.js Buffer API without warnings.
 */
export function encodeToBase64(text: string): string {
  try {
    if (isBrowser) {
      // Browser: Use native btoa with UTF-8 encoding
      const bytes = new TextEncoder().encode(text);
      const binString = String.fromCharCode(...bytes);
      return btoa(binString);
    } else {
      // Node.js: Use Buffer (for SSR/build time only)
      // For server actions, prefer actions.convertBase64()
      return Buffer.from(text, "utf-8").toString("base64");
    }
  } catch (error) {
    throw new Error("Failed to encode text to Base64");
  }
}

/**
 * Decode Base64 to text (Client-side)
 *
 * Note: Uses browser-native atob API (see note above on deprecation warnings)
 * For server-side decoding, use: actions.convertBase64()
 */
export function decodeFromBase64(base64: string): string {
  try {
    if (isBrowser) {
      // Browser: Use native atob with UTF-8 decoding
      const binString = atob(base64);
      const bytes = Uint8Array.from(binString, (char) => char.charCodeAt(0));
      return new TextDecoder().decode(bytes);
    } else {
      // Node.js: Use Buffer (for SSR/build time only)
      // For server actions, prefer actions.convertBase64()
      return Buffer.from(base64, "base64").toString("utf-8");
    }
  } catch (error) {
    throw new Error("Invalid Base64 string");
  }
}

/**
 * Encode file to Base64
 */
export async function encodeFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        const arrayBuffer = e.target.result as ArrayBuffer;
        const bytes = new Uint8Array(arrayBuffer);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        resolve(base64);
      } else {
        reject(new Error("Failed to read file"));
      }
    };

    reader.onerror = () => reject(new Error("Error reading file"));
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Detect MIME type from binary data using magic numbers
 */
export function detectMimeType(binaryData: string): string | null {
  const uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Check each magic number signature
  for (const magic of MAGIC_NUMBERS) {
    let matches = true;
    for (let i = 0; i < magic.bytes.length; i++) {
      if (uint8Array[i] !== magic.bytes[i]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      return magic.mimeType;
    }
  }

  return null;
}

/**
 * Get file extension from MIME type
 */
export function getExtensionFromMime(mimeType: string): string {
  return MIME_TYPE_MAP[mimeType] || "bin";
}

/**
 * Determine preview type from MIME type
 */
export function getPreviewType(mimeType: string): FilePreviewType {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType === "application/pdf") return "pdf";
  if (mimeType.startsWith("audio/")) return "audio";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("text/")) return "text";
  return "binary";
}

/**
 * Convert Base64 to Blob
 */
export function base64ToBlob(base64Data: string, mimeType: string): Blob {
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}

/**
 * Detect and process Base64 file
 */
export function detectBase64File(
  base64Input: string
): Base64FileDetection | null {
  try {
    // Remove data URL prefix if present
    const base64Data = base64Input.replace(/^data:([^;]+);base64,/, "");
    const mimeMatch = base64Input.match(/^data:([^;]+);base64,/);

    let mimeType: string | null = null;

    if (mimeMatch) {
      // Has MIME type in data URL
      mimeType = mimeMatch[1];
    } else {
      // Try to detect from binary data
      const decoded = atob(base64Data);
      mimeType = detectMimeType(decoded);
    }

    if (!mimeType) {
      return null; // It's plain text, not a file
    }

    const blob = base64ToBlob(base64Data, mimeType);
    const dataUrl = `data:${mimeType};base64,${base64Data}`;
    const extension = getExtensionFromMime(mimeType);

    return {
      mimeType,
      extension,
      size: blob.size,
      blob,
      dataUrl,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Process Base64 conversion (encode or decode)
 */
export function processBase64Conversion(
  input: string,
  mode: "encode" | "decode"
): Base64ConversionResult {
  if (mode === "encode") {
    const encoded = encodeToBase64(input);
    return { output: encoded };
  } else {
    // Decode mode - try to detect if it's a file
    const fileDetection = detectBase64File(input);

    if (fileDetection) {
      // It's a file
      const previewType = getPreviewType(fileDetection.mimeType);
      const output =
        previewType === "text"
          ? decodeFromBase64(input.replace(/^data:([^;]+);base64,/, ""))
          : "";

      return {
        output,
        fileDetection,
        previewType,
      };
    } else {
      // It's plain text
      const decoded = decodeFromBase64(input);
      return { output: decoded };
    }
  }
}

/**
 * Download blob as file
 */
export function downloadBlob(
  blob: Blob,
  filename: string = "decoded-file.bin"
): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
