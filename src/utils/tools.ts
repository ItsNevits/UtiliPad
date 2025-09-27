import { TOOLS_CATEGORIES, type Tool } from "@constants/tools";
import { getTranslation } from "@i18n/index";

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
 * Llama al API de process-count para una herramienta específica
 */
export const fetchIncrementProcessCountByToolId = async (toolId: string) => {
  const response = await fetch(`/api/process-count`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ process_name: toolId }),
  });
  if (!response.ok)
    throw new Error("Error al incrementar el conteo de procesos");
  return await response.json();
};

/**
 * Llama al API de process-count/top para obtener el ranking de herramientas
 */
export const fetchTopProcessCounts = async () => {
  const response = await fetch(`/api/process-count/top`);
  if (!response.ok) throw new Error("Error al obtener el ranking de procesos");
  return await response.json();
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
