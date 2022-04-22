const path = require("path");

module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });

    config.module.rules.push({
      test: /\.pcss$/,
      use: [
              "style-loader", 
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[name]__[local]",
                  },
                  importLoaders: 1,
                }
              }, 
              "sass-loader"
            ],
      include: path.resolve(__dirname, "../")
    });

    // Return the altered config
    return config;
  }
}
