module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'super.js'
    },
    devServer: {
        contentBase: '/dist',
        starts: {
            children: false,
            maxModules: 0
        },
        hot: true
    }
}