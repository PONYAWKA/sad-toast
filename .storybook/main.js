const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components"),
      Hooks: path.resolve(__dirname, "../src/Hooks"),
      utils: path.resolve(__dirname, "../src/utils"),
      Types: path.resolve(__dirname, "../src/Types"),
      icons: path.resolve(__dirname, "../src/icons"),
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
