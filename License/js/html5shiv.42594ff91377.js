!function(e,n){function a(e){var t,n={},a=e.createElement,r=(0,e.createDocumentFragment)();e.createElement=function(e){return l.shivMethods?(t=n[e]?n[e].cloneNode():d.test(e)?(n[e]=a(e)).cloneNode():a(e)).canHaveChildren&&!c.test(e)?r.appendChild(t):t:a(e);var t},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+(t=l.elements,"string"==typeof t?t.split(" "):t).join().replace(/\w+/g,function(e){return a(e),r.createElement(e),'c("'+e+'")'})+");return n}")(l,r)}function t(e){var t;if(e.documentShived)return e;if(l.shivCSS&&!r){t=e.createElement("p");var n=e.getElementsByTagName("head")[0]||e.documentElement;t.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",t=!!n.insertBefore(t.lastChild,n.firstChild)}return i||(t=!a(e)),t&&(e.documentShived=t),e}var r,i,o=e.html5||{},c=/^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;!function(){var e=n.createElement("a");if(e.innerHTML="<xyz></xyz>",r="hidden"in e,!(e=1==e.childNodes.length))e:{try{n.createElement("a")}catch(t){e=!0;break e}e="undefined"==typeof(e=n.createDocumentFragment()).cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}i=e}();var l={elements:o.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",shivCSS:!1!==o.shivCSS,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:t};e.html5=l,t(n)}(this,document);