const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "hostApp",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            // remoteApp:
            //   "remoteApp@http://localhost:3001/_next/static/chunks/remoteEntry.js",
            header:
              "header@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false,
            },
          },
        })
      );
    }
    return config;
  },
};
