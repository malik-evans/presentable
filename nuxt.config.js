export default {
    css: [
        "@assets/semantic.css"
    ],
    srcDir: 'src/client/',
    router: {
        base: '/app/'
    },
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        proxy: {
            '/api/': {target: 'http://localhost:8000/api/', pathRewrite: {'^/api/': ''}}
        }
    }
}