var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: '#eval-source-map',
    //入口
    entry:'./src/main.js',
    // 输出文件夹
    output: {
        path:path.resolve(__dirname,'./dist'),
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: {
                    loaders:{

                        }
                    }
                },
            {
                test:/\.js$/,
                loader:'babel-loader',
                // 排除一个文件夹
                exclude:/node-modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]' //目标文件夹
                }
            }, //添加对字体文件的支持。
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'file-loader',
                options: {
                    name:'[name].[ext]?[hash]'
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true,//实时刷新
        // contentBase: "./",  //content not from webpack is serverd
        port: '8081',
        //代理
        proxy:{
            '/v2/*': {
                target: 'https://api.douban.com',
                host: 'api.douban.com',
                changeOrigin:true
            }
        }
    },
    performance: {
        hints: false
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}