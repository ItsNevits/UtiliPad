/**
 * Base64-related types
 */

export type Base64Mode = "encode" | "decode";

export interface Base64FileDetection {
  mimeType: string;
  extension: string;
  size: number;
  blob: Blob;
  dataUrl: string;
}

export type FilePreviewType = "image" | "pdf" | "audio" | "video" | "text" | "binary";

export interface Base64ConversionResult {
  output: string;
  fileDetection?: Base64FileDetection;
  previewType?: FilePreviewType;
}

export const MIME_TYPE_MAP: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "application/pdf": "pdf",
  "audio/mpeg": "mp3",
  "audio/wav": "wav",
  "audio/ogg": "ogg",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/ogg": "ogv",
  "text/plain": "txt",
  "text/html": "html",
  "text/css": "css",
  "text/javascript": "js",
  "application/json": "json",
};

export interface MagicNumber {
  bytes: number[];
  mimeType: string;
}

export const MAGIC_NUMBERS: MagicNumber[] = [
  // Images
  { bytes: [0xFF, 0xD8, 0xFF], mimeType: "image/jpeg" },
  { bytes: [0x89, 0x50, 0x4E, 0x47], mimeType: "image/png" },
  { bytes: [0x47, 0x49, 0x46], mimeType: "image/gif" },
  { bytes: [0x52, 0x49, 0x46, 0x46], mimeType: "image/webp" }, // RIFF (WebP usa RIFF)

  // Documents
  { bytes: [0x25, 0x50, 0x44, 0x46], mimeType: "application/pdf" },

  // Audio
  { bytes: [0x49, 0x44, 0x33], mimeType: "audio/mpeg" }, // ID3 (MP3)
  { bytes: [0xFF, 0xFB], mimeType: "audio/mpeg" }, // MP3 sin ID3
  { bytes: [0x52, 0x49, 0x46, 0x46], mimeType: "audio/wav" }, // RIFF (WAV usa RIFF)

  // Video
  { bytes: [0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70], mimeType: "video/mp4" },
  { bytes: [0x00, 0x00, 0x00, 0x1C, 0x66, 0x74, 0x79, 0x70], mimeType: "video/mp4" },
];
