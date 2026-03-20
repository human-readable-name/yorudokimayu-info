const main = {
  "stories": ["./**/*.stories.mdx", "./**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-docs"],
  "framework": {
    name: "@storybook/nextjs-vite",
    options: {
      builder: {
        useSWC: true,
      },
    },
  }
};

export default main;