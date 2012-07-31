/*jslint unparam: true, browser: true, devel: true */

define(function (require, exports, module) {
    'use strict';

    var $ = require("jquery"),
        templ = require("templ!./message-example");

    $(function () {
        $(templ({ message: "core module is up!" })).appendTo("#viewport");
    });
});
