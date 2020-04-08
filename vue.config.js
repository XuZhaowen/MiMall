module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    // eslint校验开关
    lintOnSave: true,
    // publicPath: '/app',
    // outputDir: 'dist',
    // 不显示js里面的.map文件
    productionSourceMap: false

}