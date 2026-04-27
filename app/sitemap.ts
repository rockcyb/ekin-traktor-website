import type { MetadataRoute } from "next";

const baseUrl = "https://ekintraktor.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/traktorler",
    "/tarim-ekipmanlari",
    "/hakkimizda",
    "/iletisim",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
