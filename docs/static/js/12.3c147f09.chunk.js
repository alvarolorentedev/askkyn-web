(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[12],{211:function(t,e,r){t.exports=r(212)},212:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",y={};function d(){}function m(){}function v(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(k([])));b&&b!==r&&n.call(b,i)&&(g=b);var E=v.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=E.constructor=v,v.constructor=m,v[u]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(E),E[u]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},219:function(t,e,r){!function(t,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function o(t,e){if(null==t)return{};var r,o,i=n(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function i(t,e){return a(t)||u(t,e)||c(t,e)||l()}function a(t){if(Array.isArray(t))return t}function u(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t,e){return t(e={exports:{}},e.exports),e.exports}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function h(){}function y(){}y.resetWarningCache=h;var d=function(){function t(t,e,r,n,o,i){if(i!==p){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:y,resetWarningCache:h};return r.PropTypes=r,r},m=f((function(t){t.exports=d()})),v=function(t){return null!==t&&"object"===r(t)},g=function(t){return v(t)&&"function"===typeof t.then},w=function(t){return v(t)&&"function"===typeof t.elements&&"function"===typeof t.createToken&&"function"===typeof t.createPaymentMethod&&"function"===typeof t.confirmCardPayment},b="[object Object]",E=function t(e,r){if(!v(e)||!v(r))return e===r;var n=Array.isArray(e);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(e)===b;if(o!==(Object.prototype.toString.call(r)===b))return!1;if(!o&&!n)return!1;var i=Object.keys(e),a=Object.keys(r);if(i.length!==a.length)return!1;for(var u={},c=0;c<i.length;c+=1)u[i[c]]=!0;for(var s=0;s<a.length;s+=1)u[a[s]]=!0;var l=Object.keys(u);if(l.length!==i.length)return!1;var f=e,p=r,h=function(e){return t(f[e],p[e])};return l.every(h)},x=function(t){var r=e.useRef(t);return e.useEffect((function(){r.current=t}),[t]),r.current},j="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",S=function(t){if(null===t||w(t))return t;throw new Error(j)},O=function(t){if(g(t))return{tag:"async",stripePromise:Promise.resolve(t).then(S)};var e=S(t);return null===e?{tag:"empty"}:{tag:"sync",stripe:e}},L=e.createContext(null);L.displayName="ElementsContext";var _=function(t,e){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e," in an <Elements> provider."));return t},k=function(t){var r=t.stripe,n=t.options,o=t.children,a=e.useRef(!1),u=e.useRef(!0),c=e.useMemo((function(){return O(r)}),[r]),s=i(e.useState((function(){return{stripe:null,elements:null}})),2),l=s[0],f=s[1],p=x(r),h=x(n);return null!==p&&(p!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),E(n,h)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),a.current||("sync"===c.tag&&(a.current=!0,f({stripe:c.stripe,elements:c.stripe.elements(n)})),"async"===c.tag&&(a.current=!0,c.stripePromise.then((function(t){t&&u.current&&f({stripe:t,elements:t.elements(n)})})))),e.useEffect((function(){return function(){u.current=!1}}),[]),e.useEffect((function(){var t=l.stripe;t&&t._registerWrapper&&t._registerWrapper({name:"react-stripe-js",version:"1.2.2"})}),[l.stripe]),e.createElement(L.Provider,{value:l},o)};k.propTypes={stripe:m.any,options:m.object};var P=function(t){var r=e.useContext(L);return _(r,t)},C=function(){return P("calls useElements()").elements},R=function(){return P("calls useStripe()").stripe},T=function(t){return(0,t.children)(P("mounts <ElementsConsumer>"))};T.propTypes={children:m.func.isRequired};var A=function(t){var r=e.useRef(t);return e.useEffect((function(){r.current=t}),[t]),function(){r.current&&r.current.apply(r,arguments)}},N=function(t){return v(t)?(t.paymentRequest,o(t,["paymentRequest"])):{}},I=function(){},F=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},q=function(t,r){var n="".concat(F(t),"Element"),o=r?function(t){P("mounts <".concat(n,">"));var r=t.id,o=t.className;return e.createElement("div",{id:r,className:o})}:function(r){var o=r.id,i=r.className,a=r.options,u=void 0===a?{}:a,c=r.onBlur,s=void 0===c?I:c,l=r.onFocus,f=void 0===l?I:l,p=r.onReady,h=void 0===p?I:p,y=r.onChange,d=void 0===y?I:y,m=r.onEscape,v=void 0===m?I:m,g=r.onClick,w=void 0===g?I:g,b=P("mounts <".concat(n,">")).elements,x=e.useRef(null),j=e.useRef(null),S=A(h),O=A(s),L=A(f),_=A(w),k=A(d),C=A(v);e.useLayoutEffect((function(){if(null==x.current&&b&&null!=j.current){var e=b.create(t,u);x.current=e,e.mount(j.current),e.on("ready",(function(){return S(e)})),e.on("change",k),e.on("blur",O),e.on("focus",L),e.on("escape",C),e.on("click",_)}}));var R=e.useRef(u);return e.useEffect((function(){R.current&&R.current.paymentRequest!==u.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var t=N(u);0===Object.keys(t).length||E(t,N(R.current))||x.current&&(x.current.update(t),R.current=u)}),[u]),e.useLayoutEffect((function(){return function(){x.current&&x.current.destroy()}}),[]),e.createElement("div",{id:o,className:i,ref:j})};return o.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onClick:m.func,options:m.object},o.displayName=n,o.__elementType=t,o},B="undefined"===typeof window,G=q("auBankAccount",B),W=q("card",B),U=q("cardNumber",B),Y=q("cardExpiry",B),M=q("cardCvc",B),D=q("fpxBank",B),J=q("iban",B),$=q("idealBank",B),z=q("paymentRequestButton",B);t.AuBankAccountElement=G,t.CardCvcElement=M,t.CardElement=W,t.CardExpiryElement=Y,t.CardNumberElement=U,t.Elements=k,t.ElementsConsumer=T,t.FpxBankElement=D,t.IbanElement=J,t.IdealBankElement=$,t.PaymentRequestButtonElement=z,t.useElements=C,t.useStripe=R,Object.defineProperty(t,"__esModule",{value:!0})}(e,r(1))},587:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},588:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",a=null,u=function(t){return null!==a?a:a=new Promise((function(e,r){if("undefined"!==typeof window)if(window.Stripe&&t&&console.warn(i),window.Stripe)e(window.Stripe);else try{var a=function(){for(var t=document.querySelectorAll('script[src^="'.concat(n,'"]')),e=0;e<t.length;e++){var r=t[e];if(o.test(r.src))return r}return null}();a&&t?console.warn(i):a||(a=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(n).concat(e);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(t)),a.addEventListener("load",(function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(u){return void r(u)}else e(null)}))},c=function(t,e,r){if(null===t)return null;var n=t.apply(void 0,e);return function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.12.1",startTime:e})}(n,r),n},s=Promise.resolve().then((function(){return u(null)})),l=!1;s.catch((function(t){l||console.warn(t)}));var f=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];l=!0;var n=Date.now();return s.then((function(t){return c(t,e,n)}))}}}]);
//# sourceMappingURL=12.3c147f09.chunk.js.map