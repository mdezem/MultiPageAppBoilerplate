/**
* @license Available via the MIT or new BSD license.
* css loader requirejs plugin
* version 0.0.1 / 2012
* marcelo.dezem@gmail.com
*/
/*jslint regexp: true */
/*global require: false, XMLHttpRequest: false, ActiveXObject: false,
define: false, window: false, process: false, Packages: false,
java: false, location: false */

define(function () {
    function load(name, req, onload, config) {
        if (config.isBuild) {
            onload();
            return;
        }

        var path = req.toUrl(name + ".css");
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = path;
        var fakelink = new Image();
        fakelink.onerror = fakelink.onload = function () {
            return onload(link);
        };
        fakelink.src = path;
        document.head.appendChild(link);
    }

    return {
        load: load
    };
});
