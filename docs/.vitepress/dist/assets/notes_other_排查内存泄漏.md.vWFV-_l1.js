import{_ as e,c as t,o as a,a1 as o}from"./chunks/framework.D13AgEzC.js";const u=JSON.parse('{"title":"内存泄漏","description":"","frontmatter":{},"headers":[],"relativePath":"notes/other/排查内存泄漏.md","filePath":"notes/other/排查内存泄漏.md"}'),n={name:"notes/other/排查内存泄漏.md"},r=o(`<h1 id="内存泄漏" tabindex="-1">内存泄漏 <a class="header-anchor" href="#内存泄漏" aria-label="Permalink to &quot;内存泄漏&quot;">​</a></h1><p>参考文章：<a href="https://juejin.cn/post/7232127712642547770#heading-16" target="_blank" rel="noreferrer">https://juejin.cn/post/7232127712642547770#heading-16</a></p><h2 id="_1-内存泄漏造成的原因" tabindex="-1">1.内存泄漏造成的原因 <a class="header-anchor" href="#_1-内存泄漏造成的原因" aria-label="Permalink to &quot;1.内存泄漏造成的原因&quot;">​</a></h2><pre><code>游离的dom元素(元素删除后，js中对dom的引用还在)
未释放的监听或定时器（dom的监听事件未移除之间删除了dom元素，此时的引用还在）
未释放的闭包（闭包执行后，未将闭包制空）
以外的全局变量(使用指向windows的this,或者未声明的变量)
对象循环引用
引用的插件未销毁
eventBus未清理
</code></pre><h2 id="_2-如何排查" tabindex="-1">2.如何排查 <a class="header-anchor" href="#_2-如何排查" aria-label="Permalink to &quot;2.如何排查&quot;">​</a></h2><pre><code>· deltools
1.performance
![alt text](image.png)
2.lighthouse
3.memory
  内存快照和按时间生成内存图
</code></pre>`,6),s=[r];function _(d,i,c,h,l,p){return a(),t("div",null,s)}const f=e(n,[["render",_]]);export{u as __pageData,f as default};
