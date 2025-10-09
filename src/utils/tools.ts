import { TOOLS_CATEGORIES, type Tool } from "@/config/tools.config";
import { getTranslation } from "@/i18n/index";

/**
 * Obtiene las herramientas con traducciones aplicadas
 */
export const getTranslatedTools = (categoryId: string, lang: string) => {
  let tools: Tool[];

  if (categoryId === "all") {
    // Mostrar todas las herramientas de todas las categorías
    tools = TOOLS_CATEGORIES.flatMap((category) => category.tools);
  } else {
    // Mostrar herramientas de una categoría específica
    const category = TOOLS_CATEGORIES.find((cat) => cat.id === categoryId);
    tools = category ? category.tools : [];
  }

  const itemsRaw = getTranslation(lang, "tools.items");
  const badgesRaw = getTranslation(lang, "tools.badges");
  const items: Record<string, { name: string; description: string }> =
    typeof itemsRaw === "object" && itemsRaw !== null ? itemsRaw : {};
  const badges: Record<string, string> =
    typeof badgesRaw === "object" && badgesRaw !== null ? badgesRaw : {};

  // Aplicar traducciones
  return tools
    .map((tool) => ({
      ...tool,
      name: items[tool.id]?.name || tool.name,
      description: items[tool.id]?.description || tool.description,
      translatedBadge: badges?.[tool.bagde as string] || tool.bagde,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * DEPRECATED: Usar actions.createUpdateProcessCount directamente
 * Llama al API de process-count para una herramienta específica
 */
export const fetchIncrementProcessCountByToolId = async (toolId: string) => {
  // Esta función ya no se usa, mantenerla por compatibilidad
  // Se debe usar: actions.createUpdateProcessCount({ process_name: toolId })
  console.warn(
    "fetchIncrementProcessCountByToolId is deprecated, use actions.createUpdateProcessCount instead"
  );
  throw new Error("Use actions.createUpdateProcessCount instead");
};

/**
 * DEPRECATED: Usar actions.mostUsedTool directamente
 * Llama al API de process-count/top para obtener el ranking de herramientas
 */
export const fetchTopProcessCounts = async () => {
  // Esta función ya no se usa, mantenerla por compatibilidad
  // Se debe usar: actions.mostUsedTool({})
  console.warn(
    "fetchTopProcessCounts is deprecated, use actions.mostUsedTool instead"
  );
  throw new Error("Use actions.mostUsedTool instead");
};

/**
 * Obtiene las categorías con traducciones aplicadas
 */
export const getTranslatedCategories = (lang: string) => {
  return TOOLS_CATEGORIES.map((category) => ({
    ...category,
    name:
      getTranslation(lang, `tools.categories.${category.id}`) || category.name,
    title:
      getTranslation(lang, `tools.categoryTitles.${category.id}`) ||
      category.title,
    description:
      getTranslation(lang, `tools.categoryDescriptions.${category.id}`) ||
      category.description,
  }));
};
