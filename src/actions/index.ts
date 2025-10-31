import { createUpdateProcessCount, mostUsedTool } from "./process-count";
import { sendContactEmail } from "./contact";
import { convertImages } from "./images";
import { convertFiles, getSupportedConversions } from "./files";
import { convertBase64, encodeFileToBase64 } from "./text";
import { searchTools } from "./search";

export const server = {
  // Process count actions
  createUpdateProcessCount,
  mostUsedTool,

  // Contact actions
  sendContactEmail,

  // Image actions
  convertImages,

  // File actions
  convertFiles,
  getSupportedConversions,

  // Text actions
  convertBase64,
  encodeFileToBase64,

  // Search actions
  searchTools,
};
