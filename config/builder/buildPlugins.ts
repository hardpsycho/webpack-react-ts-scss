import webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const defaultHtmlFile = "./src/index.html" // path to the html template

export const builtPlugins = (mode: string): webpack.WebpackPluginInstance[] => {
    let plugins = [
        new MiniCssExtractPlugin(),
        new htmlWebpackPlugin({template: defaultHtmlFile, inject: 'body'})
    ]

    if(mode === "production") {

    } else if (mode === "development"){

    }

    return plugins
}