!function(e,t){"use strict";function n(t,n){function a(e){for(var t,n,r=e.querySelector(m.selector),l=e.querySelector("."+y.options).querySelectorAll("."+y.item),o=e.querySelector("."+y.title),i=r.options,a=[],u=m.defaultText,d=0,p=l.length;d<p;d++)n=i[d],t=l[d],n.selected?(s(t,y.selected),a.push(n.text)):c(t,y.selected);a.length&&(u=m.mask.replace("$",a.length).replace("%",a.join(m.maskJoin))),o.innerHTML=u}function p(t,n){var r=t.getAttribute(g.index),l=t.closest("."+y.outer).querySelector(m.selector),o=l.options,i=o[r];if(!n)for(var s=0,c=o.length;s<c;s++)o[s].selected=!1;if(i.selected=!i.selected,"createEvent"in document){var a=document.createEvent("HTMLEvents");a.initEvent("change",!1,!0),l.dispatchEvent(a)}else l.fireEvent("onchange");i.dataset.url&&(e.location.href=i.dataset.url)}function h(e,t){var n=[];t=t.trim().toLowerCase();for(var r=0,l=e.length;r<l;r++)-1!==e[r].innerText.trim().toLowerCase().indexOf(t)?n.push(1):n.push(0);return n}function f(e,t){for(var n=0,r=e.length;n<r;n++)e[n].style.display=t[n]?"":"none"}function v(e){e.classList.toggle(y.open)}if(null===t.getAttribute("data-tastyselect")){var m,y,g;m=l({},u,n),t.getAttribute("placeholder")&&(m.defaultText=t.getAttribute("placeholder")),y=m.classes,g=m.attributes;var b=function(e){var t=i("div",y.outer),n=i("div",y.title),r=i("div",y.options),l=i("li",y.label),o=i("ul",y.optgroup),c=i("ul",y.list),a=i("li",y.item),u=i("div",y.searchOuter),p=i("input",y.search),h=e.options;return d&&s(t,y.mobile),e.multiple&&s(t,y.multiple),e.disabled&&s(t,y.disabled),m.search&&(u.appendChild(p),r.appendChild(u)),t.appendChild(n),t.appendChild(r),function(){for(var e,t=null,n=null,i=c.cloneNode(!0),s=0,u=h.length;s<u;s++){var d=a.cloneNode(!0),p=h[s];t!=(n=p.parentNode.getAttribute("label"))&&(i&&r.appendChild(i),null==n?i=c.cloneNode(!0):(i=o.cloneNode(!0),(e=l.cloneNode(!0)).innerHTML=n,i.appendChild(e))),t=n,d.setAttribute(g.value,p.value),d.setAttribute(g.index,p.index),d.innerHTML=p.text,i.appendChild(d)}r.appendChild(i)}(),t}(t);m.mobileFix&&r(t),o(t,b),function(e){var t,n=e.querySelector(m.selector),r=e.querySelector("."+y.title),l=e.querySelector("."+y.options),o=e.querySelector("."+y.list).querySelectorAll("."+y.item),i=e.querySelector("."+y.search);n.setAttribute(g.selectReady,""),r.addEventListener("click",function(t){n.disabled||v(e)},!1),i&&i.addEventListener("input",function(e){t=h(n.options,e.target.value),f(o,t)}),n.addEventListener("change",function(t){a(e)},!1),l.addEventListener("click",function(e){var t,n=e.target.closest("."+y.item),r=e.target.closest("."+y.outer);n&&(t=r.querySelector(m.selector),m.ctrlKey&&t.multiple&&e.ctrlKey||t.multiple?p(n,!0):(p(n),v(n.closest("."+y.outer))))},!1)}(b),a(b)}}function r(e){var t=i("optgroup");t.disabled=!0,t.hidden=!0,e.insertBefore(t,e.firstChild)}function l(){for(var e=1;e<arguments.length;e++)for(var t in arguments[e])arguments[e].hasOwnProperty(t)&&(arguments[0][t]=arguments[e][t]);return arguments[0]}function o(e,t){var n=e.cloneNode(!0),r=e.parentNode;t.appendChild(n),r.insertBefore(t,e),r.removeChild(e)}function i(e,t){var n=document.createElement(e);return t&&s(n,t),n}function s(e,t){e.classList.add(t)}function c(e,t){e.classList.remove(t)}function a(e,t){Array.prototype.slice.call(e).forEach(t)}var u={selector:"select",mobileFix:!0,mask:"%",maskJoin:", ",ctrlKey:!1,search:!1,defaultText:"Select item...",classes:{outer:"style-select",title:"style-select-title",options:"style-select-options",label:"style-select-label",searchOuter:"style-select-search-outer",search:"style-select-search",optgroup:"style-select-optgroup",list:"style-select-list",item:"style-select-option",open:"st_open",selected:"st_selected",disabled:"st_disabled",mobile:"is_mobile",multiple:"is_multiple"},attributes:{index:"data-index",value:"data-value",selectReady:"data-tastyselect"}},d=function(){var e={Android:function(){return!!navigator.userAgent.match(/Android/i)&&"android"},BlackBerry:function(){return!!navigator.userAgent.match(/BlackBerry/i)&&"blackberry"},iOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)&&"ios"},Opera:function(){return!!navigator.userAgent.match(/Opera Mini/i)&&"operamini"},Windows:function(){return!!navigator.userAgent.match(/IEMobile/i)&&"ie"},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};return e}().any();e.tastySelect=function(e){var t;a(document.querySelectorAll(e&&e.selector||u.selector),function(t){n(t,e)}),t=e&&e.classes&&e.classes.open||u.classes.open,document.body.addEventListener("click",function(e){var n=e.target.closest("."+t);a(document.querySelectorAll("."+t),function(e){n!==e&&c(e,t)})},!1)}}(window),function(e){var t=e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;e.matches=e.matchesSelector=t||function(e){var t=document.querySelectorAll(e),n=this;return Array.prototype.some.call(t,function(e){return e===n})}}(Element.prototype),function(e){e.closest=e.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null}}(Element.prototype);