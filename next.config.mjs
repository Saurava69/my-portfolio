/** @type {import('next').NextConfig} */

// Set to true when using custom domain, false for github.io/repo-name
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';
const repoName = 'my-portfolio';

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  // basePath is only needed when NOT using a custom domain
  basePath: (process.env.GITHUB_ACTIONS && !useCustomDomain) ? `/${repoName}` : '',
  assetPrefix: (process.env.GITHUB_ACTIONS && !useCustomDomain) ? `/${repoName}/` : '',
  trailingSlash: true,
  // Pass basePath to client-side
  env: {
    NEXT_PUBLIC_BASE_PATH: (process.env.GITHUB_ACTIONS && !useCustomDomain) ? `/${repoName}` : '',
  },
};

export default nextConfig;
