/**@license
* RequireJS Hogan Plugin | v0.2.0 (2012/06/29)
* Author: Miller Medeiros | MIT License
*/

define(["hogan","text"],function(e,t){function o(i,s,o,f){var l=f.hgn||{},c=i;c+=l&&l.templateExtension!=null?l.templateExtension:n,t.get(s.toUrl(c),function(t){var n=l.compilationOptions?a({},l.compilationOptions):{};f.isBuild&&(n.asString=!0,r[i]=e.compile(t,n));var s=e.compile(t,n),c=u(s.render,s);c.text=s.text,o(c)})}function u(e,t){return function(){return e.apply(t,arguments)}}function a(e,t){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function f(t,n,o){if(n in r){s||(s=e.compile(i));var u=r[n];o(s.render({pluginName:t,moduleName:n,fn:u}))}}var n=".mustache",r={},i='define("{{pluginName}}!{{moduleName}}", ["hogan"], function(hogan){  var tmpl = new hogan.Template({{{fn}}}, "", hogan);  return function(){ return tmpl.render.apply(tmpl, arguments); };});\n',s;return{load:o,write:f}})