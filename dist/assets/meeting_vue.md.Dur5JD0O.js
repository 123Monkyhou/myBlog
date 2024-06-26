import{_ as e,c as n,o as a,a1 as t}from"./chunks/framework.D13AgEzC.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"meeting/vue.md","filePath":"meeting/vue.md"}'),o={name:"meeting/vue.md"},d=t(`<h4 id="vue2和3的区别" tabindex="-1">Vue2和3的区别 <a class="header-anchor" href="#vue2和3的区别" aria-label="Permalink to &quot;Vue2和3的区别&quot;">​</a></h4><p>1.optionsAPI和compisitionApi: vue2通过定义data,methods等组织代码，vue3把逻辑放在一个函数里。 逻辑复用，vue2使用mixin()实现逻辑复用，compisition 2.Vue3的diff增加了静态标记，被静态标记的节点不会继续diff Vue3静态提升，静态节点会被提取出来，不会重复渲染。 事件监听缓存 SSR优化</p><h4 id="如何实现一个自定义指令" tabindex="-1">如何实现一个自定义指令 <a class="header-anchor" href="#如何实现一个自定义指令" aria-label="Permalink to &quot;如何实现一个自定义指令&quot;">​</a></h4><pre><code>                vue2:
                    bind --- 当指令绑定在元素时触发
                    insert --- 当对应元素被插入到Dom时触发
                    update --- 当元素更新时触发
                    componentUpdated --- 整个元素更新完成后触发
                    unbind --- 指令从元素上移除时触发
                vue3:
                    beforeMount === bind
                    Mounted   === inserted
                    beforedUpdated 新钩子，在元素更新前触发  
                    \\\\updated === 移除
                    componentUpdated === update
                    beforeOnMounted 新钩子，当元素自身被移除时触发
                    unMounted === unbind  
</code></pre><h4 id="vue父子生命周期渲染顺序" tabindex="-1">vue父子生命周期渲染顺序 <a class="header-anchor" href="#vue父子生命周期渲染顺序" aria-label="Permalink to &quot;vue父子生命周期渲染顺序&quot;">​</a></h4><pre><code>             加载过程：父先执行到beforeMounted,子执行到mounted,父执行到mounted
             子组件更新过程：父子子父 beforeUpdate beforeUpdate update update
             销毁过程:父子子父
</code></pre><h4 id="vue2响应式原理" tabindex="-1">vue2响应式原理 <a class="header-anchor" href="#vue2响应式原理" aria-label="Permalink to &quot;vue2响应式原理&quot;">​</a></h4><pre><code>通过数据劫持和订阅发布实现，在oberve阶段会实例化一个数据主题，同时通过object.defineProperty实现数据劫持，compiler阶段会实例化wachter，并将wathcer放到dep.target上，此阶段会触发get，get中收集依赖。
</code></pre><p>3.HTML5或者css3的新特性 这个问题虽然不是100%问到，但是绝大多数公司都问了，我就放入这个分类吧，你不会有意见吧（有意见我也不会听啊）</p><p>你有用到哪些新标签 新特性主要包括哪几大块？你项目中有用到哪些？ canvas有用过吗</p><h4 id="vue2和3的diff算法" tabindex="-1">vue2和3的diff算法 <a class="header-anchor" href="#vue2和3的diff算法" aria-label="Permalink to &quot;vue2和3的diff算法&quot;">​</a></h4><pre><code>              vue2采用双端diff算法：
                    采用深度优先，同层比较的策略。采用双端策略，从两遍向中间收拢。
                    通过 新前旧前 新后旧后 新后旧前 新前旧后 暴力对比 五种方式实现。对比节点是否相同是通过 isSameVnode 方法，对比node标签和key。
                        此五种方式按顺序进行对比。
                    新前旧前：
                        最先使用新前旧前进行对比，如果一致则指针向后位移动。 如果不一致则使用下一种方式。
                    新后旧后：
                        第二步使用新后旧后对比，若一致则指针向前移动，如果不一致则使用下一种方式。
                    新后旧前：
                        第三步使用新后旧前对比，
                    新前旧后：

                    暴力对比：

              vue3采用快速diff算法：
                    1.预处理前置节点
                    2.预处理后置节点
                    3.处理仅有新增节点
                    4.处理仅有卸载节点
                    5.处理其他情况

              不同之处：
                vue2使用的是双端比较法，vue3使用的是去头尾的最长递增子序列法(普遍使用动态规划，vue使用了贪心+二分)
                vue3的diff通过 贪心+二分法实现了去头尾最长递增子序列(n*log(n))
                    贪心（n）：
                    二分法(logn)：
                    动态规划：一般用来解决最优解问题。 回溯:一般用来
</code></pre><h3 id="v-model的原理" tabindex="-1">v-model的原理： <a class="header-anchor" href="#v-model的原理" aria-label="Permalink to &quot;v-model的原理：&quot;">​</a></h3>`,13),r=[d];function i(u,c,p,s,l,f){return a(),n("div",null,r)}const m=e(o,[["render",i]]);export{v as __pageData,m as default};
