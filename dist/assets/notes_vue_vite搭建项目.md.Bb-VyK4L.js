import{_ as e,c as t,o as n,a1 as s}from"./chunks/framework.D13AgEzC.js";const m=JSON.parse('{"title":"配置prettier","description":"","frontmatter":{},"headers":[],"relativePath":"notes/vue/vite搭建项目.md","filePath":"notes/vue/vite搭建项目.md"}'),r={name:"notes/vue/vite搭建项目.md"},o=s(`<h3 id="_1-创建项目" tabindex="-1">1.创建项目 <a class="header-anchor" href="#_1-创建项目" aria-label="Permalink to &quot;1.创建项目&quot;">​</a></h3><pre><code>pnpm create vite 
pnpm i
pnpm run dev
</code></pre><h3 id="_2-修改vite-config-ts文件" tabindex="-1">2.修改vite.config.ts文件 <a class="header-anchor" href="#_2-修改vite-config-ts文件" aria-label="Permalink to &quot;2.修改vite.config.ts文件&quot;">​</a></h3><p>1.将@映射为src</p><pre><code> resolve:{
    alias:{
        &quot;@&quot;:path.resolve(&quot;src&quot;)
    }
 }
</code></pre><p>2.配置打包路径</p><pre><code>  base:&quot;./&quot;
</code></pre><p>3.设置启动端口，自动打开浏览器，代理，跨域</p><pre><code>  server:{
      port:&quot;8080&quot;,
      open:true,
      cors:true,
      proxy:{
          &quot;api&quot;:{
              target:&quot;&quot;,
              changeOrgin:&quot;true&quot;,
              scure:false,
              rewrite:(path) =&gt;path.replace(&#39;/api/&#39;, &#39;/&#39;)
          }
      }
  }
</code></pre><h3 id="_3-配置eslint" tabindex="-1">3.配置eslint <a class="header-anchor" href="#_3-配置eslint" aria-label="Permalink to &quot;3.配置eslint&quot;">​</a></h3><p>根据ast进行检测，统一代码风格</p><pre><code>安装：pnpm i eslint -D  
初始化配置：npx eslint --init
初始化后会生成eslintrc.js配置文件
{
&quot;env&quot;: {
    &quot;browser&quot;: true,
    &quot;es2021&quot;: true
},
&quot;extends&quot;: [
    &quot;eslint:recommended&quot;,
    &quot;plugin:@typescript-eslint/recommended&quot;,
    &quot;plugin:vue/vue3-essential&quot;
],
&quot;overrides&quot;: [
    {
        &quot;env&quot;: {
            &quot;node&quot;: true
        },
        &quot;files&quot;: [
            &quot;.eslintrc.{js,cjs}&quot;
        ],
        &quot;parserOptions&quot;: {
            &quot;sourceType&quot;: &quot;script&quot;
        }
    }
],
&quot;parserOptions&quot;: {
    &quot;ecmaVersion&quot;: &quot;latest&quot;,
    &quot;parser&quot;: &quot;@typescript-eslint/parser&quot;,
    &quot;sourceType&quot;: &quot;module&quot;
},
&quot;plugins&quot;: [
    &quot;@typescript-eslint&quot;,
    &quot;vue&quot;
],
&quot;rules&quot;: {
}
}
对配置文件进行修改：
module.exports = {
env: {
  browser: true,
  es2021: true,
  node: true,
  jest: true,
},
/* 指定如何解析语法 */
parser: &#39;vue-eslint-parser&#39;,
/** 优先级低于 parse 的语法解析配置 */
parserOptions: {
  ecmaVersion: &#39;latest&#39;,
  sourceType: &#39;module&#39;,
  parser: &#39;@typescript-eslint/parser&#39;,
  jsxPragma: &#39;React&#39;,
  ecmaFeatures: {
    jsx: true,
  },
},
/* 继承已有的规则 */
extends: [
  &#39;eslint:recommended&#39;,
  &#39;plugin:vue/vue3-essential&#39;,
  &#39;plugin:@typescript-eslint/recommended&#39;,
  &#39;plugin:prettier/recommended&#39;,
],
plugins: [&#39;vue&#39;, &#39;@typescript-eslint&#39;],
/*
 * &quot;off&quot; 或 0    ==&gt;  关闭规则
 * &quot;warn&quot; 或 1   ==&gt;  打开的规则作为警告（不影响代码执行）
 * &quot;error&quot; 或 2  ==&gt;  规则作为一个错误（代码不能执行，界面报错）
 */
rules: {
  // eslint（https://eslint.bootcss.com/docs/rules/）
  &#39;no-var&#39;: &#39;error&#39;, // 要求使用 let 或 const 而不是 var
  &#39;no-multiple-empty-lines&#39;: [&#39;warn&#39;, { max: 1 }], // 不允许多个空行
  &#39;no-console&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
  &#39;no-debugger&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,
  &#39;no-unexpected-multiline&#39;: &#39;error&#39;, // 禁止空余的多行
  &#39;no-useless-escape&#39;: &#39;off&#39;, // 禁止不必要的转义字符

  // typeScript (https://typescript-eslint.io/rules)
  &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;, // 禁止定义未使用的变量
  &#39;@typescript-eslint/prefer-ts-expect-error&#39;: &#39;error&#39;, // 禁止使用 @ts-ignore
  &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;, // 禁止使用 any 类型
  &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,
  &#39;@typescript-eslint/no-namespace&#39;: &#39;off&#39;, // 禁止使用自定义 TypeScript 模块和命名空间。
  &#39;@typescript-eslint/semi&#39;: &#39;off&#39;,

  // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
  &#39;vue/multi-word-component-names&#39;: &#39;off&#39;, // 要求组件名称始终为 “-” 链接的单词
  &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;, // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用
  &#39;vue/no-mutating-props&#39;: &#39;off&#39;, // 不允许组件 prop的改变
  &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;, // 对模板中的自定义组件强制执行属性命名样式
},
}
vscode下载eslint插件
</code></pre><h1 id="配置prettier" tabindex="-1">配置prettier <a class="header-anchor" href="#配置prettier" aria-label="Permalink to &quot;配置prettier&quot;">​</a></h1><p>代码格式化工具，中文官网：<a href="https://prettier.nodejs.cn/docs/en/index.html" target="_blank" rel="noreferrer">https://prettier.nodejs.cn/docs/en/index.html</a></p><pre><code>安装：pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
解决eslint和prettier冲突：
eslint-plugin-prettier：将prittier的配置引入eslint
eslint-config-prettier：关闭eslint中与prittier冲突的设置
配置prittierrc.js：
    {
      &quot;singleQuote&quot;: true, //使用单引号
      &quot;semi&quot;: false,  //结尾加分号
      &quot;bracketSpacing&quot;: true, //对象大括号之间的空格
      &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;, 
      &quot;endOfLine&quot;: &quot;auto&quot;, //结束行
      &quot;trailingComma&quot;: &quot;all&quot;, //尾随逗号
      &quot;tabWidth&quot;: 2, //
      &quot;useTabs&quot;: false, //使用tab进行缩进
      &quot;printWidth&quot;: 100 //打印行宽度
    }
    
在 \`.eslintrc.js\` 添加 prettier 插件  
    module.exports = {   
        extends: [  
        &#39;plugin:vue/essential&#39;,  
        &#39;airbnb-base&#39;,  
        &#39;plugin:prettier/recommended&#39; // 添加 prettier 插件  
        ],  
    }
    
 用配置文件格式化代码格式化：npx prettier --write .
 vscode下载prettier插件
</code></pre><h1 id="配置stylelint" tabindex="-1">配置styleLint <a class="header-anchor" href="#配置stylelint" aria-label="Permalink to &quot;配置styleLint&quot;">​</a></h1><pre><code>pnpm add 
sass 
sass-loader 
stylelint 
postcss 
postcss-scss 
postcss-html 
stylelint-config-prettier 
stylelint-config-recess-order 
stylelint-config-recommended-scss 
stylelint-config-standard 
stylelint-config-standard-vue 
stylelint-scss 
stylelint-order 
stylelint-config-standard-scss 
-D
</code></pre><h3 id="配置husky" tabindex="-1">配置husky <a class="header-anchor" href="#配置husky" aria-label="Permalink to &quot;配置husky&quot;">​</a></h3><pre><code>pnpm install -D husky   
npx husky --init
</code></pre><h3 id="配置commit" tabindex="-1">配置commit <a class="header-anchor" href="#配置commit" aria-label="Permalink to &quot;配置commit&quot;">​</a></h3><h3 id="配置scss" tabindex="-1">配置scss <a class="header-anchor" href="#配置scss" aria-label="Permalink to &quot;配置scss&quot;">​</a></h3><pre><code>新建styles文件夹:
└── styles
    ├── reset.scss       // 初始化全局样式
    ├── index.scss       // 通用类库目录
    ├── variable.scss    // 存放全局变量
    
main.js引入样式:
import &#39;@/styles/index.scss&#39;
修改vite.config.js,配置全局scss变量
css:{
    preprocessorOptions:{
        scss:{
            javascriptEnabled:&quot;&quot;,
            additionalData:&quot;@import &#39;./src/styles/variable.scss&#39;;&quot;
        }
    }
}
</code></pre><h1 id="统一包管理工具" tabindex="-1">统一包管理工具 <a class="header-anchor" href="#统一包管理工具" aria-label="Permalink to &quot;统一包管理工具&quot;">​</a></h1><h3 id="封装api文件" tabindex="-1">封装api文件 <a class="header-anchor" href="#封装api文件" aria-label="Permalink to &quot;封装api文件&quot;">​</a></h3><pre><code>import request from &#39;@/utils/request.ts&#39;
export const reqLogin = (data:loginForm)=&gt;{
        req.post(url,data){
            
        }
    }
</code></pre>`,25),i=[o];function a(u,p,l,c,d,q){return n(),t("div",null,i)}const f=e(r,[["render",a]]);export{m as __pageData,f as default};
