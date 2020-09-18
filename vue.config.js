module.exports = {
    outputDir   : "./public/dist",
    chainWebpack: config => {
        if (config.plugins.has('copy')) {
            config.plugins.delete('copy')
        }
    },

}
