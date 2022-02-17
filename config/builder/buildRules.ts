import webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

export const buildRules = (): webpack.RuleSetRule[] => {
    return [
        {
            test: /\.html$/i,
            use: "html-loader"
        },
        {
            test: /\.s?[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        // Options
                                    },
                                ],
                            ],
                        },
                    },
                },
                "sass-loader"
            ]
        },
        {
            test: /\.tsx?$/,
            exclude: [/node_modules/, /build/],
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        ["@babel/preset-react", {runtime: "automatic"}],
                        "@babel/preset-typescript"],
                },
            },
        },
    ]
}