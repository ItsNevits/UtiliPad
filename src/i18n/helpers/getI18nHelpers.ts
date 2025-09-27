// Carga dinámica de traducciones por idioma (importa el index.ts de cada idioma)
import en from "../locales/en/index";
import es from "../locales/es/index";

const locales: Record<string, any> = {
  en,
  es,
};

/**
 * Obtiene la traducción para una clave y un idioma dados (sincrónico).
 * @param lang Código de idioma (ej: 'en', 'es')
 * @param key Clave de traducción en notación punto (ej: 'pages.home.title')
 */
export function getTranslation(lang: string, key: string): string {
  const mod = locales[lang];
  if (!mod) return key;
  let obj = mod.default || mod;
  for (const part of key.split(".")) {
    if (obj && typeof obj === "object" && part in obj) {
      obj = obj[part];
    } else {
      return key;
    }
  }
  return obj;
}
