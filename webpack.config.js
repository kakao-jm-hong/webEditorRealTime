const path = require('path');

module.exports = {
    entry:{
        index : "./src/index.js",
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`,
                ]
            }
        ],
    }
};