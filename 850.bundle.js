(self.webpackChunk=self.webpackChunk||[]).push([[850],{2850:function(e,r,t){"use strict";t.r(r);t(6248);var n=t(7378),a=t(9635),u=t(4289),l=t(3394);function o(e,r,t,n,a,u,l){try{var o=e[u](l),s=o.value}catch(e){return void t(e)}o.done?r(s):Promise.resolve(s).then(n,a)}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw u}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}r.default=function(){var e=s((0,n.useState)(null),2),r=e[0],t=e[1],i=s((0,n.useState)(!1),2),c=i[0],m=i[1],p=s((0,n.useState)(null),2),d=p[0],f=p[1],h=(0,n.useRef)(null),v=(0,n.useRef)(null),b=(0,n.useRef)(null),w=(0,l.a)().signUp,y=(0,a.k6)(),g=/.+@.+\..+/i,E=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t(null),null!==b.current&&null!==h.current&&null!==v.current){e.next=4;break}return e.abrupt("return",t("Auth form error"));case 4:if(g.test(h.current.value)){e.next=6;break}return e.abrupt("return",t("Email address incorrect"));case 6:if(v.current.value===b.current.value){e.next=8;break}return e.abrupt("return",t("Password don't match"));case 8:return e.prev=8,t(null),m(!0),e.next=13,w(h.current.value,v.current.value);case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(8),m(!1),e.abrupt("return",t(e.t0.message));case 19:return m(!1),f("Sing up successfully"),e.next=23,window.setTimeout((function(){y.push("/")}),2e3);case 23:case"end":return e.stop()}}),e,null,[[8,15]])})),function(){var r=this,t=arguments;return new Promise((function(n,a){var u=e.apply(r,t);function l(e){o(u,n,a,l,s,"next",e)}function s(e){o(u,n,a,l,s,"throw",e)}l(void 0)}))});return function(e){return r.apply(this,arguments)}}();return n.createElement("form",{className:"App-authForm"},n.createElement("legend",{className:"App-authForm-legend"},"Sign up to Imagegramm"),n.createElement("fieldset",{className:"App-authForm__fieldset"},n.createElement("label",{htmlFor:"UserEmailField"},"User email"),n.createElement("input",{type:"email",id:"UserEmailField",ref:h,placeholder:"User email",required:!0}),n.createElement("label",{htmlFor:"PasswordField"},"Password"),n.createElement("input",{type:"password",id:"PasswordField",ref:v,autoComplete:"new-password",placeholder:"Password",required:!0}),n.createElement("label",{htmlFor:"PasswordConfirmField"},"Password confirm"),n.createElement("input",{type:"password",id:"PasswordConfirmField",ref:b,autoComplete:"new-password",placeholder:"Password again",required:!0}),n.createElement("button",{onClick:E,disabled:c,className:"App-authForm__btn"},"Sign up"),r&&n.createElement("div",{className:"error"},r),d&&n.createElement("div",{className:"success"},d)),n.createElement("span",{className:"App-authForm__link"},"Already have an account :",n.createElement(u.rU,{to:"/ImagegrammApp/login"},"Log in")),n.createElement("span",{className:"App-authForm__link"},n.createElement(u.rU,{to:"/ImagegrammApp/"},"Back to app")))}}}]);