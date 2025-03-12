/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.rotaractdypcoe.org' || 'https://www.rotaractdypcoe.org/marathon',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date().toISOString(),
}