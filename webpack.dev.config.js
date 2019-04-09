const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,           //不跳转
        inline: true                        //实时刷新
    }
});