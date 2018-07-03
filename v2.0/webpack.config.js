const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const config = require("./config/main");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const webpackConfig = {
    mode: config.env,
    // This will run when we use npm start
    devServer: {
        contentBase: config.contentBase,
        overlay: true,
        port: 3000
    },
    entry: ['./src/index'],
    output: {
        publicPath: "/",
        filename: 'bundle.js',
        path: path.resolve(__dirname, config.outDir)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
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
                        },
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
    devtool: config.sourcemaps ? "source-map" : false,
    plugins: [
        htmlPlugin,
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: true,
        }),
    ],
    // Use this for import ... from root link at srcDir
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, config.srcDir),
        ]
    },
};

if (config.env === "development") {
    webpackConfig.entry = [
        'webpack-hot-middleware/client',
        './src/index',
    ];

    webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ];
}

module.exports = webpackConfig;