export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://jahsolarenergy.com/", // Update with custom domain
  };
}