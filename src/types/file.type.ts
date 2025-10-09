/**
 * File-related types
 */

export interface FilesSupported {
  docx: string[];
  xlsx: string[];
  xls: string[];
  ods: string[];
  csv: string[];
  json: string[];
}

export type FileExtension = keyof FilesSupported;

export type SupportedOutputFormat = string;
