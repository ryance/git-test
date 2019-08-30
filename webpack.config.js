const path = require('path')

//这个配置文件，其实就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'), //输入文件路径
    output: {
        path: path.join(__dirname, './dist'), //输出文件路径
        filename: 'bundle.js', //指定输出文件名称

    }


}