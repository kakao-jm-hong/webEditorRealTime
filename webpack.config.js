const path = require('path');

module.exports = {
    entry:{
        index : "./src/index.js",
        about : "./src/about.js",
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
};