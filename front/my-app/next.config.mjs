/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 'apple.com','img.icons8.com', 'media.istockphoto.com'],
    },
    experimental: {
        optimizePackageImports: ['react-icons'],
      },
}

export default nextConfig;
