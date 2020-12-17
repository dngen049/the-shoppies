const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
  plugins: [
    {
      plugin: require("craco-antd"),
      options: {
        customizeTheme: {
          ...getThemeVariables({ dark: false }),
          "@primary-color": "#FACD04",
          "@border-radius-base": "6px",
          "@form-vertical-label-padding": "0px",
          "@error-color": "#f76565",
          "@layout-header-background": "#FFFFFF"
        },
        lessLoaderOptions: {
          lessOptions: {
            noIeCompat: true,
          },
        },
      },
    },
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig }) => {
          if (typeof cracoConfig.eslint.enable !== "undefined") {
            cracoConfig.disableEslint = !cracoConfig.eslint.enable;
          }
          delete cracoConfig.eslint;
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
          if (
            typeof cracoConfig.disableEslint !== "undefined" &&
            cracoConfig.disableEslint === true
          ) {
            webpackConfig.plugins = webpackConfig.plugins.filter(
              (instance) => instance.constructor.name !== "ESLintWebpackPlugin"
            );
          }
          return webpackConfig;
        },
      },
    },
  ],
};