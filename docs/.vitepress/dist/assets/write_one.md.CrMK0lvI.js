import{_ as n,c as s,o as a,a1 as p}from"./chunks/framework.D13AgEzC.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"write/one.md","filePath":"write/one.md"}'),e={name:"write/one.md"},l=p(`<ol><li>执行一下程序，输出结果为？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var x = 10;</span></span>
<span class="line"><span>var y = 20;</span></span>
<span class="line"><span>var z = x &lt; y ? x++:++y;</span></span>
<span class="line"><span>console.log(&#39;x=&#39;+x+&#39;;y=&#39;+y+&#39;;z=&#39;+z);</span></span></code></pre></div><pre><code>x=11, y=20, z=10
</code></pre><ol start="2"><li><p>typeof Date.now() 的值是：</p><p>number</p></li><li><p>一下代码的输出结果是？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj = {};</span></span>
<span class="line"><span>obj.log = console.log;</span></span>
<span class="line"><span>obj.log.call(console,this);</span></span></code></pre></div><pre><code>windows
</code></pre><ol start="4"><li>已知arr = [1,2,NaN,1,4,2,NaN]，现为输出arr的不重复元素（重复元素只输出一次），则下列程序中的①处，可以作为判断条件的是（）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for(var i = 0 ;i&lt;arr.length;i++){</span></span>
<span class="line"><span>  if(①){</span></span>
<span class="line"><span>    newArr.push(arr[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><pre><code>!newArr.includes(arr[i])
indexOf不能判断NaN
</code></pre><ol start="5"><li>如下代码片段的运行结果是</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj ={a:1,b:function () {alert(this.a)}}; </span></span>
<span class="line"><span>var fun =obj.b; </span></span>
<span class="line"><span>fun()</span></span></code></pre></div><pre><code>undifined 
</code></pre><ol start="6"><li>请问以下JS代码会输出什么</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var a = 10; </span></span>
<span class="line"><span>(function a() {</span></span>
<span class="line"><span>    a = 20;</span></span>
<span class="line"><span>    console.log(a); </span></span>
<span class="line"><span>})()</span></span></code></pre></div><pre><code>函数a的具体内容
</code></pre><ol start="7"><li>以下代码的执行后，str 的值是：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var str = &quot;Hellllo world&quot;;</span></span>
<span class="line"><span>str = str.replace(/(a)\\1/g, &#39;$1&#39;);</span></span></code></pre></div><pre><code>hello world
Hello world
</code></pre><ol start="8"><li>以下代码的运行结果是：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var bb = 1;</span></span>
<span class="line"><span>function aa(bb) {</span></span>
<span class="line"><span>    bb = 2;</span></span>
<span class="line"><span>    alert(bb);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>aa(bb);</span></span>
<span class="line"><span>alert(bb);</span></span></code></pre></div><pre><code>2,1
</code></pre><ol start="9"><li>请问以下JS代码最后输出的len值是多少？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var len = 117;</span></span>
<span class="line"><span>let func = {</span></span>
<span class="line"><span>  len: 935,</span></span>
<span class="line"><span>  showLen: function() {</span></span>
<span class="line"><span>    console.log(this.len);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  show: function() {</span></span>
<span class="line"><span>    (function(cb) {</span></span>
<span class="line"><span>      cb();</span></span>
<span class="line"><span>    })(this.showLen)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func.show();</span></span></code></pre></div><pre><code>117
</code></pre><ol start="10"><li>以下JavaScript 代码，在浏览器中运行的结果是</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var foo = {n:1};</span></span>
<span class="line"><span>(function(foo){</span></span>
<span class="line"><span>    console.log(foo.n);</span></span>
<span class="line"><span>    foo.n = 3;</span></span>
<span class="line"><span>    var foo = {n:2};</span></span>
<span class="line"><span>    console.log(foo.n);</span></span>
<span class="line"><span>})(foo);</span></span>
<span class="line"><span>console.log(foo.n);</span></span></code></pre></div><p>1 2 3 11. 一下哪些操作会造成回流？</p><pre><code>var obj = document.getElementById(“test”);
A alert(obj.className)
B alert(obj.offsetHeight)
C obj.style.height = “100px”
D obj.style.color = “red”

B C  （offset和scroll会需要计算“相对位置”），所以会造成回流
</code></pre><ol start="12"><li><p>代码var foo = “10”+3-“1”;console.log(foo);执行后，foo的值为</p><pre><code>102
</code></pre></li><li><p>以下程序输出结果为？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(age){</span></span>
<span class="line"><span>       this.age = age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person.prototype = {</span></span>
<span class="line"><span>       constructor:Person,</span></span>
<span class="line"><span>       getAge:function(){</span></span>
<span class="line"><span>            console.log(this.age);</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>var ldh = new Person(24);</span></span>
<span class="line"><span>Person.prototype.age = 18;</span></span>
<span class="line"><span>Object.prototype.age = 20;</span></span>
<span class="line"><span>ldh.getAge();</span></span></code></pre></div><pre><code>20 X
24
</code></pre><ol start="14"><li>下列代码的输出结果为</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn(value){</span></span>
<span class="line"><span>console.log(arguments instanceof Array);</span></span>
<span class="line"><span>console.log(arguments.length);</span></span>
<span class="line"><span>console.log(value);</span></span>
<span class="line"><span>var arr = [...arguments];</span></span>
<span class="line"><span>console.log(arr instanceof Array);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn(1,2,3);</span></span></code></pre></div><p>false 3 1 15. 下面代码会输出什么？</p><pre><code>[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;].map(parseInt)

[1,NaN,NaN]
parseInt接受两个参数，value,redix。以上代码相当于：
parseInt(&#39;1&#39;, 0, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
parseInt(&#39;2&#39;, 1, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
parseInt(&#39;3&#39;, 2, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
1，redis的取值为2——36 所以返回nan,3不是二进制数 返回nan
</code></pre><ol start="16"><li><p>如何阻止IE和各大浏览器默认行为?</p><p>windos.event.returnValue = false; enevt.preventDefault();</p></li><li><p>执行以下程序，下列选项中，说法正确的是（）</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Dog{</span></span>
<span class="line"><span>  static dog(){</span></span>
<span class="line"><span>    console.log(this); // ①</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  bark(){</span></span>
<span class="line"><span>    console.log(&#39;狗会叫&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var dog = new Dog();</span></span></code></pre></div><pre><code>A：①式的this指代类的实例对象
B：调用dog方法，既可以使用Dog.dog()，也可以使用dog.dog()
C：调用bark方法，只能使用dog.bark()，不能使用Dog.bark()
D：在类中，不允许静态方法和非静态方法重名

c
静态方法的this只能指向类
静态方法不能由实例对象调用
可以重名
</code></pre><ol start="18"><li>执行以下程序，输出结果为？<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var uname = &quot;window&quot;;</span></span>
<span class="line"><span>var object = {</span></span>
<span class="line"><span>            uname :&quot;object&quot;,</span></span>
<span class="line"><span>            fun:function(){</span></span>
<span class="line"><span>                console.log(this.uname);</span></span>
<span class="line"><span>                return function(){</span></span>
<span class="line"><span>                console.log(this.uname);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>object.fun()();</span></span></code></pre></div>object windos object.func()()相当于 var fn = object.func();fn()</li><li>执行一下代码，五秒后的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for(var i = 0; i &lt; 5; i++){</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>        console.log(i);</span></span>
<span class="line"><span>    }, 1000 * i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>55555
</code></pre><ol start="20"><li><p>对于代码 var a = 10.42; 取出 a 的整数部分，以下代码哪些是正确的？ A：parseInt(a); B：Math.floor(a); C：Math.ceil(a); D：a.split(‘.’)[0];</p><pre><code>A,B
split操作的只能是string,reg
</code></pre></li><li><p>执行以下程序，输出结果为？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Phone{</span></span>
<span class="line"><span>  constructor(price){</span></span>
<span class="line"><span>    this.price = price;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  get price(){</span></span>
<span class="line"><span>    return 999;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p = new Phone(888);</span></span>
<span class="line"><span>console.log(p.price);</span></span></code></pre></div><pre><code>抛出异常，只有get(),没有set()时会发生异常
</code></pre><ol start="22"><li><p>以下不属于 typeof 运算符返回值的是？ A. &quot;string&quot; B. &quot;function&quot; C. &quot;object&quot; D. &quot;null&quot;</p><p>D</p></li><li><p>执行以下代码，错误的输出结果是 A. 输入：typeof {&quot;x&quot;:1} 输出：&quot;object&quot; B. 输入：typeof 1 输出：&quot;number&quot; C. 输入：typeof [{x:1}] 输出：&quot;array&quot; D. 输入：typeof NaN 输出：&quot;number&quot;</p><p>C</p></li><li><p>可以用typeof来判断的基本类型有 A. undefined B. null C. array D. object</p><p>A</p></li><li><p>以下不属于JavaScript基本数据类型的是： A. Boolean B. undefined C. Symbol D. Array</p><p>D</p></li><li><p>以下关于JavaScript中数据类型的说法错误的是() A. 数据类型分为基本数据类型和引用数据类型 B. JavaScript一共有8种数据类型 C. Object是引用数据类型，且只存储于堆(heap)中 D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中</p><p>B X c</p></li><li><p>请选择结果为ture的表达式？ A. null instanceof Object B. null === undefined C. null == undefined D. NaN == NaN</p><p>C</p></li><li><p>下列代码结果为 true 的是？ A. Symbol.for(&#39;a&#39;) === Symbol.for(&#39;a&#39;) B. Symbol(&#39;a&#39;) === Symbol(&#39;a&#39;) C. NaN === NaN D. {} === {}</p><p>D X A</p></li><li><p>根据如下变量，下列表达式中返回值为true的是 var a = 1; var b = []; var c = &#39;&#39;; var d = true; A. (a || b) === true B. (b &amp;&amp; c) === true C. (c &amp;&amp; d) === true D. (d || a) === true</p><p>D</p></li><li><p>1==true的返回值是true，这句话是否正确？ A. T B. F</p><p>A</p></li><li><p>下面代码输出为true的是? A. console.log([] === []); B. console.log(undefined == 0); C. console.log(undefined == false); D. console.log(false == &#39;&#39;);</p><p>B X D</p></li><li><p>浏览器环境下，以下打印结果为true的是 A. console.log(&quot;12&quot; === 12) B. console.log (NaN === NaN) C. console.log (typeof(null) === typeof(window)) D. console.log ([1,2,3] === [1,2,3])</p><p>C</p></li><li><p>以下表达式，正确的是 A. Number(&#39;a&#39;) == Number(&#39;a&#39;) B. -1 == true C. 3 + &#39;2&#39; === 5 D. ![] == &#39;&#39;</p><p>B D</p></li><li><p>下列程序的输出结果是多少？你能理清楚test函数的this指向吗？ var a = 5; function test() { a = 0; alert(a); alert(this.a); var a; alert(a); } new test();</p><p>0 undefined 0</p></li><li><p>下面代码的输出结果是</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var out = 25,</span></span>
<span class="line"><span>   inner = {</span></span>
<span class="line"><span>        out: 20,</span></span>
<span class="line"><span>        func: function () {</span></span>
<span class="line"><span>            var out = 30;</span></span>
<span class="line"><span>            return this.out;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>console.log((inner.func, inner.func)());</span></span>
<span class="line"><span>console.log(inner.func());</span></span>
<span class="line"><span>console.log((inner.func)());</span></span>
<span class="line"><span>console.log((inner.func = inner.func)());</span></span></code></pre></div><ol start="37"><li>下面程序的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (!(&quot;a&quot; in window)) {</span></span>
<span class="line"><span>    var a = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><ol start="38"><li>下面程序的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var a = 1;</span></span>
<span class="line"><span>var b = function a(x) {</span></span>
<span class="line"><span>  x &amp;&amp; a(--x);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><h3 id="ai" tabindex="-1">AI： <a class="header-anchor" href="#ai" aria-label="Permalink to &quot;AI：&quot;">​</a></h3><p>1.创建一个基本的HTML页面结构，包括&lt;head&gt;和&lt;body&gt;部分。</p><pre><code>&lt;!DOTYPE HTML&gt;
&lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>2.使用CSS实现一个简单的布局，例如两列布局或者居中布局。</p><pre><code>.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</code></pre><h3 id="javascript基础" tabindex="-1">JavaScript基础： <a class="header-anchor" href="#javascript基础" aria-label="Permalink to &quot;JavaScript基础：&quot;">​</a></h3><ol><li><p>编写一个函数，接受一个字符串作为参数，并返回该字符串的反转形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function reverse(str){</span></span>
<span class="line"><span>    let result = &#39;&#39;</span></span>
<span class="line"><span>    for(let index in str){</span></span>
<span class="line"><span>        result = result + str(index)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function reverseString(str){</span></span>
<span class="line"><span>    return str.split(&#39;&#39;).reverse().join(&#39;&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><h3 id="dom操作" tabindex="-1">DOM操作： <a class="header-anchor" href="#dom操作" aria-label="Permalink to &quot;DOM操作：&quot;">​</a></h3><p>1.使用JavaScript创建一个新的&lt;div&gt;元素，并将其添加到页面中的某个位置。</p><pre><code>\`\`\`
const tar = document.createElement(&#39;div&#39;)
const body = docuent.querySelector(&#39;body&#39;)
body.appendchild(tar)
\`\`\`
</code></pre><h3 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h3><ol><li><p>解释网页加载速度的影响因素，并提供一些优化建议。</p><pre><code> 服务器响应事件、文件大小、资源请求数量、页面渲染、事件回流。
 压缩资源，合并文件，优化图像，减少http请求
</code></pre></li><li><p>解释懒加载（Lazy Loading）的概念，并说明它如何提升页面性能。</p><pre><code> 懒加载是☞渲染时只加载可视区域的文件、当用户滚动时再加载可见区域的文件。
</code></pre></li></ol><h3 id="其他" tabindex="-1">其他： <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他：&quot;">​</a></h3><ol><li><p>解释前端路由（Frontend Routing）的概念，并说明它与传统后端路由的区别。</p><pre><code> 前端路由通过javascript控制页面跳转，不需要向服务器请求界面，速度更快。常见的事hash和history路由。hash通过浏览器的 onHashChange事件实现，history通过xxx实现，hash模式带#，history会引起请求变化，部署时需要特殊配置。
</code></pre></li><li><p>解释什么是跨域请求（Cross-Origin Request），以及如何解决跨域请求的问题。</p><pre><code> 跨越是由于同源策略导致，发送请求时目标资源与当前界面不是同协议，域名，端口会引发同源策略。可以使用代理，中间层，jsonp,后端配置，iframe解决跨域。1. 执行一下程序，输出结果为？
</code></pre></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var x = 10;</span></span>
<span class="line"><span>var y = 20;</span></span>
<span class="line"><span>var z = x &lt; y ? x++:++y;</span></span>
<span class="line"><span>console.log(&#39;x=&#39;+x+&#39;;y=&#39;+y+&#39;;z=&#39;+z);</span></span></code></pre></div><pre><code>x=11, y=20, z=10
</code></pre><ol start="2"><li><p>typeof Date.now() 的值是：</p><p>number</p></li><li><p>一下代码的输出结果是？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj = {};</span></span>
<span class="line"><span>obj.log = console.log;</span></span>
<span class="line"><span>obj.log.call(console,this);</span></span></code></pre></div><pre><code>windows
</code></pre><ol start="4"><li>已知arr = [1,2,NaN,1,4,2,NaN]，现为输出arr的不重复元素（重复元素只输出一次），则下列程序中的①处，可以作为判断条件的是（）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var newArr = [];</span></span>
<span class="line"><span>for(var i = 0 ;i&lt;arr.length;i++){</span></span>
<span class="line"><span>  if(①){</span></span>
<span class="line"><span>    newArr.push(arr[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.log(newArr);</span></span></code></pre></div><pre><code>!newArr.includes(arr[i])
indexOf不能判断NaN
</code></pre><ol start="5"><li>如下代码片段的运行结果是</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var obj ={a:1,b:function () {alert(this.a)}}; </span></span>
<span class="line"><span>var fun =obj.b; </span></span>
<span class="line"><span>fun()</span></span></code></pre></div><pre><code>undifined 
</code></pre><ol start="6"><li>请问以下JS代码会输出什么</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var a = 10; </span></span>
<span class="line"><span>(function a() {</span></span>
<span class="line"><span>    a = 20;</span></span>
<span class="line"><span>    console.log(a); </span></span>
<span class="line"><span>})()</span></span></code></pre></div><pre><code>函数a的具体内容
</code></pre><ol start="7"><li>以下代码的执行后，str 的值是：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var str = &quot;Hellllo world&quot;;</span></span>
<span class="line"><span>str = str.replace(/(a)\\1/g, &#39;$1&#39;);</span></span></code></pre></div><pre><code>hello world
Hello world
</code></pre><ol start="8"><li>以下代码的运行结果是：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var bb = 1;</span></span>
<span class="line"><span>function aa(bb) {</span></span>
<span class="line"><span>    bb = 2;</span></span>
<span class="line"><span>    alert(bb);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>aa(bb);</span></span>
<span class="line"><span>alert(bb);</span></span></code></pre></div><pre><code>2,1
</code></pre><ol start="9"><li>请问以下JS代码最后输出的len值是多少？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var len = 117;</span></span>
<span class="line"><span>let func = {</span></span>
<span class="line"><span>  len: 935,</span></span>
<span class="line"><span>  showLen: function() {</span></span>
<span class="line"><span>    console.log(this.len);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  show: function() {</span></span>
<span class="line"><span>    (function(cb) {</span></span>
<span class="line"><span>      cb();</span></span>
<span class="line"><span>    })(this.showLen)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func.show();</span></span></code></pre></div><pre><code>117
</code></pre><ol start="10"><li>以下JavaScript 代码，在浏览器中运行的结果是</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var foo = {n:1};</span></span>
<span class="line"><span>(function(foo){</span></span>
<span class="line"><span>    console.log(foo.n);</span></span>
<span class="line"><span>    foo.n = 3;</span></span>
<span class="line"><span>    var foo = {n:2};</span></span>
<span class="line"><span>    console.log(foo.n);</span></span>
<span class="line"><span>})(foo);</span></span>
<span class="line"><span>console.log(foo.n);</span></span></code></pre></div><p>1 2 3 11. 一下哪些操作会造成回流？</p><pre><code>var obj = document.getElementById(“test”);
A alert(obj.className)
B alert(obj.offsetHeight)
C obj.style.height = “100px”
D obj.style.color = “red”

B C  （offset和scroll会需要计算“相对位置”），所以会造成回流
</code></pre><ol start="12"><li><p>代码var foo = “10”+3-“1”;console.log(foo);执行后，foo的值为</p><pre><code>102
</code></pre></li><li><p>以下程序输出结果为？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function Person(age){</span></span>
<span class="line"><span>       this.age = age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Person.prototype = {</span></span>
<span class="line"><span>       constructor:Person,</span></span>
<span class="line"><span>       getAge:function(){</span></span>
<span class="line"><span>            console.log(this.age);</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>var ldh = new Person(24);</span></span>
<span class="line"><span>Person.prototype.age = 18;</span></span>
<span class="line"><span>Object.prototype.age = 20;</span></span>
<span class="line"><span>ldh.getAge();</span></span></code></pre></div><pre><code>20 X
24
</code></pre><ol start="14"><li>下列代码的输出结果为</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function fn(value){</span></span>
<span class="line"><span>console.log(arguments instanceof Array);</span></span>
<span class="line"><span>console.log(arguments.length);</span></span>
<span class="line"><span>console.log(value);</span></span>
<span class="line"><span>var arr = [...arguments];</span></span>
<span class="line"><span>console.log(arr instanceof Array);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn(1,2,3);</span></span></code></pre></div><p>false 3 1 15. 下面代码会输出什么？</p><pre><code>[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;].map(parseInt)

[1,NaN,NaN]
parseInt接受两个参数，value,redix。以上代码相当于：
parseInt(&#39;1&#39;, 0, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
parseInt(&#39;2&#39;, 1, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
parseInt(&#39;3&#39;, 2, [&#39;1&#39;,&#39;2&#39;,&#39;3&#39;])
1，redis的取值为2——36 所以返回nan,3不是二进制数 返回nan
</code></pre><ol start="16"><li><p>如何阻止IE和各大浏览器默认行为?</p><p>windos.event.returnValue = false; enevt.preventDefault();</p></li><li><p>执行以下程序，下列选项中，说法正确的是（）</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Dog{</span></span>
<span class="line"><span>  static dog(){</span></span>
<span class="line"><span>    console.log(this); // ①</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  bark(){</span></span>
<span class="line"><span>    console.log(&#39;狗会叫&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var dog = new Dog();</span></span></code></pre></div><pre><code>A：①式的this指代类的实例对象
B：调用dog方法，既可以使用Dog.dog()，也可以使用dog.dog()
C：调用bark方法，只能使用dog.bark()，不能使用Dog.bark()
D：在类中，不允许静态方法和非静态方法重名

c
静态方法的this只能指向类
静态方法不能由实例对象调用
可以重名
</code></pre><ol start="18"><li>执行以下程序，输出结果为？<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var uname = &quot;window&quot;;</span></span>
<span class="line"><span>var object = {</span></span>
<span class="line"><span>            uname :&quot;object&quot;,</span></span>
<span class="line"><span>            fun:function(){</span></span>
<span class="line"><span>                console.log(this.uname);</span></span>
<span class="line"><span>                return function(){</span></span>
<span class="line"><span>                console.log(this.uname);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>object.fun()();</span></span></code></pre></div>object windos object.func()()相当于 var fn = object.func();fn()</li><li>执行一下代码，五秒后的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for(var i = 0; i &lt; 5; i++){</span></span>
<span class="line"><span>    setTimeout(function(){</span></span>
<span class="line"><span>        console.log(i);</span></span>
<span class="line"><span>    }, 1000 * i);</span></span>
<span class="line"><span>}</span></span></code></pre></div><pre><code>55555
</code></pre><ol start="20"><li><p>对于代码 var a = 10.42; 取出 a 的整数部分，以下代码哪些是正确的？ A：parseInt(a); B：Math.floor(a); C：Math.ceil(a); D：a.split(‘.’)[0];</p><pre><code>A,B
split操作的只能是string,reg
</code></pre></li><li><p>执行以下程序，输出结果为？</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class Phone{</span></span>
<span class="line"><span>  constructor(price){</span></span>
<span class="line"><span>    this.price = price;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  get price(){</span></span>
<span class="line"><span>    return 999;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var p = new Phone(888);</span></span>
<span class="line"><span>console.log(p.price);</span></span></code></pre></div><pre><code>抛出异常，只有get(),没有set()时会发生异常
</code></pre><ol start="22"><li><p>以下不属于 typeof 运算符返回值的是？ A. &quot;string&quot; B. &quot;function&quot; C. &quot;object&quot; D. &quot;null&quot;</p><p>D</p></li><li><p>执行以下代码，错误的输出结果是 A. 输入：typeof {&quot;x&quot;:1} 输出：&quot;object&quot; B. 输入：typeof 1 输出：&quot;number&quot; C. 输入：typeof [{x:1}] 输出：&quot;array&quot; D. 输入：typeof NaN 输出：&quot;number&quot;</p><p>C</p></li><li><p>可以用typeof来判断的基本类型有 A. undefined B. null C. array D. object</p><p>A</p></li><li><p>以下不属于JavaScript基本数据类型的是： A. Boolean B. undefined C. Symbol D. Array</p><p>D</p></li><li><p>以下关于JavaScript中数据类型的说法错误的是() A. 数据类型分为基本数据类型和引用数据类型 B. JavaScript一共有8种数据类型 C. Object是引用数据类型，且只存储于堆(heap)中 D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中</p><p>B X c</p></li><li><p>请选择结果为ture的表达式？ A. null instanceof Object B. null === undefined C. null == undefined D. NaN == NaN</p><p>C</p></li><li><p>下列代码结果为 true 的是？ A. Symbol.for(&#39;a&#39;) === Symbol.for(&#39;a&#39;) B. Symbol(&#39;a&#39;) === Symbol(&#39;a&#39;) C. NaN === NaN D. {} === {}</p><p>D X A</p></li><li><p>根据如下变量，下列表达式中返回值为true的是 var a = 1; var b = []; var c = &#39;&#39;; var d = true; A. (a || b) === true B. (b &amp;&amp; c) === true C. (c &amp;&amp; d) === true D. (d || a) === true</p><p>D</p></li><li><p>1==true的返回值是true，这句话是否正确？ A. T B. F</p><p>A</p></li><li><p>下面代码输出为true的是? A. console.log([] === []); B. console.log(undefined == 0); C. console.log(undefined == false); D. console.log(false == &#39;&#39;);</p><p>B X D</p></li><li><p>浏览器环境下，以下打印结果为true的是 A. console.log(&quot;12&quot; === 12) B. console.log (NaN === NaN) C. console.log (typeof(null) === typeof(window)) D. console.log ([1,2,3] === [1,2,3])</p><p>C</p></li><li><p>以下表达式，正确的是 A. Number(&#39;a&#39;) == Number(&#39;a&#39;) B. -1 == true C. 3 + &#39;2&#39; === 5 D. ![] == &#39;&#39;</p><p>B D</p></li><li><p>下列程序的输出结果是多少？你能理清楚test函数的this指向吗？ var a = 5; function test() { a = 0; alert(a); alert(this.a); var a; alert(a); } new test();</p><p>0 undefined 0</p></li><li><p>下面代码的输出结果是</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var out = 25,</span></span>
<span class="line"><span>   inner = {</span></span>
<span class="line"><span>        out: 20,</span></span>
<span class="line"><span>        func: function () {</span></span>
<span class="line"><span>            var out = 30;</span></span>
<span class="line"><span>            return this.out;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>console.log((inner.func, inner.func)());</span></span>
<span class="line"><span>console.log(inner.func());</span></span>
<span class="line"><span>console.log((inner.func)());</span></span>
<span class="line"><span>console.log((inner.func = inner.func)());</span></span></code></pre></div><ol start="37"><li>下面程序的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if (!(&quot;a&quot; in window)) {</span></span>
<span class="line"><span>    var a = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><ol start="38"><li>下面程序的输出结果是？</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var a = 1;</span></span>
<span class="line"><span>var b = function a(x) {</span></span>
<span class="line"><span>  x &amp;&amp; a(--x);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>alert(a);</span></span></code></pre></div><h3 id="ai-1" tabindex="-1">AI： <a class="header-anchor" href="#ai-1" aria-label="Permalink to &quot;AI：&quot;">​</a></h3><p>1.创建一个基本的HTML页面结构，包括&lt;head&gt;和&lt;body&gt;部分。</p><pre><code>&lt;!DOTYPE HTML&gt;
&lt;html&gt;
    &lt;head&gt;&lt;/head&gt;
    &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>2.使用CSS实现一个简单的布局，例如两列布局或者居中布局。</p><pre><code>.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</code></pre><h3 id="javascript基础-1" tabindex="-1">JavaScript基础： <a class="header-anchor" href="#javascript基础-1" aria-label="Permalink to &quot;JavaScript基础：&quot;">​</a></h3><ol><li><p>编写一个函数，接受一个字符串作为参数，并返回该字符串的反转形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function reverse(str){</span></span>
<span class="line"><span>    let result = &#39;&#39;</span></span>
<span class="line"><span>    for(let index in str){</span></span>
<span class="line"><span>        result = result + str(index)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function reverseString(str){</span></span>
<span class="line"><span>    return str.split(&#39;&#39;).reverse().join(&#39;&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ol><h3 id="dom操作-1" tabindex="-1">DOM操作： <a class="header-anchor" href="#dom操作-1" aria-label="Permalink to &quot;DOM操作：&quot;">​</a></h3><p>1.使用JavaScript创建一个新的&lt;div&gt;元素，并将其添加到页面中的某个位置。</p><pre><code>\`\`\`
const tar = document.createElement(&#39;div&#39;)
const body = docuent.querySelector(&#39;body&#39;)
body.appendchild(tar)
\`\`\`
</code></pre><h3 id="优化-1" tabindex="-1">优化 <a class="header-anchor" href="#优化-1" aria-label="Permalink to &quot;优化&quot;">​</a></h3><ol><li><p>解释网页加载速度的影响因素，并提供一些优化建议。</p><pre><code> 服务器响应事件、文件大小、资源请求数量、页面渲染、事件回流。
 压缩资源，合并文件，优化图像，减少http请求
</code></pre></li><li><p>解释懒加载（Lazy Loading）的概念，并说明它如何提升页面性能。</p><pre><code> 懒加载是☞渲染时只加载可视区域的文件、当用户滚动时再加载可见区域的文件。
</code></pre></li></ol><h3 id="其他-1" tabindex="-1">其他： <a class="header-anchor" href="#其他-1" aria-label="Permalink to &quot;其他：&quot;">​</a></h3><ol><li><p>解释前端路由（Frontend Routing）的概念，并说明它与传统后端路由的区别。</p><pre><code> 前端路由通过javascript控制页面跳转，不需要向服务器请求界面，速度更快。常见的事hash和history路由。hash通过浏览器的 onHashChange事件实现，history通过xxx实现，hash模式带#，history会引起请求变化，部署时需要特殊配置。
</code></pre></li><li><p>解释什么是跨域请求（Cross-Origin Request），以及如何解决跨域请求的问题。</p><pre><code> 跨越是由于同源策略导致，发送请求时目标资源与当前界面不是同协议，域名，端口会引发同源策略。可以使用代理，中间层，jsonp,后端配置，iframe解决跨域。
</code></pre></li></ol>`,127),i=[l];function t(o,c,r,d,u,h){return a(),s("div",null,i)}const v=n(e,[["render",t]]);export{b as __pageData,v as default};
