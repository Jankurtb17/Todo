const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/'
      }
    }
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ] 
    }
  }
});
