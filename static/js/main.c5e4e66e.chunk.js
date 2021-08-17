(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={list:"PhoneBook_list__9gNI2",item:"PhoneBook_item__3Vvbu",button:"PhoneBook_button__2pK0g"}},14:function(e,t,n){e.exports={search:"Filter_search__1HDuI",title:"Filter_title__28CUZ",input:"Filter_input__32r4Z"}},19:function(e,t,n){e.exports={section:"Section_section__3JLW4",title:"Section_title__3Qv5p"}},20:function(e,t,n){e.exports={backdrop:"Modal_backdrop__CbQ0h",content:"Modal_content__1aeEJ"}},22:function(e,t,n){e.exports={container:"Container_container__1qlHy"}},24:function(e,t,n){e.exports={modalButton:"App_modalButton__2OaSX"}},36:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),i=n(5),s=n(21),l=(n(35),n(36),n(9)),u=n(22),b=n.n(u),d=n(1),j=function(e){var t=e.children;return Object(d.jsx)("div",{className:b.a.container,children:t})},m=n(19),O=n.n(m),h=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{className:O.a.section,children:[Object(d.jsx)("span",{className:O.a.title,children:t}),n]})},p=n(23),f=n.n(p),_=n(3),x=Object(_.b)("contact/add",(function(e){var t=e.name,n=e.number;return{payload:{id:f.a.generate(),name:t,number:n}}})),v=Object(_.b)("contact/delete"),C=Object(_.b)("contact/changeFilter"),g=n(6),N=n.n(g);var k=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(x(t))}}}))((function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),u=s[0],b=s[1],j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":o(c);break;case"number":b(c)}};return Object(d.jsxs)("form",{className:N.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),o(""),b("")},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{className:N.a.name,children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",className:N.a.input,value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{className:N.a.name,children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",placeholder:"Enter number",value:u,className:N.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(d.jsx)("button",{className:N.a.button,type:"submit",children:"Add contact"})]})})),y=n(13),w=n.n(y),S=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},A=Object(i.b)((function(e){var t=e.contact,n=t.contacts,c=t.filter;return{contact:S(n,c)}}),(function(e){return{onDeleteContact:function(t){return e(v(t))}}}))((function(e){var t=e.contact,n=e.onDeleteContact;return Object(d.jsx)("ul",{className:w.a.list,children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(d.jsxs)("li",{className:w.a.item,children:[Object(d.jsxs)("span",{children:[c,":"]})," ",Object(d.jsx)("span",{children:a}),Object(d.jsx)("button",{className:w.a.button,onClick:function(){return n(t)},children:"Delete"})]},t)}))})})),F=n(14),E=n.n(F),B=Object(i.b)((function(e){return{value:e.contact.filter}}),(function(e){return{onChange:function(t){return e(C(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:E.a.search,children:[Object(d.jsx)("span",{className:E.a.title,children:"Find contacts by name"}),Object(d.jsx)("input",{className:E.a.input,type:"text",value:t,onChange:n})]})})),z=n(20),J=n.n(z),Z=document.querySelector("#modal-root");function D(e){var t=e.onClose,n=e.children,a=function(e){"Escape"===e.code&&t()};Object(c.useEffect)((function(){return window.addEventListener("keydown",a),function(){return window.removeEventListener("keydown",a)}}),[]);return Object(r.createPortal)(Object(d.jsx)("div",{className:J.a.backdrop,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(d.jsx)("div",{className:J.a.content,children:n})}),Z)}var L=n(24),P=n.n(L);function q(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(){a(!n)};return Object(d.jsxs)(j,{children:[n&&Object(d.jsxs)(D,{onClose:r,children:[Object(d.jsx)("h1",{children:"Hello!"}),Object(d.jsx)("p",{children:"This name already in contacts. Rewrite number?"}),Object(d.jsx)("button",{className:P.a.modalButton,type:"button",onClick:r,children:"Close"})]}),Object(d.jsx)(h,{title:"Phonebook",children:Object(d.jsx)(k,{})}),Object(d.jsxs)(h,{title:"Contacts",children:[Object(d.jsx)(B,{}),Object(d.jsx)(A,{})]})]})}var H,M=n(12),I=n(15),K=n(2),R=Object(_.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(H={},Object(I.a)(H,x,(function(e,t){var n=t.payload;return e.some((function(e){return e.name===n.name}))?(alert("".concat(n.name," already in contacts. Rewrite number?")),e):[n].concat(Object(M.a)(e))})),Object(I.a)(H,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),H)),T=Object(_.c)("",Object(I.a)({},C,(function(e,t){return t.payload}))),Q=Object(K.b)({contacts:R,filter:T}),U=n(25),V=n.n(U),W=n(4),X=n(26),$={key:"contact",storage:n.n(X).a,blacklist:["filter"]},G=[].concat(Object(M.a)(Object(_.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),[V.a]),Y=Object(_.a)({reducer:{contact:Object(W.g)($,Q)},middleware:G,devTools:!1}),ee={store:Y,persistor:Object(W.h)(Y)};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{store:ee.store,children:Object(d.jsx)(s.a,{loading:null,persistor:ee.persistor,children:Object(d.jsx)(q,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"Form_form__30zJ6",name:"Form_name__2FAC0",input:"Form_input__2uJZz",button:"Form_button__1Kv17"}}},[[49,1,2]]]);
//# sourceMappingURL=main.c5e4e66e.chunk.js.map