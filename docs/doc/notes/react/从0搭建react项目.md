##  从0搭建react项目

1. 使用npm install -g create-react-app命令全局安装react脚手架。

2. 创建项目`npx create-react-app my-app `
   ts： `npx create-react-app my-app --template typescript`

3. 文件作用
    - manifest.json：Web 应用程序清单，在 JSON 文本文件中提供有关应用程序的信息（例如名称、作者、图标和描述）。清单的目的是将 Web 应用程序安装到设备的主屏幕上，为用户提供更快的访问和更丰富的体验。

    - robots.txt：告诉搜索引擎抓取工具（蜘蛛）禁止或允许抓取网站的哪些内容。主流搜索引擎（包括 Google、Bing 和 Yahoo）都能够识别并尊重 Robots.txt的要求。


    - App.test.tsx：可以通过@testing-library/react等测试库，jTest自动化测试。


    - reportWebVitals.ts：通过web-vitals获取当前项目网页的性能指标：
    1. LCP (Largest Contentful Paint)：最大内容渲染时间；
    2. FID (First Input Delay):首次输入延迟；
    3. CLS (Cumulative Layout Shift) :累计布局偏移；4.FCP(First Contentful Paint)首次内容绘制；
    
    - setupTests.ts：用于编写此项目测试代码，可直接删除。

    - react-app-env.d.ts：类型声明文件，告诉编译器在编译过程中要引入的额外的文件。如果引入某些文件未能成功找到时，在这里添加对应类型可能得到解决
4. 配置ts
    tsconfig.json
``` javascript
{
  "compilerOptions": {
    "baseUrl": "./", // 路径配置
    "paths": {
      "@": ["src"],
      "@/*": ["src/*"]
    },
    "target": "es5", // 指定 ECMAScript 版本
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ], // 要包含在编译中的依赖库文件列表
    "allowJs": true, // 允许编译 JavaScript 文件
    "skipLibCheck": true, // 跳过所有声明文件的类型检查
    "esModuleInterop": true, // 禁用命名空间引用 (import * as fs from "fs") 启用 CJS/AMD/UMD 风格引用 (import fs from "fs")
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块进行默认导入
    "strict": true, // 启用所有严格类型检查选项
    "forceConsistentCasingInFileNames": true, //	禁止对同一个文件的不一致的引用。
    "noFallthroughCasesInSwitch": true, // 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）
    "module": "esnext", // 指定模块代码生成
    "moduleResolution": "node", // 使用 Node.js 风格解析模块
    "resolveJsonModule": true, // 允许使用 .json 扩展名导入的模块
    "isolatedModules": true, // 将每个文件作为单独的模块
    "noEmit": false, // 不输出(意思是不编译代码，只执行类型检查)
    "jsx": "react-jsx",
    "noUnusedLocals": true, // 报告未使用的本地变量的错误
    "noUnusedParameters": false, // 报告未使用参数的错误
    "experimentalDecorators": true, // 启用对ES装饰器的实验性支持
  },
  "include": [
    "src" // TypeScript文件应该进行类型检查
  ],
  "exclude": ["node_modules", "build"] // 不进行类型检查的文件
}
```
5. 配置prettier
    用来代码格式化检查，使用`npm i -D prettier`命令安装prettier，声明.prettierignore和.prettierrc.js两个文件，前者表示忽略不需要去检查的目录，后者定义prettier的规则。具体的规则可以参考[<<Prettier文档>>](https://prettier.io/docs/en/options.html)

    - 文件 .prettierignore：
    ```
    Ignore artifacts:
    node_modules
    dist
    .prettierignore
    ```

    - 文件 .prettierrc.js：
    ```
    module.exports = {
    printWidth: 120, // 指定编译器换行的行长
    tabWidth: 2, // 指定每个缩进空格数
    semi: true, // 在语句的末尾输入分号
    singleQuote: true, // 使用单引号而不是双引号
    trailingComma: 'none', // 在多行逗号分隔的句法结构中尽可能输入尾随逗号
    bracketSpacing: true, // 在对象字面量中的括号之间输入空格
    jsxBracketSameLine: true, // 将多行 JSX 元素的 > 放在最后一行的末尾，而不是单独放在下一行
    arrowParens: 'always', // 在唯一的箭头函数参数周围包含括号
    useTabs: false, // 使用制表符而不是空格缩进行
    ignorePath: '.prettierignore',
    };
    ```
6. styleLint
    