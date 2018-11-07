const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

//这个配置文件，起始就是一个JS文件，通过Node中模块的操作，向外暴露了一个配置对象
module.exports={
	//大家已经学会了举一反三，大家觉得，在配置文件中，需要手动指定入口和出口
	entry:path.join(__dirname,'./src/main.js'),//入口，表示，要使用webpack打包哪个文件
	output:{//输出文件相关的配置
		path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
		filename:'bundle.js'//这是指定 输出的文件的名称
	},

	plugins:[
	//配置插件的节点
	new htmlWebpackPlugin({
		//创建一个在内存中生成 HTML 页面的插件
		template: path.join(__dirname, './src/index.html'),
		//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
		filename:'index.html' //指定生成的页面的名称

	}),
	new VueLoaderPlugin(),


],

module:{//这个节点用于配置所有第三方模块加载器
	rules:[//所有第三方模块的匹配规则
		//配置处理 .css 文件的第三方 loader规则
		{test:/\.css$/, use:['style-loader','css-loader']},
		{test:/\.less$/, use:['style-loader','css-loader','less-loader']},
	    {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
	    {test:/\.(png|jpg|gif)$/,use:["url-loader?limit=1078157&name=[hash:8]-[name].[ext]"]},
        {test:/\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
        {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},
        {test: /\.vue$/,
        loader: 'vue-loader'}

        ]

},

	
resolve:{
	alias:{ //修改 Vue被导入时候的包的路径
		"vue$": "vue/dist/vue.js"
	}
}

}


