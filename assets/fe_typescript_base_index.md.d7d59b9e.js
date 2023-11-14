import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6a483339.js";const h=JSON.parse('{"title":"概念","description":"","frontmatter":{},"headers":[],"relativePath":"fe/typescript/base_index.md","lastUpdated":1699973902000}'),l={name:"fe/typescript/base_index.md"},p=e(`<h1 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h1><p><code>TypeScript</code>是<code>JavaScript</code>的一个超集，主要提供了类型系统和对ES6的支持。</p><div class="tip custom-block"><p class="custom-block-title">优势</p><ul><li>能在开发过程中更快的发现潜在问题。</li><li>对编辑器更友好的代码提示功能。</li><li>代码语义更清晰易懂</li></ul></div><h1 id="安装和编译" tabindex="-1">安装和编译 <a class="header-anchor" href="#安装和编译" aria-label="Permalink to &quot;安装和编译&quot;">​</a></h1><h4 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h4><p>你首先需要在官网<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js</a> (opens new window)按照你电脑的操作系统下载对应的Node版本进行安装。</p><h4 id="typescript" tabindex="-1">Typescript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;Typescript&quot;">​</a></h4><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">typescript</span><span style="color:#BABED8;">  </span><span style="color:#C3E88D;">//</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">全局安装</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn global add typescript</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装完毕后，查看版本号</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">tsc</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>创建一个空文件夹，并且生成初始化文件:<code>tsc --init</code>生成<code>tsconfig.js</code>配置文件，并写下基础ts代码,进行编译</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> price</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(price)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>执行<code>tsc index.ts</code>,可以看到会生成一个<code>index.js</code>同名文件,并且命令行输出了所打印信息</p><div class="tip custom-block"><p class="custom-block-title">不需要编译成js的前提下，可以直接执行 ts 代码吗？ 需要使用<code>ts-node</code>库来提供支持:</p><ul><li><p>npm install ts-node</p></li><li><p>ts-node index.ts</p></li></ul><p>此时命令行输出了所打印信息</p></div><div class="warning custom-block"><p class="custom-block-title">每次改动都要手动去执行编译，这样很麻烦，有没有可以实时监听并编译？</p><p>执行watch即可每次文件变动ts会自动编译成js： tsc --watch index.ts</p></div>`,13),o=[p];function t(c,r,i,d,y,u){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};