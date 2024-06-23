import{_ as s,c as a,o as t,a1 as n}from"./chunks/framework.D13AgEzC.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/react/环境配置.md","filePath":"notes/react/环境配置.md"}'),e={name:"notes/react/环境配置.md"},p=n(`<p>创建react项目 npx create-react-react-test</p><p>一个react项目中，默认会安装: react react-dom react-native</p><pre><code>&quot;scripts&quot;: {
&quot;start&quot;: &quot;react-scripts start&quot;,
&quot;build&quot;: &quot;react-scripts build&quot;,
&quot;test&quot;: &quot;react-scripts test&quot;,
&quot;eject&quot;: &quot;react-scripts eject&quot; //修改webpack配置规则
}

&quot;dependencies&quot;: {
&quot;@testing-library/jest-dom&quot;: &quot;^5.17.0&quot;,
&quot;@testing-library/react&quot;: &quot;^13.4.0&quot;,
&quot;@testing-library/user-event&quot;: &quot;^13.5.0&quot;,
&quot;react&quot;: &quot;^18.3.1&quot;,
&quot;react-dom&quot;: &quot;^18.3.1&quot;,
&quot;react-scripts&quot;: &quot;5.0.1&quot;,
&quot;web-vitals&quot;: &quot;^2.1.4&quot; // 性能检测工具
},
&quot;browserslist&quot;: { //基于browserList规范设置兼容情况
&quot;production&quot;: [
  &quot;&gt;0.2%&quot;, 
  &quot;not dead&quot;, // 不考虑ie
  &quot;not op_mini all&quot;
],
&quot;development&quot;: [
  &quot;last 1 chrome version&quot;,
  &quot;last 1 firefox version&quot;,
  &quot;last 1 safari version&quot;
]
</code></pre><p>}</p><p>&quot;babel-preset-react-app&quot;：对@babel/preset-env 的重写，目的是把es6转为es5,并识别react语法</p><h3 id="配置修改" tabindex="-1">配置修改 <a class="header-anchor" href="#配置修改" aria-label="Permalink to &quot;配置修改&quot;">​</a></h3><ol><li>sass改为less 修改webpack.config.js中所有sass</li><li>添加@映射<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>alias: {</span></span>
<span class="line"><span>    &#39;@&#39;:paths.appSrc</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li>通过环境变量修改域名和端口 npm i cross-env &quot;start&quot;: &quot;cross-env PORT=8080 node scripts/start.js&quot;</li><li>修改浏览器兼容<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div></li></ol><p>&quot;browserslist&quot;: { &quot;production&quot;: [ &quot;&gt;0.2%&quot;, &quot;not dead&quot;, &quot;not op_mini all&quot; ], &quot;development&quot;: [ &quot;last 1 chrome version&quot;, &quot;last 1 firefox version&quot;, &quot;last 1 safari version&quot; ] } \`\`\` 能对postcss-loadeer生效，控制css3前缀 能对babel-loader生效，控制es6的转换 无法对es6内置的api兼容-需要@babel-polyfill 脚手架中有react-app-polyfill 在index.js中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* 对es6内置api做兼容处理 */</span></span>
<span class="line"><span>import &#39;react-app-polyfill/ie9&#39;</span></span>
<span class="line"><span>import &#39;react-app-polyfill/ie11&#39;</span></span>
<span class="line"><span>import &#39;react-app-polyfill/stable&#39;/* 对es6内置api做兼容处理 */</span></span></code></pre></div><ol start="5"><li>处理跨域 在src目录下创建setupProxy.js文件 下载依赖： http-proxy-middleware setupProxy.js:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div></li></ol><p>const {createProxyMiddleware} = require(&#39;http-proxy-middleware&#39;) module.exports = function (app) { app.use(createProxyMiddleware(&#39;/jian&#39;, { target: &#39;<a href="https://www.jianshu.com/asimov" target="_blank" rel="noreferrer">https://www.jianshu.com/asimov</a>&#39;, changeOrigin: true, ws:true, pathRewrite: { &#39;^/jian&#39;: &#39;&#39; } })) app.use(createProxyMiddleware(&#39;/zhi&#39;, { target: &#39;<a href="https://news-at.zhihu.com/api/4" target="_blank" rel="noreferrer">https://news-at.zhihu.com/api/4</a>&#39;, changeOrigin: true, ws:true, pathRewrite: { &#39;^/zhi&#39;: &#39;&#39; } })) }</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>### redux环境</span></span>
<span class="line"><span>1. redux Toolkit （官方推荐的redux工具集，简化书写方式）</span></span>
<span class="line"><span>2. react-redux (redux和react的中间件)</span></span>
<span class="line"><span>npm i @reduxjs/toolkit react-redux</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### reactRouter</span></span>
<span class="line"><span> npm i react-router-dom</span></span>
<span class="line"><span> \`\`\`</span></span>
<span class="line"><span> import * as React from &quot;react&quot;;</span></span>
<span class="line"><span> import * as ReactDOM from &quot;react-dom/client&quot;;</span></span>
<span class="line"><span> import {</span></span>
<span class="line"><span>   createBrowserRouter,</span></span>
<span class="line"><span>   RouterProvider,</span></span>
<span class="line"><span> } from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span> import &quot;./index.css&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const router = createBrowserRouter([</span></span>
<span class="line"><span>   {</span></span>
<span class="line"><span>     path: &quot;/&quot;,</span></span>
<span class="line"><span>     element: &lt;div&gt;Hello world!&lt;/div&gt;,</span></span>
<span class="line"><span>   },</span></span>
<span class="line"><span> ]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ReactDOM.createRoot(document.getElementById(&quot;root&quot;)).render(</span></span>
<span class="line"><span>   &lt;React.StrictMode&gt;</span></span>
<span class="line"><span>     &lt;RouterProvider router={router} /&gt;</span></span>
<span class="line"><span>   &lt;/React.StrictMode&gt;</span></span>
<span class="line"><span> );</span></span>
<span class="line"><span> \`\`\`</span></span></code></pre></div>`,12),o=[p];function i(r,l,c,u,d,q){return t(),a("div",null,o)}const g=s(e,[["render",i]]);export{m as __pageData,g as default};
