var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        demo: "./source/js/demo.js",
    },
    output: {
        filename: "./dist/[name].js",
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/style.css",{
            allChunks: true
        })
    ]
}

//运行 webpack-dev-server --hot --inline
