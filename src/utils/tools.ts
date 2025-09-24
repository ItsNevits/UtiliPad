import { TOOLS_CATEGORIES, type Tool } from "@constants/tools";

/**
 * Obtiene las herramientas con traducciones aplicadas
 */
export const getTranslatedTools = (categoryId: string, translations: any) => {
  let tools: Tool[];

  if (categoryId === "all") {
    // Mostrar todas las herramientas de todas las categorías
    tools = TOOLS_CATEGORIES.flatMap((category) => category.tools);
  } else {
    // Mostrar herramientas de una categoría específica
    const category = TOOLS_CATEGORIES.find((cat) => cat.id === categoryId);
    tools = category ? category.tools : [];
  }

  // Aplicar traducciones
  return tools
    .map((tool) => ({
      ...tool,
      name: translations.tools.items[tool.id]?.name || tool.name,
      description:
        translations.tools.items[tool.id]?.description || tool.description,
      translatedBadge: translations.tools.badges[tool.bagde] || tool.bagde,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Obtiene las categorías con traducciones aplicadas
 */
export const getTranslatedCategories = (translations: any) => {
  return TOOLS_CATEGORIES.map((category) => ({
    ...category,
    name: translations.tools.categories[category.id] || category.name,
    title: translations.tools.categoryTitles[category.id] || category.title,
    description:
      translations.tools.categoryDescriptions[category.id] ||
      category.description,
  }));
};
