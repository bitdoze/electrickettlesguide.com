// Site configuration
export const siteConfig = {
  // Site details from config.json:site
  title: "Electric Kettles Guide", // from config.json:site.title
  // description is used from existing site.ts, will be updated by config.json:metadata.meta_description
  // url is removed, Astro.site will be used

  // from config.json:site (logo related)
  logo: "/logo.svg",
  logoWidth: "300",
  logoHeight: "90",
  logoText: "Electric Kettles Guide",

  // SEO metadata from config.json:metadata
  author: "Electric Kettles Guide", // from config.json:metadata.meta_author
  description:
    "Your ultimate guide to Electric Kettles. Discover the best Electric Kettles, recipes, tips, and expert reviews to make perfect tea every time.", // from config.json:metadata.meta_description
  ogImage: "/images/og-image.png", // from config.json:metadata.meta_image (replaces defaultImage)

  // Pagination settings from config.json:settings
  postsPerPage: 11, // from config.json:settings.pagination
  summaryLength: 100, // from config.json:settings.summary_length

  // SEO settings (existing in site.ts)
  noindex: {
    tags: true, // Set to true to add noindex meta tag to tag pages
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },

  // Params from config.json:params
  copyright: "Copyright © 2025 Electric Kettles Guide", // from config.json:params.copyright
};
