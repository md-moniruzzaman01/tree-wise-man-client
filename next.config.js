/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "leafty.codelayers.net",
      "encrypted-tbn0.gstatic.com",
      "maps.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
