const path = require('path')

module.exports = {
    mode: 'production',
    entry:  './tmp/igv-cjs.js',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'igv.min.js',
        library: 'igv',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                "targets": {
                                    // The % refers to the global coverage of users from browserslist
                                    "browsers": [ ">1%"]
                                }
                            }]
                        ]
                    },

                },
            },
        ],
    },
    devtool: "source-map"
}
