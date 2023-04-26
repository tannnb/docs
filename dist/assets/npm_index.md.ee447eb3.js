import{_ as s,o as n,c as a,V as l}from"./chunks/framework.b9206b98.js";const m=JSON.parse('{"title":"nvm","description":"","frontmatter":{"sidebar":"auto"},"headers":[],"relativePath":"npm/index.md"}'),p={name:"npm/index.md"},o=l(`<h2 id="npm源" tabindex="-1">npm源 <a class="header-anchor" href="#npm源" aria-label="Permalink to &quot;npm源&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前 npm 源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 淘宝源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry=https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn config set registry https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 官方源</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry=https://registry.npmjs.org</span></span></code></pre></div><h2 id="查看已安装的依赖包" tabindex="-1">查看已安装的依赖包 <a class="header-anchor" href="#查看已安装的依赖包" aria-label="Permalink to &quot;查看已安装的依赖包&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=0</span></span></code></pre></div><h2 id="查看依赖包的安装路径" tabindex="-1">查看依赖包的安装路径 <a class="header-anchor" href="#查看依赖包的安装路径" aria-label="Permalink to &quot;查看依赖包的安装路径&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 当前项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir</span></span></code></pre></div><h2 id="清除缓存" tabindex="-1">清除缓存 <a class="header-anchor" href="#清除缓存" aria-label="Permalink to &quot;清除缓存&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 注册登录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adduser</span></span>
<span class="line"><span style="color:#FFCB6B;">Username:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"><span style="color:#FFCB6B;">Password:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">password</span></span>
<span class="line"><span style="color:#FFCB6B;">Email:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IS</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">your</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">email</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#查看当前使用的用户</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">whoami</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">登录</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">login</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">发布</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publish</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">撤销包</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unpublish</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">包名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span></span></code></pre></div><h2 id="脚本命令相关" tabindex="-1">脚本命令相关 <a class="header-anchor" href="#脚本命令相关" aria-label="Permalink to &quot;脚本命令相关&quot;">​</a></h2><p>执行顺序：并行执行 <code>&amp;</code>，继发执行 <code>&amp;&amp;</code></p><p>例 1：<code>npm run script1.js &amp; npm run script2.js</code></p><p>例 2：<code>npm run script1.js &amp;&amp; npm run script2.js</code></p><p>获取当前正在运行的脚本名称 <code>p<wbr>rocess.env.npm_lifecycle_event</code></p><h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h1><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 设置 node 镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_mirror</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置 npm 镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm_mirror</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div><h4 id="安装和设置-mac" tabindex="-1">安装和设置 - Mac <a class="header-anchor" href="#安装和设置-mac" aria-label="Permalink to &quot;安装和设置 - Mac&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/nvm-sh/nvm/v0.</span><span style="color:#F78C6C;">37.2</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/mirrors/nvm/raw/v0.</span><span style="color:#F78C6C;">37.2</span><span style="color:#C3E88D;">/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span></code></pre></div><h4 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看 nvm 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装最新版的 node</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装指定版本的 node</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 卸载指定版本的 node</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看已安装的 node 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到指定的 node 版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">版本号</span></span></code></pre></div>`,20),e=[o];function t(c,r,C,i,y,D){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
