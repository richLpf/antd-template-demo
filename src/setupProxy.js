const { createProxyMiddleware } = require("http-proxy-middleware");

const proxyConfig = [{
    url: "/v1/*",
    target: "http://localhost:9000",
    changeOrigin: true
}]

module.exports = (app) => {
    proxyConfig.forEach(item => {
        app.use(
            item.url,
            createProxyMiddleware({
                target: item.target,
                changeOrigin: item.changeOrigin
        }))
    })
}