/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */

const config = {
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${prefix}/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default config;
