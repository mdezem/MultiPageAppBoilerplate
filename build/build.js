({
    baseUrl: "./",
    appDir: "../src/",
    dir: "../dist",
    modules: [
        {
            name: "main"
        },
        {
            // create a module for page1/main and include in it
            // all its dependencies (dep1, dep2, loadtemplate)
            name: "page1/main",
            // excluding any dependency that is already included on main module
            exclude: ["main"]
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