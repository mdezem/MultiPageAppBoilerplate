({
    baseUrl: "./",
    appDir: "../src/",
    dir: "../dist",
    modules: [
        {
            name: "main"
        }
    ],
    paths: {
        // libraries path
        "json": "vendor/json2",
        "jquery": "vendor/jquery",
        "util": "vendor/underscore",
        "bootstrap": "vendor/bootstrap",
        "backbone": "vendor/backbone",
        "hogan": "vendor/hogan",

        // require plugins
        "css": "vendor/require.css",
        "templ": "vendor/require.hogan",
        "text": "vendor/require.text"
    }
})