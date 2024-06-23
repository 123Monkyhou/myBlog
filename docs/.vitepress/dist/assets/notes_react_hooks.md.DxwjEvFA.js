import{_ as s,c as n,o as a,a1 as p}from"./chunks/framework.D13AgEzC.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notes/react/hooks.md","filePath":"notes/react/hooks.md"}'),e={name:"notes/react/hooks.md"},t=p(`<h3 id="hooks使用" tabindex="-1">hooks使用 <a class="header-anchor" href="#hooks使用" aria-label="Permalink to &quot;hooks使用&quot;">​</a></h3><ol><li><p>useStete description:react Hook，用来向组件添加状态变量，从而控制组建的渲染结果。我理解就是手动档的v-model use: const [count,setCount] = useState(0) ps: 数组的结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const [a, b, c] = [1, 2, 3];</span></span>
<span class="line"><span>log a    // 1</span></span>
<span class="line"><span>const { name, age } = { name: &#39;Alice&#39;, age: 25 };</span></span>
<span class="line"><span>log name // Alice</span></span></code></pre></div><p>rule:状态被认为是只读的，直接修改状态不能引发视图更新。应该替换而不是修改。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>error:视图不会更新</span></span>
<span class="line"><span> const handleClick = () =&gt; {</span></span>
<span class="line"><span>    count++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>correct:</span></span>
<span class="line"><span>const handleClick = () =&gt; {</span></span>
<span class="line"><span>    setCount(count + 1)</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>useRef description:获取dom元素 use: <code> &lt;input ref={inputRef}/&gt; const inputRef = useRef(null) console.log(inputRef.current) //获取到dom元素 </code> ps:和vue3类似</p></li><li><p>useEffect description:用于创建不是由事件引起，而是渲染本身引起的操作</p><p>use: useEffect(()={},[]) // 参数1：副作用函数</p><table tabindex="0"><thead><tr><th>依赖项</th><th>副作用函数的执行时机</th></tr></thead><tbody><tr><td>无</td><td>组件初始渲染+组件更新</td></tr><tr><td>空数组</td><td>初始渲染</td></tr><tr><td>特定依赖项</td><td>初始+特性依赖项变化时</td></tr></tbody></table><p>ps：类似vue的生命周期 清除副作用： use: <code> useEffect(()=&gt;{ // 实现副作用的逻辑 return ()=&gt;{ // 清除副作用的逻辑 } },[]) // 1.卸载后清除定时器 useEffect(()=&gt;{ const timer = setInterval(()=&gt;{console.log(&#39;11&#39;)}) return ()=&gt;{ clearInterval(timer) } },[]) </code> ps:如果副作用函数是一个定时器，则需要执行后卸载掉。这个过程就叫清除副作用</p></li><li><p>useReducer</p></li><li><p>自定义hooks description: 以use打头的函数，通过自定义hook函数实现逻辑的封装和复用 使用规则：只能在组件函数内，并且顶层使用，不能嵌套在if,for,其他函数中 use:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function useToggle() {</span></span>
<span class="line"><span>const [val, setval] = useState(true)</span></span>
<span class="line"><span>function toggle() {</span></span>
<span class="line"><span>    setval(!val)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        val,</span></span>
<span class="line"><span>        toggle</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>const {val,toggle} = useToggle()</span></span>
<span class="line"><span>return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>        &lt;button onClick={toggle}&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span>        {val &amp;&amp;  &lt;div&gt;show&lt;/div&gt;}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>ps:类似于compisitonsApi</p></li><li><p>redux description:集中管理状态工具 ps: vuex use:</p><p>redux:</p><ol><li>定义一个reducer函数</li><li>使用createStore方法出入reducer函数，生成一个store实例对象</li><li>使用store实例的subscribe方法订阅数据的变化</li><li>使用store的dispitch方法提交action对象 触发数据变化</li><li>使用store实例的getstate方法 获取最新的状态更新至视图 对比 vuex:</li><li>创建store对象</li><li>store中包含</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    // 1</span></span>
<span class="line"><span>    function(state={count:0},action){</span></span>
<span class="line"><span>        if(action.type === &#39;INCEMENT&#39;){</span></span>
<span class="line"><span>            return {count:state.count+1}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if(action.type === &#39;DECEMENT&#39;){</span></span>
<span class="line"><span>            return {count: state.count -1}</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return state</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 2</span></span>
<span class="line"><span>    const store = Redux.createStore(reducer)</span></span>
<span class="line"><span>    // 3</span></span>
<span class="line"><span>    store.subscribe(()=&gt;{</span></span>
<span class="line"><span>        console.log(&#39;state变化了&#39;)</span></span>
<span class="line"><span>        //5 </span></span>
<span class="line"><span>        console.log(&#39;count=&#39;+store.getState())</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    // 4</span></span>
<span class="line"><span>    const Btn = document.queryselector(button)</span></span>
<span class="line"><span>    store.dispitch({</span></span>
<span class="line"><span>        type:&quot;INCEMENT&quot;</span></span>
<span class="line"><span>    })</span></span></code></pre></div><pre><code> 生态：react-reducer + toolkit
 1. redux传参
 2. 操作异步
</code></pre></li></ol>`,2),l=[t];function i(c,o,r,d,u,g){return a(),n("div",null,l)}const b=s(e,[["render",i]]);export{v as __pageData,b as default};
