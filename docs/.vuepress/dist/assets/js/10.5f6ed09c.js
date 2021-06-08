(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{264:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原始类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原始类型")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("javascript原始类型有6中,原始类型既只保存原始值，没有函数可以调用")])]),t._v(" "),a("h4",{attrs:{id:"六种原始类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六种原始类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 六种原始类型")]),t._v(" "),a("ul",[a("li",[t._v("string")]),t._v(" "),a("li",[t._v("number")]),t._v(" "),a("li",[t._v("boolean")]),t._v(" "),a("li",[t._v("null")]),t._v(" "),a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("symbol")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("为什么说原始类型没有函数可以调用,但是"),a("code",[t._v("'1'.toString()")]),t._v("又可以在浏览器中正确执行?")]),t._v(" "),a("p",[t._v("因为"),a("code",[t._v("'1'.toString()")]),t._v("中字符串"),a("code",[t._v("'1'")]),t._v("在此时会被封装成对应字符串对象，相当于"),a("code",[t._v("new String('1').toString()")]),t._v(",因为"),a("code",[t._v("new String('1')")]),t._v("实例化一个对象，而这个对象上是有"),a("code",[t._v("toString()")]),t._v("方法的")])]),t._v(" "),a("h4",{attrs:{id:"null到底是什么类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null到底是什么类型","aria-hidden":"true"}},[t._v("#")]),t._v(" null到底是什么类型")]),t._v(" "),a("ul",[a("li",[t._v('null不是一个空引用, 而是一个原始值; 它只是期望此处将引用一个对象, 注意是"期望".')]),t._v(" "),a("li",[t._v("typeof null结果是object, 这是个历史遗留bug.")]),t._v(" "),a("li",[t._v("在ECMA6中, 曾经有提案为历史平反, 将type null的值纠正为null, 但最后提案被拒了.")]),t._v(" "),a("li",[t._v("理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老")])]),t._v(" "),a("h3",{attrs:{id:"对象类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象类型")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("在javascript中, 除了原始类型，其他的都是对象类型，对象类型储存的是地址，而原始类型储存的是值.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出:1")]),t._v("\n")])])]),a("p",[t._v("以上代码中,创建一个对象类型a(数组),将a的栈储存地址赋值给了变量b，此时修改a的值，打印出b的值也同步发生了改变,因为他们在内存中使用的同一个地址，改变其中任意变量的值，都会影响其他变量的值")]),t._v(" "),a("h4",{attrs:{id:"对象当做函数参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象当做函数参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象当做函数参数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\n  person "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'李四'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" person\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("cus-border")],1)},[],!1,null,null,null);s.default=e.exports}}]);