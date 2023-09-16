/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    basePath: '/GCCP-Study-Jams',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
