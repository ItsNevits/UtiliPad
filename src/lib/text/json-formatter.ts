/**
 * JSON Formatter Business Logic
 * Pure functions for JSON parsing, formatting, and validation
 */

export interface JsonFormatterResult {
  isValid: boolean;
  data?: any;
  formatted?: string;
  error?: string;
}

export interface JsonStats {
  originalSize: number;
  formattedSize: number;
}

/**
 * Parse and validate JSON string
 */
export function parseJson(input: string): JsonFormatterResult {
  if (!input.trim()) {
    return {
      isValid: false,
      error: 'Empty input',
    };
  }

  try {
    const data = JSON.parse(input);
    return {
      isValid: true,
      data,
    };
  } catch (error) {
    return {
      isValid: false,
      error: (error as Error).message,
    };
  }
}

/**
 * Format JSON with specified indentation
 */
export function formatJson(data: any, indent: number = 2): string {
  return JSON.stringify(data, null, indent);
}

/**
 * Minify JSON (remove all whitespace)
 */
export function minifyJson(data: any): string {
  return JSON.stringify(data);
}

/**
 * Calculate sizes for original and formatted JSON
 */
export function calculateSizes(original: string, formatted: string): JsonStats {
  return {
    originalSize: new Blob([original]).size,
    formattedSize: new Blob([formatted]).size,
  };
}

/**
 * Format bytes to human-readable string
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 bytes';

  const k = 1024;
  const sizes = ['bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Download JSON as file
 */
export function downloadJson(content: string, filename: string = 'formatted.json'): void {
  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
