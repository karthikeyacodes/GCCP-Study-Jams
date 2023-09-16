/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    basePath: '/github-pages',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
