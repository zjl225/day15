const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    mode: "development",
    entry: './src/index.js', //配置入口文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
}
