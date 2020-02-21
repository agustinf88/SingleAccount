(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=(n(88),n(89),n(19)),l=n(30),s=n(72),i=n(36),m={name:"",balance:0,movements:[{date:Date(),value:10}],snackbar:{open:!1,description:""}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVEMENT_SUCCESS":return Object(i.a)({},e,{movements:[Object(i.a)({},t.payload)].concat(Object(s.a)(e.movements))});case"FETCH_ACCOUNT_SUCCESS":return Object(i.a)({},e,{name:t.payload.name,balance:t.payload.balance,movements:t.payload.movements});case"FORBIDDEN_MOVEMENT":return Object(i.a)({},e,{snackbar:{open:!0,description:t.payload}});case"CLOSE_SNACKBAR":return Object(i.a)({},e,{snackbar:{open:!1,description:""}});case"GET_BALANCE_SUCCESS":return Object(i.a)({},e,{balance:t.payload});default:return e}},E=Object(l.c)({account:p}),d=n(141),v=n(132),b=n(147),f=n(53),O=n(136),y=n(68),C=n.n(y),h=(n(95),function(e){var t=e.date,n=e.value,c=e.key,o=C()("movement-value",{positive:n>=0},{negative:n<0}),u=Object(a.useState)(!1),l=Object(f.a)(u,2),s=l[0],i=l[1],m=function(){i(!s)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"movement",key:c,onClick:m},r.a.createElement(v.a,null,t),r.a.createElement("div",{className:o},r.a.createElement(v.a,null,"$"),r.a.createElement(v.a,null,n))),r.a.createElement(O.a,{in:s,timeout:"auto",unmountOnExit:!0,onClick:m,className:"movement__details"},r.a.createElement("div",{className:"movement__date"},r.a.createElement(v.a,null,"Date"),r.a.createElement(v.a,null,t)),r.a.createElement("div",{className:"movement__amount"},r.a.createElement(v.a,null,"Amount"),r.a.createElement("div",{className:o},r.a.createElement(v.a,null,"$"),r.a.createElement(v.a,null,n)))))}),j=function(e){var t=Object(u.c)((function(e){return e.account.movements}));return r.a.createElement(b.a,null,t&&t.map((function(e,t){return r.a.createElement(h,Object.assign({},e,{key:t}))})))},N=n(69),S=n.n(N),_=n(139),A=n(146),T=n(138),k=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.account.snackbar})),a=n.open,c=n.description,o=function(){return t({type:"CLOSE_SNACKBAR"})};return r.a.createElement(A.a,{open:a,onClose:o,autoHideDuration:6e3},r.a.createElement(T.a,{message:c,style:{backgroundColor:"red"},action:[r.a.createElement(_.a,{key:"close","arial-babel":"close",onClick:o},r.a.createElement(S.a,null))]}))},D=(n(98),function(e){var t=Object(u.c)((function(e){return e.account.balance}));return r.a.createElement("div",{className:"balance"},r.a.createElement(v.a,null,"Balance: $ ".concat(t)))}),w=(n(99),n(143)),g=n(140),M=(n(100),function(e){var t=Object(a.useState)(0),n=Object(f.a)(t,2),c=n[0],o=n[1],l=Object(u.b)();return r.a.createElement("form",{className:"form"},r.a.createElement(w.a,{id:"standard-number",label:"Ammount",type:"number",value:c,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),l({type:"ADD_MOVEMENT",payload:{value:c}}),o("")}},"Add"))}),U=function(e){var t=Object(u.b)();Object(a.useEffect)((function(){t({type:"FETCH_ACCOUNT"})}),[e]);var n=Object(u.c)((function(e){return e.account.name}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(v.a,null,n)),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"form-container"},r.a.createElement(M,null)),r.a.createElement("div",{className:"movements-container"},r.a.createElement(D,null),r.a.createElement(j,null))),r.a.createElement(k,null))},x=n(23),B=n.n(x),F=n(142),V=n(145),H=function(e){return B.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("http://localhost:8080/account/movement",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:Number(e)})}).then((function(e){return 200===e.status?e.json():403===e.status?Promise.reject("Can't add movement"):void 0})));case 1:case"end":return t.stop()}}))},L=function(e){return e.pipe(Object(F.a)((function(e){return"FETCH_ACCOUNT"===e.type})),Object(V.a)((function(e){var t;return B.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.awrap(fetch("http://localhost:8080/account").then((function(e){return e.json()})).catch((function(e){return console.error(e)})));case 2:return t=e.sent,e.abrupt("return",{type:"FETCH_ACCOUNT_SUCCESS",payload:t});case 4:case"end":return e.stop()}}))})))},I=function(e){return e.pipe(Object(F.a)((function(e){return"ADD_MOVEMENT"===e.type})),Object(V.a)((function(e){var t,n;return B.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.payload.value,a.next=4,B.a.awrap(H(t));case 4:return n=a.sent,a.abrupt("return",{type:"ADD_MOVEMENT_SUCCESS",payload:n});case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",{type:"FORBIDDEN_MOVEMENT",payload:"Can't add movement"});case 11:return a.abrupt("return");case 12:case"end":return a.stop()}}),null,null,[[0,8]])})))},R=function(e){return e.pipe(Object(F.a)((function(e){return"ADD_MOVEMENT_SUCCESS"===e.type})),Object(V.a)((function(e){var t;return B.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.awrap(B.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:8080/account/balance").then((function(e){return e.json()})).catch((function(e){return console.error(e)})));case 1:case"end":return e.stop()}})));case 3:return t=e.sent,e.abrupt("return",{type:"GET_BALANCE_SUCCESS",payload:t.balance});case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),null,null,[[0,7]])})))},$=n(144),J=Object($.a)(),P=Object(l.d)(E,Object(l.a)(J));!function(e){e.run(L),e.run(I),e.run(R)}(J);var G=function(){return r.a.createElement(u.a,{store:P},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(U,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,n){e.exports=n(102)},88:function(e,t,n){},89:function(e,t,n){},95:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.a04343f3.chunk.js.map