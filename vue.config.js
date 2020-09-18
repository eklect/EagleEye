module.exports = {
    outputDir       : "./public/dist",
    chainWebpack    : config => {
        if (config.plugins.has('copy')) {
            config.plugins.delete('copy')
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "vue$": "vue/dist/vue.esm-bundler.js"
            }
        }
    }

}
