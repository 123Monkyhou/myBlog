import{_ as a,c as e,o as t,a1 as n}from"./chunks/framework.D13AgEzC.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"meeting/ajax.md","filePath":"meeting/ajax.md"}'),r={name:"meeting/ajax.md"},o=n(`<h2 id="传参格式" tabindex="-1">传参格式 <a class="header-anchor" href="#传参格式" aria-label="Permalink to &quot;传参格式&quot;">​</a></h2><ol><li><p>get请求 默认为application/json格式</p></li><li><p>post格式：json、formData、urlsearchparams</p><pre><code> formData:
 用途： 主要用于构建表单数据对象，以便通过 AJAX 请求将其发送到服务器。
 构造方法： 可以通过将一个表单元素或手动创建的 FormData 实例传递给构造函数来创建。
 数据格式： 可以包含键值对，每个键对应一个表单字段，值是用户输入的数据。
 文件上传： FormData 可以用于上传文件，通过 append 方法添加文件字段。
 例子：
 var formData = new FormData(document.getElementById(&#39;myForm&#39;));
 formData.append(&#39;additionalKey&#39;, &#39;additionalValue&#39;);

 ·  urlsearchparams
 用途： 主要用于构建 URL 查询字符串，方便将数据附加到 URL。
 构造方法： 直接通过传递一个查询字符串或一个包含查询参数的对象来创建。
 数据格式： 包含键值对，每个键值对对应一个查询参数。
 文件上传： 不适用于文件上传，主要用于处理文本数据。
 例子：
 var searchData = {
     keyword: &#39;searchTerm&#39;,
     category: &#39;categoryValue&#39;
 };
 var searchUrl = &#39;/search?&#39; + new URLSearchParams(searchData).toString();
</code></pre></li></ol><h2 id="http状态码" tabindex="-1">http状态码 <a class="header-anchor" href="#http状态码" aria-label="Permalink to &quot;http状态码&quot;">​</a></h2><pre><code>1xx 临时响应
2xx 成功
3xx 重定向
4xx 请求错误
5xx 服务器错误
常见状态码：
200，204 相应成功但是没有返回 
304 使用缓存
400 语法错误 401未授权 403 请求被拒绝 404 找不到资源 
</code></pre>`,4),c=[o];function s(i,d,l,p,m,h){return t(),e("div",null,c)}const f=a(r,[["render",s]]);export{x as __pageData,f as default};
