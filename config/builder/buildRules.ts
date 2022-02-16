import webpack = require("webpack")

export const buildRules = (): webpack.RuleSetRule[] => {
    return [
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
    ]
}