(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),l=t.n(i),c=(t(26),t(19)),o=t(10),s=t(20),p=t(1),m=t(7),u=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("svg",{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},r.a.createElement("path",{fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),r.a.createElement("path",{fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"}))),r.a.createElement("div",{className:"title"},r.a.createElement(m.a.h1,{initial:{y:-250},animate:{y:0},transition:{type:"spring",stiffness:120}},"Pizza Joint")))},E=t(6),d=function(){return r.a.createElement(m.a.div,{initial:{opacity:0},transition:{duration:3},animate:{opacity:1},className:"home container"},r.a.createElement(m.a.h2,{whileHover:{fontSize:40,color:"red",x:"100px"}},"Welcome to Pizza Joint"),r.a.createElement(E.b,{to:"/base"},r.a.createElement(m.a.button,{whileHover:{scale:1.1,opacity:.9,textShadow:"0px 0px 8px rgba(255, 255, 255)",boxShadow:"0px 0px 8px rgba(255, 255, 255)"},whileTap:{scale:.9}},"Create Your Pizza")))},h=function(e){var a=e.addBase,t=e.pizza;return r.a.createElement(m.a.div,{initial:{x:"100vw"},animate:{x:0},transition:{duration:.5,type:"spring"},className:"base container"},r.a.createElement("h3",null,"Step 1: Choose Your Base"),r.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=t.base===e?"active":"";return r.a.createElement("li",{key:e,onClick:function(){return a(e)}},r.a.createElement("span",{className:n},e))}))),t.base&&r.a.createElement("div",{className:"next"},r.a.createElement(E.b,{to:"/toppings"},r.a.createElement(m.a.button,{transition:{duration:2,type:"spring",stiffness:200},initial:{x:-1e3},animate:{x:0}},"Next"))))},v=function(e){var a=e.addTopping,t=e.pizza;return r.a.createElement("div",{className:"toppings container"},r.a.createElement("h3",null,"Step 2: Choose Toppings"),r.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=t.toppings.includes(e)?"active":"";return r.a.createElement("li",{key:e,onClick:function(){return a(e)}},r.a.createElement("span",{className:n},e))}))),r.a.createElement(E.b,{to:"/order"},r.a.createElement("button",null,"Order")))},b=function(e){var a=e.pizza;return r.a.createElement("div",{className:"container order"},r.a.createElement("h2",null,"Thank you for your order :)"),r.a.createElement("p",null,"You ordered a ",a.base," pizza with:"),a.toppings.map((function(e){return r.a.createElement("div",{key:e},e)})))};var f=function(){var e=Object(n.useState)({base:"",toppings:[]}),a=Object(s.a)(e,2),t=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/base"},r.a.createElement(h,{addBase:function(e){i(Object(o.a)(Object(o.a)({},t),{},{base:e}))},pizza:t})),r.a.createElement(p.a,{path:"/toppings"},r.a.createElement(v,{addTopping:function(e){var a;a=t.toppings.includes(e)?t.toppings.filter((function(a){return a!==e})):[].concat(Object(c.a)(t.toppings),[e]),i(Object(o.a)(Object(o.a)({},t),{},{toppings:a}))},pizza:t})),r.a.createElement(p.a,{path:"/order"},r.a.createElement(b,{pizza:t})),r.a.createElement(p.a,{path:"/"},r.a.createElement(d,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null,r.a.createElement(f,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.9c793a46.chunk.js.map