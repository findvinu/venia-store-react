const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Update this if your entry point is different
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Match all SCSS files
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Turns CSS into CommonJS
          {
            loader: "sass-loader", // Compiles Sass to CSS
            options: {
              // Automatically include global SCSS files in every SCSS file
              additionalData: `
                @use './src/assets/scss/_variables.scss' as *;
                @use './src/assets/scss/_mixin.scss' as *;
                @use './src/assets/scss/_reset.scss' as *;
              `,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"], // Include file types
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
