const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components"),
      theme: path.resolve(__dirname, "../src/theme"),
      utils: path.resolve(__dirname, "../src/utils"),
      types: path.resolve(__dirname, "../src/types"),
      icons: path.resolve(__dirname, "../src/components/icons"),
      assets: path.resolve(__dirname, "../src/assets"),
      ["@"]: path.resolve(__dirname, "../src"),
    };
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-color-picker",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
