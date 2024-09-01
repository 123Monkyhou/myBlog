###  1.创建项目
    pnpm create vite 
    pnpm i
    pnpm run dev
###  2.修改vite.config.ts文件
   1.将@映射为src
   
     resolve:{
        alias:{
            "@":path.resolve("src")
        }
     }
   2.配置打包路径
       
      base:"./"
   3.设置启动端口，自动打开浏览器，代理，跨域
       
      server:{
          port:"8080",
          open:true,
          cors:true,
          proxy:{
              "api":{
                  target:"",
                  changeOrgin:"true",
                  scure:false,
                  rewrite:(path) =>path.replace('/api/', '/')
              }
          }
      }
###  3.配置eslint
   根据ast进行检测，统一代码风格
    
    安装：pnpm i eslint -D  
    初始化配置：npx eslint --init
    初始化后会生成eslintrc.js配置文件
    {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
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
    parser: 'vue-eslint-parser',
    /** 优先级低于 parse 的语法解析配置 */
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
      jsxPragma: 'React',
      ecmaFeatures: {
        jsx: true,
      },
    },
    /* 继承已有的规则 */
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    /*
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    rules: {
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符
  
      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off',
  
      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    },
    }
    vscode下载eslint插件
   
#  配置prettier
   代码格式化工具，中文官网：https://prettier.nodejs.cn/docs/en/index.html

    安装：pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
    解决eslint和prettier冲突：
    eslint-plugin-prettier：将prittier的配置引入eslint
    eslint-config-prettier：关闭eslint中与prittier冲突的设置
    配置prittierrc.js：
        {
          "singleQuote": true, //使用单引号
          "semi": false,  //结尾加分号
          "bracketSpacing": true, //对象大括号之间的空格
          "htmlWhitespaceSensitivity": "ignore", 
          "endOfLine": "auto", //结束行
          "trailingComma": "all", //尾随逗号
          "tabWidth": 2, //
          "useTabs": false, //使用tab进行缩进
          "printWidth": 100 //打印行宽度
        }
        
    在 `.eslintrc.js` 添加 prettier 插件  
        module.exports = {   
            extends: [  
            'plugin:vue/essential',  
            'airbnb-base',  
            'plugin:prettier/recommended' // 添加 prettier 插件  
            ],  
        }
        
     用配置文件格式化代码格式化：npx prettier --write .
     vscode下载prettier插件

#  配置styleLint
    pnpm add 
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

###  配置husky
    pnpm install -D husky   
    npx husky --init

###  配置commit

###  配置scss
    新建styles文件夹:
    └── styles
        ├── reset.scss       // 初始化全局样式
        ├── index.scss       // 通用类库目录
        ├── variable.scss    // 存放全局变量
        
    main.js引入样式:
    import '@/styles/index.scss'
    修改vite.config.js,配置全局scss变量
    css:{
        preprocessorOptions:{
            scss:{
                javascriptEnabled:"",
                additionalData:"@import './src/styles/variable.scss';"
            }
        }
    }
#  统一包管理工具

###  封装api文件
    import request from '@/utils/request.ts'
    export const reqLogin = (data:loginForm)=>{
            req.post(url,data){
                
            }
        }