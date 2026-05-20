export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jah-solar-energy.vercel.app/sitemap.xml", // Update with custom domain
  };
}