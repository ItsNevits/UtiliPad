/**
 * Tool-related types
 */

export interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  bagde: string;
  isAvailable: boolean;
  component: string;
}

export interface Category {
  id: string;
  name: string;
  title: string;
  description: string;
  tools: Tool[];
}

export type ToolId = string;
export type CategoryId = 'files' | 'images' | 'text' | 'encryption';
