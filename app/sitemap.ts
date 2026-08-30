import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://stemenabled.ng";
  return ["","about","stem-lab","teacher-training","programmes","consulting","assessment","contact","insights"].map(path => ({
    url: `${base}/${path}`,
    lastModified: new Date(),
    changeFrequency: path === "insights" ? "weekly" : "monthly",
    priority: path === "" ? 1 : .7
  }));
}
