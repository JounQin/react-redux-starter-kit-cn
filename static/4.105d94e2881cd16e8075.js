(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(e,t,n){"use strict";n.r(t);var r,o,a=n(1),i=n.n(a),s=n(21),c=n(29),l=n(94),u=n.n(l),m=n(86),f=n(96),p=n.n(f),d=n(30);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w,k=Object(s.connect)(function(e){return{comments:e.items}})(Object(d.d)(p.a)((o=r=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=b(this,(e=g(t)).call.apply(e,[this].concat(o)))).state={open:!0},n.pluralize=function(e){return e+(1===e?" reply":" replies")},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,i.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state.open,n=this.props,r=n.comments[n.id];return r?i.a.createElement("li",{className:"comment"},i.a.createElement("div",{className:"by"},r.by?i.a.createElement(c.a,{to:"/user/"+r.by},r.by):null," "+Object(d.c)(r.time)," ago"),i.a.createElement("div",{className:"text",dangerouslySetInnerHTML:{__html:r.text||"<del>[Deleted]</del>"}}),r.kids&&r.kids.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"toggle"+(t?" open":"")},i.a.createElement("a",{onClick:function(){return e.setState({open:!t})}},t?"[-]":"[+] "+this.pluralize(r.kids.length)+" collapsed")),i.a.createElement("ul",{className:"comment-children",style:{display:t?"block":"none"}},r.kids.map(function(e){return i.a.createElement(k,{key:e,id:e})}))):null):null}}])&&y(n.prototype,r),o&&y(n,o),t}(),r.displayName="Comment",o))),x=k,E=n(22);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return _});var _=Object(s.connect)(function(e){return{items:e.items}},function(e){return{fetchItems:function(t){return e(Object(E.d)(t))}}})(w=Object(d.d)(u.a,!1,function(e){var t=e.props,n=t.items,r=t.match.params.id;return n[r]&&n[r].title})(w=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=N(this,(e=S(t)).call.apply(e,[this].concat(o)))).state={loading:!1},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,i.a.PureComponent),n=t,(r=[{key:"bootstrap",value:function(){var e=this.props.match.params.id;return!!this.props.items[e]||this.props.fetchItems([e]).then(function(){return!0})}},{key:"fetchItems",value:function(){var e=this,t=this.item;t&&t.kids&&(this.setState({loading:!0}),this.fetchComments(t).then(function(){return e.setState({loading:!1})}))}},{key:"fetchComments",value:function(e){var t=this;if(e&&e.kids)return this.props.fetchItems(e.kids).then(function(){return Promise.all(e.kids.map(function(e){return t.fetchComments(t.props.items[e])}))})}},{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"render",value:function(){var e=this.state.loading,t=this.item;return t?i.a.createElement("div",{className:"item-view"},i.a.createElement("div",{className:"item-view-header"},i.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h1",null,t.title)),t.url?i.a.createElement("span",{className:"host"},"(",Object(d.a)(t.url),")"):null,i.a.createElement("p",{className:"meta"},t.score," points | by"," ",i.a.createElement(c.a,{to:"/user/"+t.by},t.by)," "+Object(d.c)(t.time)," ago")),i.a.createElement("div",{className:"item-view-comments"},i.a.createElement("p",{className:"item-view-comments-header"},t.kids?t.descendants+" comments":"No comments yet.",i.a.createElement(m.a,{show:e})),e||!t.kids?null:i.a.createElement("ul",{className:"comment-children"},t.kids.map(function(e){return i.a.createElement(x,{key:e,id:e})})))):null}},{key:"item",get:function(){return this.props.items[this.props.match.params.id]}}])&&O(n.prototype,r),o&&O(n,o),t}())||w)||w},83:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(a).concat([o]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},84:function(e,t,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("react-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(85),a={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},m=null,f="data-react-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(y(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(l)return u;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=h()),t=v.bind(null,r,o,!1),n=v.bind(null,r,o,!0)}else r=h(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);m.ssrId&&e.setAttribute(ssridKey,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}e.exports=function(e,t,n,r){l=n,m=r||{};var i=o(e,t);return d(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r];(c=a[s.id]).refs--,n.push(c)}t?d(i=o(e,t)):i=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete a[c.id]}}}};var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function v(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},85:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}},86:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(87),i=n.n(a),s=n(30);t.a=Object(s.d)(i.a)(function(e){var t=e.show;return t?o.a.createElement("svg",{className:"spinner"+(t?" show":""),width:"44px",height:"44px",viewBox:"0 0 44 44"},o.a.createElement("circle",{className:"path",fill:"none",strokeWidth:"4",strokeLinecap:"round",cx:"22",cy:"22",r:"20"})):null})},87:function(e,t,n){var r=n(88);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(84)("1083fada",r,!0,{manualInject:!0})},88:function(e,t,n){(e.exports=n(83)(!1)).push([e.i,".spinner{-webkit-transition:opacity .15s ease;transition:opacity .15s ease;-webkit-animation:rotator 1.4s linear infinite;animation:rotator 1.4s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused}.spinner.show{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}@keyframes rotator{0%{-webkit-transform:scale(.5) rotate(0deg);transform:scale(.5) rotate(0deg)}to{-webkit-transform:scale(.5) rotate(270deg);transform:scale(.5) rotate(270deg)}}.spinner .path{stroke:#00d8ff;stroke-dasharray:126;stroke-dashoffset:0;-webkit-transform-origin:center;transform-origin:center;-webkit-animation:dash 1.4s ease-in-out infinite;animation:dash 1.4s ease-in-out infinite}@-webkit-keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes dash{0%{stroke-dashoffset:126}50%{stroke-dashoffset:63;-webkit-transform:rotate(135deg);transform:rotate(135deg)}to{stroke-dashoffset:126;-webkit-transform:rotate(450deg);transform:rotate(450deg)}}",""])},94:function(e,t,n){var r=n(95);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(84)("6b26c6d3",r,!0,{manualInject:!0})},95:function(e,t,n){(e.exports=n(83)(!1)).push([e.i,".item-view-header{background-color:#fff;padding:1.8em 2em 1em;box-shadow:0 1px 2px rgba(0,0,0,.1)}.item-view-header h1{display:inline;font-size:1.5em;margin:0 .5em 0 0}.item-view-header .host,.item-view-header .meta,.item-view-header .meta a{color:#828282}.item-view-header .meta a{text-decoration:underline}.item-view-comments{background-color:#fff;margin-top:10px;padding:0 2em .5em}.item-view-comments-header{margin:0;font-size:1.1em;padding:1em 0;position:relative}.item-view-comments-header .spinner{display:inline-block;margin:-15px 0}.comment-children{list-style-type:none;padding:0;margin:0}@media (max-width:600px){.item-view-header h1{font-size:1.25em}}",""])},96:function(e,t,n){var r=n(97);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(84)("777cfe20",r,!0,{manualInject:!0})},97:function(e,t,n){(e.exports=n(83)(!1)).push([e.i,".comment-children .comment-children{margin-left:1.5em}.comment{border-top:1px solid #eee;position:relative}.comment .by,.comment .text,.comment .toggle{font-size:.9em;margin:1em 0}.comment .by{color:#828282}.comment .by a{color:#828282;text-decoration:underline}.comment .text{overflow-wrap:break-word}.comment .text a:hover{color:#f60}.comment .text pre{white-space:pre-wrap}.comment .toggle{background-color:#fffbf2;padding:.3em .5em;border-radius:4px}.comment .toggle a{color:#828282;cursor:pointer}.comment .toggle.open{padding:0;background-color:transparent;margin-bottom:-.5em}",""])}}]);