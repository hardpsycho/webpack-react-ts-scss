import { Configuration } from "webpack";
import { merge } from "webpack-merge"
import 'webpack-dev-server';
import webpackConfig from "./webpack.config"

const devServerConfig = merge<Configuration>(webpackConfig,
{
    devServer: {
        port: 3000,
        hot: true,
        open: true
    }
});

export default devServerConfig;