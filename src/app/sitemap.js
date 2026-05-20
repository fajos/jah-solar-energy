export default function sitemap() {
  const baseUrl = "https://jah-solar-energy.vercel.app"; // Update with custom domain

  const pages = ["", "/solar", "/electrical", "/projects", "/contact"];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}