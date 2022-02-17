import path from "path"
import { Configuration } from "webpack";
import { builtPlugins } from "./builder/buildPlugins";
import { buildRules } from "./builder/buildRules";

process.env.BROWSERSLIST_CONFIG = path.resolve(__dirname, ".browserslistrc")

let mode = "none"; // "production" | "development" | "none"

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
        rules: buildRules(),
    },
    plugins: builtPlugins(mode),
    resolve: {
        extensions: [".ts", ".js"],
    },
}

export default config;