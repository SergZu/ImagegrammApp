(self.webpackChunk=self.webpackChunk||[]).push([[213],{3213:function(e,r,t){"use strict";t.r(r);t(6248);var n=t(7378),a=t(9635),u=t(4289),o=t(3394);function l(e,r,t,n,a,u,o){try{var l=e[u](o),s=l.value}catch(e){return void t(e)}l.done?r(s):Promise.resolve(s).then(n,a)}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r.default=function(){var e=s((0,n.useState)(""),2),r=e[0],t=e[1],c=s((0,n.useState)(!1),2),i=c[0],m=c[1],p=s((0,n.useState)(""),2),f=p[0],d=p[1],h=(0,n.useRef)(null),v=(0,n.useRef)(null),g=(0,o.a)().logIn,b=(0,a.k6)(),y=/.+@.+\..+/i,w=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),null!==h.current&&null!==v.current){e.next=3;break}return e.abrupt("return",t("Auth form error"));case 3:if(y.test(h.current.value)){e.next=5;break}return e.abrupt("return",t("Email address incorrect"));case 5:return e.prev=5,t(""),m(!0),e.next=10,g(h.current.value,v.current.value);case 10:e.next=17;break;case 12:return e.prev=12,e.t0=e.catch(5),n=e.t0.message,m(!1),e.abrupt("return",t(n));case 17:return m(!1),d("Log in successfully"),e.next=21,window.setTimeout((function(){b.push("/ImagegrammApp/")}),2e3);case 21:case"end":return e.stop()}}),e,null,[[5,12]])})),function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function o(e){l(u,n,a,o,s,"next",e)}function s(e){l(u,n,a,o,s,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}();return n.createElement("form",{className:"App-authForm"},n.createElement("legend",{className:"App-authForm-legend"},"Log in to Imagegramm"),n.createElement("fieldset",{className:"App-authForm__fieldset"},n.createElement("label",{htmlFor:"UserEmailField"},"User email"),n.createElement("input",{type:"email",id:"UserEmailField",ref:h,placeholder:"User email",required:!0}),n.createElement("label",{htmlFor:"PasswordField"},"Password"),n.createElement("input",{type:"password",id:"PasswordField",ref:v,autoComplete:"current-password",placeholder:"Password",required:!0}),n.createElement("button",{onClick:w,disabled:i,className:"App-authForm__btn"},"Log In"),r&&n.createElement("div",{className:"error"},r),f&&n.createElement("div",{className:"success"},f)),n.createElement("span",{className:"App-authForm__link"},"Need an account :",n.createElement(u.rU,{to:"/ImagegrammApp/signup"},"Sign up")),n.createElement("span",{className:"App-authForm__link"},"Forgot password ? ",n.createElement(u.rU,{to:"/ImagegrammApp/resetPassword"},"Reset password")),n.createElement("span",{className:"App-authForm__link"},n.createElement(u.rU,{to:"/ImagegrammApp/"},"Back to app")))}}}]);
