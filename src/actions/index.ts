import { createUpdateProcessCount, mostUsedTool } from "./process-count";
import { sendContactEmail } from "./contact";
import { convertImages } from "./images";
import { convertFiles, getSupportedConversions } from "./files";

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
};
