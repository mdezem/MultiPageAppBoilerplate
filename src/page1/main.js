/*jslint unparam: true, browser: true, devel: true */

define(function (require, exports, module) {
    'use strict';
    var dep1 = require("./dep1"),
        dep2 = require("./dep2"),
        templ = require("templ!./loadmessage");

    $(function () {
        $(templ({ module: "page1" })).appendTo("#viewport");
    });
});
