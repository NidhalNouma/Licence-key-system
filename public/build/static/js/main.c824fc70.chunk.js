(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{136:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s.n(r),a=s(21),c=s.n(a),o=(s(64),s(7)),i=s(6),l=s.n(i),d=s(9),u=s(1);var m=function(e){var t=e.text,s=e.onClick,n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(u.jsx)("div",{children:c?Object(u.jsx)("div",{className:" flex justify-center items-center",children:Object(u.jsx)("div",{className:"animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-purple-500"})}):Object(u.jsx)("button",{onClick:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,s(t);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),className:"w-full nline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",children:t})})};var b=function(e){var t=e.label,s=e.type,r=e.value,n=e.setValue;return Object(u.jsx)("div",{className:"mb-6 w-full",children:Object(u.jsx)("input",{placeholder:t,type:s,name:t,value:r,onChange:function(e){return n(e.target.value)},className:"mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"})})};var j=function(e){var t=e.message;return Object(u.jsx)("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-3",role:"alert",children:Object(u.jsxs)("p",{children:[t,"."]})})},x=s.p+"static/media/keys.0889731c.svg",p=s(18),f=s.n(p);var h=function(e){var t=function(e){var t=Object(r.useState)(""),s=Object(o.a)(t,2),n=s[0],a=s[1],c=Object(r.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1],b=Object(r.useState)(""),j=Object(o.a)(b,2),x=j[0],p=j[1];function h(){return(h=Object(d.a)(l.a.mark((function t(){var s,r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u&&n){t.next=3;break}return p("Please enter username and password"),t.abrupt("return",!0);case 3:return s={username:n,password:u},t.next=6,f.a.post("/admin/find",s);case 6:if(r=t.sent,!(a=r.data).error){t.next=13;break}return p(a.error),t.abrupt("return");case 13:e(a.results[0]);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{userName:n,setUserName:a,password:u,setPassword:m,error:x,setError:p,submit:function(){return h.apply(this,arguments)}}}(e.setUser);return Object(u.jsx)("div",{className:"flex justify-center items-center w-screen h-screen",children:Object(u.jsxs)("div",{className:"w-full sm:w-auto sm:min-w-500 p-8 sm:p-16 bg-white rounded-md flex flex-col justify-center items-center shadow-md",children:[Object(u.jsx)("img",{className:"w-32 h-32 mb-4",src:x,alt:"logo"}),Object(u.jsx)(b,{label:"User Name",type:"text",value:t.userName,setValue:t.setUserName}),Object(u.jsx)(b,{label:"Password",type:"password",value:t.password,setValue:t.setPassword}),Object(u.jsx)(m,{text:"Login",onClick:function(){var e=Object(d.a)(l.a.mark((function e(s){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.submit();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),t.error&&Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)(j,{message:t.error})," "]})]})})};var O=function(e){var t=e.text,s=e.onClick;return Object(u.jsxs)("button",{onClick:s,className:"flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),t]})};function v(e){var t=e.text,s=e.onClick;return Object(u.jsxs)("button",{onClick:s,className:"flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"})}),t]})}var y=s(145),w=s(144),g=s(54),N=s.n(g);s(86);var k=function(e){var t=e.startDate,s=e.setStartDate,n=Object(r.forwardRef)((function(e,t){var s=e.value,r=e.onClick;return Object(u.jsx)("button",{className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",onClick:r,ref:t,children:s})}));return Object(u.jsx)(N.a,{className:"z-50",dateFormat:"yyyy/MM/dd",selected:t,onChange:function(e){return s(e)},customInput:Object(u.jsx)(n,{})})},C=s(32),F=s.n(C),S=s(146);function D(e){var t=e.open,s=e.setOpen,n=e.uid,a=e.setKeys,c=e.edit,o=e.end,i=Object(r.useRef)(null);return Object(u.jsx)(y.a.Root,{show:t,as:r.Fragment,children:Object(u.jsx)(w.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:i,onClose:s,children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(u.jsx)(w.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(u.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg",children:Object(u.jsx)("div",{className:"flex items-start",children:Object(u.jsxs)("div",{className:"mt-3 sm:mt-0 sm:ml-4 text-left",children:[Object(u.jsx)(w.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:c?"Key":"New Key"}),Object(u.jsxs)("div",{className:"mt-2",children:[Object(u.jsxs)("div",{children:[!c&&Object(u.jsx)(m,{text:"Auto Generate",onClick:function(){return n.setKey(Object(S.a)())}}),Object(u.jsx)("span",{className:"font-bold",children:n.key})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"mb-2 text-lg leading-6 font-medium text-gray-900",children:["Expire on ",Object(u.jsx)("span",{className:"font-bold text-indigo-500",children:c&&F()(o).format("YYYY-MM-DD")})]}),Object(u.jsx)(k,{startDate:n.date,setStartDate:n.setDate})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"w-32",children:[Object(u.jsx)("h3",{className:"mb-2 text-lg leading-6 font-medium text-gray-900",children:"Max Accounts"}),Object(u.jsx)(b,{label:"Max Accounts",value:n.maxAccounts,setValue:n.setMaxAccounts,type:"number"})]})]})]})})}),Object(u.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg",children:[Object(u.jsx)(m,{text:c?"Edit":"Add",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.submit().then((function(e){e&&(s(!1),a(e))}));case 2:case"end":return e.stop()}}),e)})))}),Object(u.jsx)("button",{type:"button",className:"mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},ref:i,children:"Cancel"})]})]})})]})})})}function A(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),s=t[0],n=t[1];function a(){return(a=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/code/all");case 2:(t=e.sent).data.error||n(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),{keys:s,setKeys:n}}function M(e){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,f.a.post("/code/delete",{id:t});case 4:return s=e.sent,console.log(s),e.abrupt("return",s.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,f.a.post("/code/deleteAccount",{id:t});case 4:return s=e.sent,console.log(s),e.abrupt("return",s.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){var s=new Date(e);return s.setDate(s.getDate()+t),s}var V=function(e){var t=e.setKeys,s=Object(r.useState)(!1),n=Object(o.a)(s,2),a=n[0],c=n[1],i=function(){var e=new Date,t=Object(r.useState)(P(e,7)),s=Object(o.a)(t,2),n=s[0],a=s[1],c=Object(r.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1],b=Object(r.useState)(3),j=Object(o.a)(b,2),x=j[0],p=j[1];function h(){return(h=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return",!1);case 2:return t={code:u,end:n,maxAccounts:x},e.next=5,f.a.post("/code/add",t);case 5:if(s=e.sent,console.log(s),!s.data.error){e.next=9;break}return e.abrupt("return",!1);case 9:return m(""),e.abrupt("return",s.data.results);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{date:n,setDate:a,key:u,setKey:m,maxAccounts:x,setMaxAccounts:p,submit:function(){return h.apply(this,arguments)}}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flex flex-col",children:[Object(u.jsx)(O,{text:"New Key",onClick:function(){return c(!0)}}),Object(u.jsx)("br",{}),Object(u.jsx)(v,{text:"Download Expert",onClick:function(){window.open("https://expertfilesgiovarioforexhu6.s3.us-east-2.amazonaws.com/MoneyMaster2_0.ex4")}})]}),Object(u.jsx)(D,{open:a,setOpen:c,uid:i,setKeys:t})]})};function B(e){var t=e.onClick,s=e.text,r=void 0===s?"Edit":s;return Object(u.jsxs)("button",{onClick:t,className:"inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none",children:[Object(u.jsx)("span",{className:"hidden sm:block",children:r}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:ml-2 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})]})}function U(e){var t=e.onClick,s=e.text,r=void 0===s?"Delete":s;return Object(u.jsxs)("button",{onClick:t,className:"inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none",children:[Object(u.jsx)("span",{className:"hidden sm:block",children:r}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:ml-2 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})}function z(e){var t=e.onClick,s=e.text;return Object(u.jsxs)("button",{onClick:t,className:"transition-all duration-500 ease-in-out transform hover:scale-105 inline-flex justify-cente text-sm font-medium rounded-md text-red-700 focus:outline-none",children:[Object(u.jsx)("span",{className:"hidden sm:block",children:s}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})})]})}function E(e){var t=e.text,s=e.onClick;return Object(u.jsx)("button",{onClick:s,className:"inline-flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-indigo-400 hover:text-indigo-600 focus:outline-none",children:t})}function I(e){var t=e.text,s=e.onClick;return Object(u.jsx)("button",{onClick:s,className:"inline-flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-red-300 hover:text-red-500 focus:outline-none",children:t})}var Y=s(57);var R=function(e){var t=e.text,s=e.onClick,n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(u.jsx)("div",{children:c?Object(u.jsx)("div",{className:" flex justify-center items-center",children:Object(u.jsx)("div",{className:"animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-red-500"})}):Object(u.jsx)("button",{onClick:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,s(t);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),className:"w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",children:t})})};function W(e){var t=e.open,s=e.setOpen,n=e.setKeys,a=e.id,c=e.Delete,o=e.text,i=void 0===o?"Key":o,m=Object(r.useRef)(null);return Object(u.jsx)(y.a.Root,{show:t,as:r.Fragment,children:Object(u.jsx)(w.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:m,onClose:s,children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(u.jsx)(w.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(u.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(u.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(u.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(u.jsx)(Y.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),Object(u.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(u.jsxs)(w.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:["Delete ",i]}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsxs)("p",{className:"text-sm text-gray-500",children:["Are you sure you want to delete this ",i,"? All of your data will be permanently removed. This action cannot be undone."]})})]})]})}),Object(u.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(u.jsx)(R,{text:"Delete",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a).then((function(e){e&&(s(!1),n(e))}));case 2:case"end":return e.stop()}}),e)})))}),Object(u.jsx)("button",{type:"button",className:"mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},ref:m,children:"Cancel"})]})]})})]})})})}var H=function(e){var t=e.data,s=e.setKeys,n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1],m=Object(r.useState)(!1),b=Object(o.a)(m,2),j=b[0],x=b[1],p=function(e,t,s){var n=new Date,a=Object(r.useState)(P(n,7)),c=Object(o.a)(a,2),i=c[0],u=c[1],m=Object(r.useState)(s),b=Object(o.a)(m,2),j=b[0],x=b[1],p=Object(r.useState)(e),h=Object(o.a)(p,1)[0],O=Object(r.useState)(3),v=Object(o.a)(O,2),y=v[0],w=v[1];function g(){return(g=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return",!1);case 2:return t={id:h,code:j,end:i,maxAccounts:y},e.next=5,f.a.post("/code/update",t);case 5:if(s=e.sent,console.log(s),!s.data.error){e.next=9;break}return e.abrupt("return",!1);case 9:return e.abrupt("return",s.data.results);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{date:i,setDate:u,key:j,setKey:x,maxAccounts:y,setMaxAccounts:w,submit:function(){return g.apply(this,arguments)}}}(t.ID,t.end,t.code),h=Object(r.useState)(!1),O=Object(o.a)(h,2),v=O[0],y=O[1];return Object(u.jsxs)("div",{className:"py-4 px-3 mb-2 bg-white shadow-md rounded-md ",children:[Object(u.jsxs)("div",{className:"flex flex-col lg:flex-row gap-4 lg:items-center justify-between",children:[Object(u.jsx)(J,{text:t.code}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("h4",{className:"mr-2 hiddeni sm:block font-bold",children:"Expire on:"}),Object(u.jsx)("h4",{className:"border-b-2 border-gray-500 text-gray-900",children:F()(t.end).format("YYYY-MM-DD")})]}),Object(u.jsxs)("div",{className:"flex items-center",children:[Object(u.jsx)("h4",{className:"mr-2 hiddeni sm:block font-bold",children:"Max Accounts:"}),Object(u.jsx)("h4",{className:"border-b-2 border-t-2 border-gray-500 text-gray-900",children:t.maxAccounts?t.maxAccounts:0})]}),Object(u.jsx)(B,{onClick:function(){return x(!0)}}),Object(u.jsx)(U,{onClick:function(){return i(!0)}}),Object(u.jsx)(W,{open:c,setOpen:i,id:t.ID,setKeys:s,Delete:M}),Object(u.jsx)(D,{open:j,setOpen:x,uid:p,setKeys:s,edit:!0,end:t.end})]}),t.accounts.length>0&&Object(u.jsxs)("div",{className:"flex flex-col justify-center items-center mt-2",children:[v&&Object(u.jsx)("div",{className:"border-b-2 border-t-2 my-2",children:t.accounts.map((function(e,t){return Object(u.jsx)(_,{data:e,setKeys:s},t)}))}),Object(u.jsx)(G,{onClick:function(){y(!v)},arrow:v})]})]})};function J(e){var t=e.text;return Object(u.jsx)("div",{className:"copy p-2 rounded-md border-2 border-indigo-400 text-indigo-800 cursor-pointer",onClick:function(){navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)}))},children:Object(u.jsx)("h4",{children:t})})}function G(e){var t=e.onClick,s=e.arrow;return Object(u.jsx)("button",{onClick:t,className:"transition-all duration-500 ease-in-out transform hover:scale-110 rounded-md p-1 w-full chover:bg-indigo-500",type:"button",children:s?Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 m-auto text-indigo-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7l4-4m0 0l4 4m-4-4v18"})}):Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 m-auto text-indigo-500",fill:"#453CC4",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})}function _(e){var t=e.data,s=e.setKeys,n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],i=a[1];return Object(u.jsxs)("div",{className:"flex my-3 items-center justify-between",children:[Object(u.jsxs)("h4",{className:"mr-1",children:["Account Number: ",Object(u.jsx)("span",{className:"text-indigo-500",children:t.number})]}),Object(u.jsx)("div",{className:"rounded border-4"}),Object(u.jsxs)("h4",{className:"ml-1 mr-2",children:["Account Server: ",Object(u.jsx)("span",{className:"text-indigo-500",children:t.server})]}),Object(u.jsx)(z,{onClick:function(){i(!0)}}),Object(u.jsx)(W,{open:c,setOpen:i,id:t.ID,setKeys:s,Delete:L,text:"Account"})]})}var q=s.p+"static/media/user.103865c5.svg";function Q(e){var t=e.open,s=e.setOpen,n=e.data,a=Object(r.useRef)(null);return Object(u.jsx)(y.a.Root,{show:t,as:r.Fragment,children:Object(u.jsx)(w.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:a,onClose:s,children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(u.jsx)(w.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsx)(y.a.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(u.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg",children:Object(u.jsx)("div",{className:"sm:flex sm:items-start",children:Object(u.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(u.jsx)(w.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Change password"}),Object(u.jsxs)("div",{className:"mt-2",children:[Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(u.jsx)(b,{label:"Current Password",type:"password",value:n.cpassword,setValue:n.setCPassword}),Object(u.jsx)(b,{label:"New Password",type:"password",value:n.npassword,setValue:n.setNPassword}),Object(u.jsx)(b,{label:"Confirm Password",type:"password",value:n.cnpassword,setValue:n.setCNPassword})]}),n.error&&Object(u.jsx)("span",{className:"text-red-500",children:n.error})]})]})})}),Object(u.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg",children:[Object(u.jsx)(m,{text:"Submit",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.submit().then((function(e){e&&s(!1)}));case 2:case"end":return e.stop()}}),e)})))}),Object(u.jsx)("button",{type:"button",className:"mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return s(!1)},ref:a,children:"Cancel"})]})]})})]})})})}var X=function(e){var t=e.user,s=e.setUser,n=function(e){var t=Object(r.useState)(""),s=Object(o.a)(t,2),n=s[0],a=s[1],c=Object(r.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1],b=Object(r.useState)(""),j=Object(o.a)(b,2),x=j[0],p=j[1],h=Object(r.useState)(""),O=Object(o.a)(h,2),v=O[0],y=O[1];function w(){return(w=Object(d.a)(l.a.mark((function t(){var s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a(""),x===v){t.next=4;break}return a("Confirm password not match"),t.abrupt("return",!1);case 4:if(x!==u){t.next=7;break}return a("Current password and new password are the same"),t.abrupt("return",!1);case 7:if(0!==x.length&&0!==v.length&&0!==u.length){t.next=10;break}return a("Some data is missing"),t.abrupt("return",!1);case 10:return s={username:e.username,ID:e.ID,password:x,cpassword:u},t.next=13,f.a.post("/admin/update",s);case 13:if(r=t.sent,console.log(r.data),!r.data.error){t.next=18;break}return a(r.data.error),t.abrupt("return",!1);case 18:return m(""),p(""),y(""),t.abrupt("return",!0);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{error:n,cpassword:u,setCPassword:m,npassword:x,setNPassword:p,cnpassword:v,setCNPassword:y,submit:function(){return w.apply(this,arguments)}}}(t),a=Object(r.useState)(!1),c=Object(o.a)(a,2),i=c[0],m=c[1];return Object(u.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(u.jsx)("img",{className:"w-10 h-10",src:q,alt:"profile"}),Object(u.jsx)("h3",{className:"font-bold my-3",children:null===t||void 0===t?void 0:t.username}),Object(u.jsx)(E,{className:"",text:"Change Password",onClick:function(){m(!0)}}),Object(u.jsx)("br",{}),Object(u.jsx)(I,{className:"",text:"Log Out",onClick:function(){s(null)}}),Object(u.jsx)(Q,{open:i,setOpen:m,data:n})]})};var Z=function(e){var t=e.user,s=e.setUser,r=A();return Object(u.jsxs)("div",{className:"sm:p-8 box-border block sm:flex justify-center items-start",children:[Object(u.jsx)("div",{className:"m-5 p-4 rounded-md sm:sticky top-8",children:Object(u.jsx)(V,{setKeys:r.setKeys})}),Object(u.jsx)("div",{className:"m-4 rounded-md",children:r.keys.map((function(e,t){return Object(u.jsx)(H,{data:e,setKeys:r.setKeys},t)})).reverse()}),Object(u.jsx)("div",{className:"m-4 rounded-md bg-white p-6 shadow-md",children:Object(u.jsx)(X,{user:t,setUser:s})})]})};var $=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:s?Object(u.jsx)(Z,{user:s,setUser:n}):Object(u.jsx)(h,{setUser:n})})},ee=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,147)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),ee()},64:function(e,t,s){}},[[136,1,2]]]);
//# sourceMappingURL=main.c824fc70.chunk.js.map