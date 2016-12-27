module.exports = {
    entry: "./public/app.js",
    output: {
        path:"./public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    watch: true
}