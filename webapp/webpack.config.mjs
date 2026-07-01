import path from 'path';

export default {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};