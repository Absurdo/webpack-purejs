const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      /* {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 // in bytes
            }
          }
        ]
      } */
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "source:srcset"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".scss"]
  },
  plugins: [
    ///...
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      templateParameters: {
        titulo: "Astound test",
        encabezamiento: "Mock of a E-commerce page"
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
