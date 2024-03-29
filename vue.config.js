const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
	return path.join(__dirname, './', dir)
}

module.exports = {
	publicPath: './',
	outputDir: 'dist', //打包的目录
	assetsDir: 'assets', //放置生成的静态资源的目录
	lintOnSave: true, //在保存时校验格式
	productionSourceMap: true, //生产环境是否生成SourceMap
	devServer: {
		open: true, //启动服务后是否打开浏览器
		// host: '192.168.1.130',
		port: 8081, //服务端口
		https: false,
		hotOnly: false,
		/* proxy: { //设置代理

		}, */
		// https:true,
		before: app => {}
	},
	configureWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			//为生产环境修改配置
		} else {
			//开发环境
		}
	},
	chainWebpack: config => {
		config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
		//const svgRule = config.module.rule('svg')
		//svgRule.uses.clear()
		config.module
			.rule('svg-sprite-loader')
			.test(/\.svg$/)
			.include
			.add(resolve('src/icons')) //处理svg目录
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
	},
}
