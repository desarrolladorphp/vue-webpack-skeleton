const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
    mode: 'development',
    watchOptions: {
        aggregateTimeout: 800,
        ignored: 'node_modules'
    }
});
