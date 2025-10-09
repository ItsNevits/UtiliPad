/**
 * Clipboard utilities hook
 * Provides copy and paste functionality with error handling
 */

export interface ClipboardResult {
  success: boolean;
  error?: string;
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<ClipboardResult> {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message,
    };
  }
}

/**
 * Read text from clipboard
 */
export async function readFromClipboard(): Promise<{ text: string; error?: string }> {
  try {
    const text = await navigator.clipboard.readText();
    return { text };
  } catch (error) {
    return {
      text: '',
      error: (error as Error).message,
    };
  }
}

/**
 * Check if clipboard API is available
 */
export function isClipboardAvailable(): boolean {
  return !!navigator.clipboard;
}
