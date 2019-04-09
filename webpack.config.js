//const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractPlugin('assets/css/[name]_[hash:6].css');

const IS_DEV = true;

const config = {
    mode : 'development',
    entry:  __dirname + "/src/script/main.js",     //唯一入口文件
    output: {
        path: __dirname + "/dist",          //打包后的文件存放的地方
        filename: "bundle.js"               //打包后输出文件的文件名
    },
    devServer: {
        historyApiFallback: true,           //不跳转
        inline: true                        //实时刷新
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: "vue-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index_tmp.html",
            filename:'../index.html'                            //根目录入口页面名称
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'                       //内部为正则表达式  vue结尾的
        }
    }
};

if(IS_DEV){
    config.mode = 'development';
    config.output.filename = '[name].bundle.js';
    config['devtool'] = 'eval-source-map';             //调试设置
    config.module.rules.push(
        {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }
        );
}else{
    config.mode = 'production';
    config.output.filename = '[name]_[hash].bundle.js';
    config.module.rules.push(
        {
            test: /\.css$/,
            use: extractCSS.extract({
                use: [
                    {
                        loader: 'css-loader',
                        options:{
                            modules: true
                        }
                    }
                ]
            })
        }
    );
    config.plugins.push(extractCSS);
}

module.exports = config;