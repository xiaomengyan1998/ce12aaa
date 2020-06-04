module.exports = {
  //npm i autoprefixer postcss-pxtorem --save-dev下载插件
  plugins: {
    autoprefixer: {
      // browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
