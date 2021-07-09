(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{579:function(a,s,e){"use strict";e.r(s);var t=e(29),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"脚手架介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架介绍"}},[a._v("#")]),a._v(" 脚手架介绍")]),a._v(" "),e("h4",{attrs:{id:"脚手架本质是一个操作系统的客户端-他通过命令执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架本质是一个操作系统的客户端-他通过命令执行"}},[a._v("#")]),a._v(" 脚手架本质是一个操作系统的客户端，他通过命令执行")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("vue create vue-app\n")])])]),e("p",[a._v("主要由3个命令组成：")]),a._v(" "),e("ul",[e("li",[a._v("主命令:"),e("code",[a._v("vue")])]),a._v(" "),e("li",[a._v("command:"),e("code",[a._v("create")])]),a._v(" "),e("li",[a._v("command的参数param: "),e("code",[a._v("vue-app")])])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("表示创建一个vue项目，项目名称位vue-app, 如果当前目录已经有文件了，我们需要覆盖当前目录下的文件，强制进行安装vue项目，可以使用--force参数")]),a._v(" "),e("p",[a._v("vue create vue-app --force")]),a._v(" "),e("p",[a._v("更多命令查看： vue create --help")])]),a._v(" "),e("h4",{attrs:{id:"脚手架执行原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚手架执行原理"}},[a._v("#")]),a._v(" 脚手架执行原理")]),a._v(" "),e("ul",[e("li",[a._v("在终端输入"),e("code",[a._v("vue create vue-app")])]),a._v(" "),e("li",[a._v("终端解析出"),e("code",[a._v("vue")]),a._v("命令")]),a._v(" "),e("li",[a._v("终端在环境变量中找到"),e("code",[a._v("vue")]),a._v("命令")]),a._v(" "),e("li",[a._v("终端根据vue命令链接到实际文件"),e("code",[a._v("vue.js")])]),a._v(" "),e("li",[a._v("终端利用node执行"),e("code",[a._v("vue.js")])]),a._v(" "),e("li",[e("code",[a._v("vue.js")]),a._v("解析command/options")]),a._v(" "),e("li",[e("code",[a._v("vue.js")]),a._v("执行command")]),a._v(" "),e("li",[a._v("执行完成，退出")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("为什么全局安装"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("@vue/cli"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("后会添加的命令为"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("vue"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("?\n\n全局安装成功之后，进入 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("node/bin"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 目录下会存在多个软连接文件,\n其中"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("vue"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("软连接指向的是"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("/lib/node_modules/@vue/cli/bin/vue.js"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n那么这个绑定关系是如何指定的？在"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("/lib/node_modules/@vue/cli"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("下的package.json存在bin配置\n这个配置就是安装完成之后软连接的名称和指向地址\n\n全局安装 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("@vue/cli"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 发生了什么?\n首先将包安装到"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("node_modules下"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("，然后查找"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("package.json"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("文件中的bin配置，如果找到该配置，那么就会在"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("node/bin"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n下根据"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("package.json"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("中的配置创建软连接名称和地址\n\n为什么vue指向一个js文件，我们确可以直接通过vue命令去直接执行它？\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("/lib/node_modules/@vue/cli/bin/vue.js"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 第一行有申明命令 "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/usr/bin/env node")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" 表示为用node去执行这个文件\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("\n// 链接本地脚手架\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" you-cli-dir\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v("\n\n// 链接本地库文件\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" you-lib-dir\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" you-cli-dir\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" you-lib\n\n// 取消链接本地库文件\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" you-lib-dir\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" unlink\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" you-cli-dir\n\n// 如果link 存在\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" unlink you-lib\n// 如果link 不存在\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf node_modules\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);