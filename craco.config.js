const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "primary-color": "#EB564D",
              "link-color": "#0DD078",
              "success-color": "#0DD078",
              "border-radius-base": "40px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
