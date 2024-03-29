---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 蜗牛实验室
  text: FE的成长之路
  tagline: 知识是进步的阶梯，争取每天都有知识点更新
  image:
    src: /logo.png
    alt: 蜗牛实验室
  actions:
    - text: 知识小铺
      link: /fe/es6/
    - text: 快捷导航
      link: /nav
      theme: alt
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（八股文）</small><br />如有异议你说的对
    link: /fe/javascript/types
    linkText: 前端常用知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---

<style>
.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
