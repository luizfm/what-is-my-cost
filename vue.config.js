module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://whatismycost.luizfm.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
