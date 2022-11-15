module.exports = {
  entry: {
    dashboard: './src/dashboard/index.js',
    profile: './src/profile/index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
  },
};
