const NODE_ENV = process.env.NODE_ENV || 'development';

let config = {
    publicPath: "/",
    contentBase: __dirname + "/../public",
    env: NODE_ENV,
    basePath: __dirname + '/../',
    srcDir: __dirname + '/../src',
    outDir: __dirname + '/../dist',
    sourcemaps: NODE_ENV === 'development',
    // Whether to enable verbose logging
    verbose: false,
};


module.exports = config;
