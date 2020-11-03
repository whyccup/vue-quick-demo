const port = process.env.VUE_APP_PORT || process.env.npm_config_port || 9528 // dev port

module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/base";' // 让每个组件在编译之前都进行引用，进而能让每个组件都能访问到全局变量
      }
    }
  }
}
