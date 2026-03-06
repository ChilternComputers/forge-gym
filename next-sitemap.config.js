/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://forgegym.co.uk",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "out",
  robotsTxtOptions: {
    includeHost: false,
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Homepage
    if (path === "/") {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
    }
    // High-value pages
    if (["/classes/", "/membership/", "/free-trial/"].includes(path)) {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
    }
    // Blog posts
    if (path.startsWith("/blog")) {
      return { loc: path, changefreq: "monthly", priority: 0.6, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
    }
    // Legal / low-priority
    if (["/privacy/", "/accessibility/", "/terms/"].includes(path)) {
      return { loc: path, changefreq: "yearly", priority: 0.3, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
    }
    // Default
    return { loc: path, changefreq: "monthly", priority: 0.7, lastmod: config.autoLastmod ? new Date().toISOString() : undefined };
  },
};
