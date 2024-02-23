module.exports = {
  "stories": ["./**/*.stories.mdx", "./**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
    });
    config.watchOptions = {
      poll: 1000, // ms
      aggregateTimeout: 500, // ms
      ignored: ["node_modules"],
    };
    return config;
  },
  "framework": {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true
  }
};