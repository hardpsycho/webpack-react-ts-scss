import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import htmlWebpackPlugin from "html-webpack-plugin"
import FaviconsWebpackPlugin from "favicons-webpack-plugin"

const defaultHtmlFile = "./src/index.html" // path to the html template

export const builtPlugins = (mode: string): webpack.WebpackPluginInstance[] => {
    let plugins = []

    if(mode === "production") {
        plugins.push(new FaviconsWebpackPlugin({
            logo: './src/assets/images/favicon/favicon.png', // svg works too!
            prefix: 'assets/images/favicons/',
            mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
            devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
            favicons: {
                appName: 'my-app',
                appDescription: 'My awesome App',
                developerName: 'Me',
                developerURL: null, // prevent retrieving from the nearest package.json
                background: '#ddd',
                theme_color: '#333',
                icons: {
                    coast: false,
                    yandex: false
                }
            }
        }))
    } else if (mode === "development"){

    }

    plugins.push(new MiniCssExtractPlugin({filename: mode === "production" ? "[name].[contenthash].css" : "[name].css",}))
    plugins.push(new htmlWebpackPlugin({template: defaultHtmlFile, inject: 'body'}))

    return plugins
}