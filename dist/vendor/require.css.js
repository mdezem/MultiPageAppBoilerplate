/**
* @license Available via the MIT or new BSD license.
* css loader requirejs plugin
* version 0.0.1 / 2012
* marcelo.dezem@gmail.com
*/

define([],function(){function e(e,t,n,r){if(r.isBuild){n();return}var i=t.toUrl(e+".css"),s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.href=i;var o=new Image;o.onerror=o.onload=function(){return n(s)},o.src=i,document.head.appendChild(s)}return{load:e}})