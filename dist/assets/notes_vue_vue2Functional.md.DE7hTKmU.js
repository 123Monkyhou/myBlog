import{_ as s,c as i,o as a,a1 as n}from"./chunks/framework.D13AgEzC.js";const y=JSON.parse('{"title":"一.  应用场景：","description":"","frontmatter":{},"headers":[],"relativePath":"notes/vue/vue2Functional.md","filePath":"notes/vue/vue2Functional.md"}'),p={name:"notes/vue/vue2Functional.md"},t=n(`<p>背景：之前业务中需要根据后台返回的json静态展示数据，当时感觉简单就用v-for,v-if做了一个。后来发现了functional这个东西，很符合当时的业务。</p><p>官网对functional的介绍：<a href="https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">https://v2.cn.vuejs.org/v2/guide/render-function.html#函数式组件</a></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de63ea1c999043e59edd6ccad0202cbd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1451&amp;h=977&amp;s=147465&amp;e=png&amp;b=fafafa" alt="image.png"></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93e320ef4c94fcdb53e1c629f5eb564~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1527&amp;h=535&amp;s=64834&amp;e=png&amp;b=ffffff" alt="image.png"></p><h1 id="一-应用场景" tabindex="-1">一. 应用场景： <a class="header-anchor" href="#一-应用场景" aria-label="Permalink to &quot;一.  应用场景：&quot;">​</a></h1><p>业务中纯静态显示的组件，不需要交互。只通过props获取数据。 例如：我们接收到json后，展示数据。</p><p>json内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;input&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;18：00&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;67度23分&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;获取位置&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>显示效果：</p><h1 id="二-实现方法" tabindex="-1">二. 实现方法 <a class="header-anchor" href="#二-实现方法" aria-label="Permalink to &quot;二. 实现方法&quot;">​</a></h1><pre><code>在export default中添加funtional，或者在template标签中添加functional属性。
</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc87f98dcbed41ec959f8893d07508ee~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=785&amp;h=249&amp;s=26759&amp;e=png&amp;b=1f1f1f" alt="image.png"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eacc87d39bf54653ba428e4bfe0fde04~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=503&amp;h=177&amp;s=8269&amp;e=png&amp;b=f8f8f8" alt="image.png"></p><p>完整代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    export default{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        functional,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        props:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;collectData&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        render:(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">slot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{id:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;collectParseWrapper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            props.collectData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> textTemp</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> propTemp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.type) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                textTemp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;button&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{},[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}. title\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                    h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item.type,{},textTemp),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                        h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;descri&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>组件使用：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db33e886b58647c5b8bb18d668303a73~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1247&amp;h=61&amp;s=16161&amp;e=png&amp;b=202020" alt="image.png"></p><p>注：vue3中没有functional, 因为vue3使用了setup</p>`,18),h=[t];function l(k,e,E,r,d,g){return a(),i("div",null,h)}const o=s(p,[["render",l]]);export{y as __pageData,o as default};