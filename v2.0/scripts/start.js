require("./env");
const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();
const config = require("../config/main");


app.use(middleware(compiler, {
    // webpack-dev-middleware options
    publicPath: "/",
    contentBase: path.resolve(config.basePath, config.contentBase),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    // stats       : 'normal',
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/assets", express.static('public/assets'));

app.use('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
