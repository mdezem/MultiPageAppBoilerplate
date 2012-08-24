/*jslint browser: true, devel: true */

(function () {
    'use strict';

    requirejs.config({
        baseUrl: ".",
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
        },
        shim: {
            "jquery": { exports: "jQuery" },
            "util": { exports: "_" },
            "json": { exports: "JSON" },
            "bootstrap": { deps: ["jquery", "css!assets/css/bootstrap"], exports: "$.fn.transition" },
            "backbone": { deps: ["jquery", "json", "util"], exports: "Backbone" }
        }
    });

    //libs
    require([
        "css",       //require plugins
        "templ",
        "text",
        "json",      //3rd libraries
        "jquery",
        "util",
        "backbone",
        "hogan",
        "css!assets/css/bootstrap",
        "bootstrap",
        "lib/util"  // app lib modules
        ],
        function () {
            var $ = require("jquery"),
            // the startmodule is defined on the same script tag of data-main.
            // example: <script data-main="main.js" data-start="pagemodule/main" src="vendor/require.js"/>
                startModuleName = $("script[data-main][data-start]").attr("data-start");

            if (startModuleName) {
                require([startModuleName], function (startModule) {
                    $(function () {
                        var fn = $.isFunction(startModule) ? startModule : startModule.init;
                        if (fn) { fn(); }
                    });
                });
            }
        });
} ());