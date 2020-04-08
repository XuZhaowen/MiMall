module.exports = {
    // 默认加载配置表
    devServer: {
        host: 'localhost',
        port: 8080,
        // proxy代理
        proxy: {
            // 拦截api，代理到下面
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,
                // 路径转发规则
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}