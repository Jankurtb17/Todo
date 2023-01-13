const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '../dist/'
    : '/',
  outputDir: path.resolve(__dirname, '../dist'),
  devServer: {
    proxy: {
      '/post': {
        target: 'https://todo-backend-3xhc6fyx3-jankurtb17.vercel.app/'
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
