export default function sitemap() {
  const baseUrl = "https://jahsolarenergy.com/";

  const pages = ["", "/solar", "/electrical", "/projects", "/contact"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}