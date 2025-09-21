import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://utilipad.com/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Block specific paths if needed
# Disallow: /admin/
# Disallow: /api/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Block irrelevant bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
