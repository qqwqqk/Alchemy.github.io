const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/script/main.js",        //唯一入口文件,
    output: {
        path: __dirname + "/dist",          //打包后的文件存放的地方
        filename: '[name].bundle.js'               //打包后输出文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: "vue-loader"
                    },
                    {
                        test: /\.css$/,
                        use:['style-loader', 'css-loader']
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index_tmp.html",
            filename:'../index.html'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'                       //内部为正则表达式  vue结尾的
        }
    }
};