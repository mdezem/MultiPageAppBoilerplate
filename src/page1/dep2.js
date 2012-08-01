/*jslint unparam: true, browser: true, devel: true */

define(function (require, exports, module) {
    'use strict';
    var $ = require("jquery"),
        templ = require("templ!./loadmessage");

    $(function () {
        $(templ({ module: "dep2" })).appendTo("#viewport");
    });
});
