const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 3010,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "output.js"
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html")
        })
    ],
}