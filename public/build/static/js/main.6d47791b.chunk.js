(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{136:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r.n(s),a=r(20),c=r.n(a),i=(r(64),r(8)),o=r(6),l=r.n(o),d=r(9),u=r(2);var m=function(e){var t=e.text,r=e.onClick,n=Object(s.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("div",{children:c?Object(u.jsx)("div",{className:" flex justify-center items-center",children:Object(u.jsx)("div",{className:"animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-purple-500"})}):Object(u.jsx)("button",{onClick:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,r(t);case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",children:t})})};var b=function(e){var t=e.label,r=e.type,s=e.value,n=e.setValue;return Object(u.jsx)("div",{className:"mb-6 sm:w-80",children:Object(u.jsx)("input",{placeholder:t,type:r,name:t,value:s,onChange:function(e){return n(e.target.value)},className:"mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md"})})};var j=function(e){var t=e.message;return Object(u.jsx)("div",{className:"bg-red-100 border-l-4 border-red-500 text-red-700 p-3",role:"alert",children:Object(u.jsxs)("p",{children:[t,"."]})})},x=r(25),p=r.n(x);var f=function(e){var t=function(e){var t=Object(s.useState)(""),r=Object(i.a)(t,2),n=r[0],a=r[1],c=Object(s.useState)(""),o=Object(i.a)(c,2),u=o[0],m=o[1],b=Object(s.useState)(""),j=Object(i.a)(b,2),x=j[0],f=j[1];function h(){return(h=Object(d.a)(l.a.mark((function t(){var r,s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u&&n){t.next=3;break}return f("Please enter username and password"),t.abrupt("return",!0);case 3:return r={username:n,password:u},t.next=6,p.a.post("/admin/find",r);case 6:if(s=t.sent,!(a=s.data).error){t.next=13;break}return f(a.error),t.abrupt("return");case 13:e(a.results[0]);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return{userName:n,setUserName:a,password:u,setPassword:m,error:x,setError:f,submit:function(){return h.apply(this,arguments)}}}(e.setUser);return Object(u.jsx)("div",{className:"flex justify-center items-center w-screen h-screen",children:Object(u.jsxs)("div",{className:"p-16 bg-white rounded-md flex flex-col justify-center items-center shadow-md",children:[Object(u.jsx)(b,{label:"User Name",type:"text",value:t.userName,setValue:t.setUserName}),Object(u.jsx)(b,{label:"Password",type:"password",value:t.password,setValue:t.setPassword}),Object(u.jsx)(m,{text:"Login",onClick:function(){var e=Object(d.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.submit();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),t.error&&Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)(j,{message:t.error})," "]})]})})};var h=function(e){var t=e.text,r=e.onClick;return Object(u.jsxs)("button",{onClick:r,className:"flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),t]})},O=r(145),v=r(144),y=r(52),g=r.n(y);r(86);var w=function(e){var t=e.startDate,r=e.setStartDate,n=Object(s.forwardRef)((function(e,t){var r=e.value,s=e.onClick;return Object(u.jsx)("button",{className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none",onClick:s,ref:t,children:r})}));return Object(u.jsx)(g.a,{className:"z-50",dateFormat:"yyyy/MM/dd",selected:t,onChange:function(e){return r(e)},customInput:Object(u.jsx)(n,{})})},N=r(146);function k(e){var t=e.open,r=e.setOpen,n=e.uid,a=e.setKeys,c=Object(s.useRef)(null);return Object(u.jsx)(O.a.Root,{show:t,as:s.Fragment,children:Object(u.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:c,onClose:r,children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)(O.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(u.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsx)(O.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(u.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg",children:Object(u.jsx)("div",{className:"sm:flex sm:items-start",children:Object(u.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(u.jsx)(v.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"New Key"}),Object(u.jsxs)("div",{className:"mt-2",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{text:"Auto Generate",onClick:function(){return n.setKey(Object(N.a)())}}),Object(u.jsx)("span",{className:"font-bold",children:n.key})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"mb-2 text-lg leading-6 font-medium text-gray-900",children:"Expire on"}),Object(u.jsx)(w,{startDate:n.date,setStartDate:n.setDate})]})]})]})})}),Object(u.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-lg",children:[Object(u.jsx)(m,{text:"Add",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.submit().then((function(e){e&&(r(!1),a(e))}));case 2:case"end":return e.stop()}}),e)})))}),Object(u.jsx)("button",{type:"button",className:"mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r(!1)},ref:c,children:"Cancel"})]})]})})]})})})}function C(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),r=t[0],n=t[1];function a(){return(a=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/code/all");case 2:(t=e.sent).data.error||n(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),{keys:r,setKeys:n}}function F(e){return K.apply(this,arguments)}function K(){return(K=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,p.a.post("/code/delete",{id:t});case 4:return r=e.sent,console.log(r),e.abrupt("return",r.data.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.setKeys,r=Object(s.useState)(!1),n=Object(i.a)(r,2),a=n[0],c=n[1],o=function(){var e=Object(s.useState)(new Date),t=Object(i.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(""),c=Object(i.a)(a,2),o=c[0],u=c[1];function m(){return(m=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return",!1);case 2:return t={code:o,end:r},e.next=5,p.a.post("/code/add",t);case 5:if(s=e.sent,console.log(s),!s.data.error){e.next=9;break}return e.abrupt("return",!1);case 9:return u(""),e.abrupt("return",s.data.results);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{date:r,setDate:n,key:o,setKey:u,submit:function(){return m.apply(this,arguments)}}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)(h,{text:"New Key",onClick:function(){return c(!0)}}),Object(u.jsx)(k,{open:a,setOpen:c,uid:o,setKeys:t})]})};function D(e){var t=e.onClick;return Object(u.jsxs)("button",{onClick:t,className:"inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-500 focus:outline-none",children:[Object(u.jsx)("span",{className:"hidden sm:block",children:"Delete"}),Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:ml-2 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})]})}var T=r(56);var L=function(e){var t=e.text,r=e.onClick,n=Object(s.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)("div",{children:c?Object(u.jsx)("div",{className:" flex justify-center items-center",children:Object(u.jsx)("div",{className:"animate-spin rounded-full h-9 w-9 border-t-2 border-b-2 border-red-500"})}):Object(u.jsx)("button",{onClick:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,r(t);case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none",children:t})})};function M(e){var t=e.open,r=e.setOpen,n=e.setKeys,a=e.id,c=Object(s.useRef)(null);return Object(u.jsx)(O.a.Root,{show:t,as:s.Fragment,children:Object(u.jsx)(v.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:c,onClose:r,children:Object(u.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(u.jsx)(O.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(u.jsx)(v.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(u.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(u.jsx)(O.a.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(u.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(u.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(u.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(u.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(u.jsx)(T.a,{className:"h-6 w-6 text-red-600","aria-hidden":"true"})}),Object(u.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(u.jsx)(v.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Delete Key"}),Object(u.jsx)("div",{className:"mt-2",children:Object(u.jsx)("p",{className:"text-sm text-gray-500",children:"Are you sure you want to delete this Key? All of your data will be permanently removed. This action cannot be undone."})})]})]})}),Object(u.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(u.jsx)(L,{text:"Delete",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(a).then((function(e){e&&(r(!1),n(e))}));case 2:case"end":return e.stop()}}),e)})))}),Object(u.jsx)("button",{type:"button",className:"mr-3 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r(!1)},ref:c,children:"Cancel"})]})]})})]})})})}var A=r(55),P=r.n(A);var E=function(e){var t=e.data,r=e.setKeys,n=Object(s.useState)(!1),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsxs)("div",{className:"py-4 px-3 mb-2 flex gap-4 items-center justify-between bg-white shadow-md rounded-md",children:[Object(u.jsx)(R,{text:t.code}),Object(u.jsxs)("div",{className:"flex",children:[Object(u.jsx)("h4",{className:"mr-2 hidden sm:block font-bold",children:"Expire on:"}),Object(u.jsx)("h4",{className:"border-b-2 text-gray-900",children:P()(t.end).format("YYYY-MM-DD")})]}),Object(u.jsx)(D,{onClick:function(){return o(!0)}}),Object(u.jsx)(M,{open:c,setOpen:o,id:t.ID,setKeys:r})]})};function R(e){var t=e.text;return Object(u.jsx)("div",{className:"p-2 border rounded-md bg-indigo-400 text-white cursor-pointer hover:bg-indigo-500",onClick:function(){navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)}))},children:Object(u.jsxs)("h4",{children:[" ",t]})})}var U=function(e){e.user;var t=C();return Object(u.jsxs)("div",{className:"sm:p-8 box-border block sm:flex justify-center items-start",children:[Object(u.jsx)("div",{className:"m-5 p-4 rounded-md sm:sticky top-8",children:Object(u.jsx)(S,{setKeys:t.setKeys})}),Object(u.jsx)("div",{className:"m-4 rounded-md",children:t.keys.map((function(e,r){return Object(u.jsx)(E,{data:e,setKeys:t.setKeys},r)})).reverse()})]})};var z=function(){var e=Object(s.useState)(null),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(u.jsx)(u.Fragment,{children:r?Object(u.jsx)(U,{user:r}):Object(u.jsx)(f,{setUser:n})})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,147)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),B()},64:function(e,t,r){}},[[136,1,2]]]);
//# sourceMappingURL=main.6d47791b.chunk.js.map