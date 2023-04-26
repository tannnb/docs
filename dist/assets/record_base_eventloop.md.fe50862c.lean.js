import{_ as l,o,c as p,C as s,a,V as n}from"./chunks/framework.b9206b98.js";const P=JSON.parse('{"title":"什么是事件循环机制","description":"","frontmatter":{},"headers":[],"relativePath":"record/base_eventloop.md"}'),e={name:"record/base_eventloop.md"},t=s("h1",{id:"什么是事件循环机制",tabindex:"-1"},[a("什么是事件循环机制 "),s("a",{class:"header-anchor",href:"#什么是事件循环机制","aria-label":'Permalink to "什么是事件循环机制"'},"​")],-1),c=s("h2",{id:"前言",tabindex:"-1"},[a("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),r=s("p",null,"JavaScript是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环",-1),y=s("p",null,"在JavaScript中，所有的任务都可以分为",-1),i=s("ul",null,[s("li",null,"同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行"),s("li",null,"异步任务：异步执行的任务，比如ajax网络请求，setTimeout定时函数等")],-1),F=s("p",null,"运行流程图如下：",-1),D={style:{"text-align":"left",width:"600px"}},A=["src"],C=n("",20),d={style:{"text-align":"left",width:"600px"}},h=["src"],u=n("",21);function m(g,_,f,E,b,v){return o(),p("div",null,[t,c,r,y,i,F,s("div",D,[s("img",{src:"/eventloop1.png"},null,8,A)]),C,s("div",d,[s("img",{src:"/eventloop2.png",alt:"foo"},null,8,h)]),u])}const T=l(e,[["render",m]]);export{P as __pageData,T as default};
