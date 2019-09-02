const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

//这个配置文件，其实就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'), //输入文件路径
    output: {
        path: path.join(__dirname, './dist'), //输出文件路径
        filename: 'bundle.js', //指定输出文件名称

    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'), //指定模板文件，根据指定文件生成内存里的文件
            filename: 'index.html', //指定生成的页面文件名称

        })
    ],
    module: { //用于配制所有的第三方模块加载器
        rules: [ //第三方模块的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //配制处理.css文件的loader规则
            //webpack调用loader的顺序是从后往前，分别调用后一个loader再把结果传到其前一个loader继续处理
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理less文件的顺序是less-css-style
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=1930360&name=[hash:8]-[name].[ext]' },
            //file-loader是内部依赖，不需要在use中引入
            // 可以加参数，参数格式和url参数一致，但参数名是固定的
            // limit给定的值是图片的大小，单位是byte。如果引用的图片大于等于这个值，则不会被转为base64格式的字符串，反之。
            // name用来规定打包后的文件名。无参时会把文件名哈希重命名防止重名，上述用来改命名规则为8位哈希值-原文件名
            // url-loader同样可以用来处理字体文件，但也需要添加rules。 
            { test: /\.ttf$/, use: 'url-loader' },
        ]

    }



}