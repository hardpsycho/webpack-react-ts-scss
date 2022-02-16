import * as path from "path"
import 'webpack-dev-server';
const htmlWebpackPlugin = require("html-webpack-plugin")
import { Configuration } from "webpack";

process.env.BROWSERSLIST_CONFIG = path.resolve(__dirname, ".browserslistrc")

let mode = "none"; // "production" | "development" | "none"
const defaultHtmlFile = "./src/index.html" // path to the html template

if(process.env.NODE_ENV === "production") {
    mode = "production"
} else if (process.env.NODE_ENV === "development") {
    mode = "development"
}

const config: Configuration = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'index.bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: "html-loader"
            },
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({template: defaultHtmlFile, inject: 'body'})
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true
    }
}

export default config;