const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

process.env.NODE_ENV = 'development';

module.exports = {
    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        overlay: true,
        port: 3000
    },
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
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]

                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/imgaes'
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        htmlPlugin,
        new ExtractTextPlugin("bundle.css"),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './src'),
        ]
    },
};