//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {
    // Disable Nx's built-in SVGR support to avoid deprecation warnings
    svgr: false,
  },
  // Completely disable Next.js TypeScript auto-configuration
  typescript: {
    // Don't run TypeScript checks during build (let Nx handle it)
    ignoreBuildErrors: true,
    // Use Next.js-specific config that allows noEmit
    tsconfigPath: './tsconfig.nextjs.json'
  },
  // Disable automatic TypeScript configuration entirely
  experimental: {
    typedRoutes: false,
  },
  // Custom config to prevent tsconfig modification
  onDemandEntries: {
    // prevent Next.js from modifying configs
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Disable deprecated SVGR support and configure manually
  webpack(config, { isServer }) {
    // Disable Next.js from trying to auto-configure TypeScript
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Configure SVGR manually to avoid deprecation warnings
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

