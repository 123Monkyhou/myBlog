import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.D13AgEzC.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/react/组件相关.md","filePath":"notes/react/组件相关.md"}'),e={name:"notes/react/组件相关.md"},l=p(`<h3 id="组件化开发" tabindex="-1">组件化开发 <a class="header-anchor" href="#组件化开发" aria-label="Permalink to &quot;组件化开发&quot;">​</a></h3><p>react没有全局和局部组件,react组件分为:函数组件,类组件,hooks组件</p><ol><li>函数式组件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   const DemoOne = function (props) {</span></span>
<span class="line"><span>    // props获取的属性是只读的 </span></span>
<span class="line"><span>    return &lt;div className=&quot;demo-box&quot;&gt;</span></span>
<span class="line"><span>    我是demo1</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default DemoOne;</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;&gt;</span></span>
<span class="line"><span>  &lt;DemoOne  title=&quot;我是标题&quot; x={10} className=&quot;box&quot; &gt;&lt;/DemoOne&gt;</span></span>
<span class="line"><span>  &lt;/&gt;</span></span></code></pre></div><pre><code>props设置默认值:属性规则校验插件:prop-types
\`\`\`
DemoOne.defaultProps = {
x:0
</code></pre><p>} <code>2. 类组件 ps:据说用的很少 </code> import React from &quot;react&quot;;</p><p>class Vote extends React.Component {</p><p>}</p><p>export default Vote; \`\`\`</p><ol start="3"><li><p>hooks组件</p></li><li><p>组件通信</p><ol><li>props 父=》子 <ol><li>值 ps:和vue类似</li><li>children ps:类似于vue的插槽</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Father(){</span></span>
<span class="line"><span>    return(</span></span>
<span class="line"><span>    &lt;div style={{background:&#39;green&#39;,padding:&quot;10px&quot;}}&gt;</span></span>
<span class="line"><span>        &lt;div&gt;This is Father&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;Son name=&quot;Jack&quot;&gt;</span></span>
<span class="line"><span>            &lt;div style={{background:&#39;#2a2ac8&#39;}}&gt;Father 给 Son 的标签&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/Son&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Son(props){</span></span>
<span class="line"><span>    console.log(props);</span></span>
<span class="line"><span>    console.log(props.children);</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div style={{background:&quot;blue&quot;}}&gt;</span></span>
<span class="line"><span>            &lt;div&gt;this is Son&lt;/div&gt;</span></span>
<span class="line"><span>            {props.children}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li>父组件传给子一个函数，函数把值当作参数 ps:类似于vue的emit,但是vue是监听函数的执行，react利用闭包，浅拷贝，通过函数的参数传值</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Father(){</span></span>
<span class="line"><span>    const SonValue = function (val){</span></span>
<span class="line"><span>        console.log(&#39;我是Father,我获取到了Son的值,为&#39;+val);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return(</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;This is Father&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;Son  getSonValue={SonValue}&gt;&lt;/Son&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function Son(props){</span></span>
<span class="line"><span>    const value = &#39;123&#39;</span></span>
<span class="line"><span>    const {getSonValue} = props</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;div&gt;this is Son&lt;/div&gt;</span></span>
<span class="line"><span>            &lt;button onClick={() =&gt; {getSonValue(value)}}&gt;把 123 给 fatger&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="3"><li>兄弟:状态提升 子=》父=》子<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div></li><li>跨层：context createContext()创建一个上下文对象 顶层:Ctx.Provider()提供数据 底层:useContext()获取数据<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div></li></ol></li></ol>`,10),t=[l];function i(o,c,d,r,u,g){return a(),n("div",null,t)}const b=s(e,[["render",i]]);export{v as __pageData,b as default};
