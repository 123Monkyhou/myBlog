###### 内容为Webpack深入浅出这本书的笔记，非原创。

优化分为两个方面，优化开发体验、优化代码输出质量。
*    开发体验：构建速度和开发使用体验。
*    输出质量：首屏加载速度，流畅度等等。
# 缩小文件的搜索范围

## 1.优化Loader配置
*    webpack启动后会从Entry出发，解析导入语句，再递归解析，找到文件，调用对应的loader解析。
*    使用loader时,可以通过test、include、exclude这三个配置项配置loader要应用规则的文件。
    
```js
      module.exports = {
          module:{
              rules:[
                  {
                   test:/\.js$/, //如果文件中没有jsx则不要写成/\.jsx?$/
                   use:[],
                   include:path.resolve(__dirname,'src')
                  }
              ]
          }
      }
```
    
## 2.配置Resolve.modules
    该项用于配置Webpack去哪里寻找第三方模块。
    如果我们所有的依赖都在根目录下的node_module，则直接配置路径，避免多余的查找步骤。
    ` 
       module.exports = {
           resolve:{
               modules:[path.resolve{__dirname,'node_modules'}]
           }
       }
    `
/**
    Resolve模块：配置Webpack从哪里寻找对应的文件。

    
*/


## 3.优化resolve.mainFileds配置

*   该项用于配置第三方模块使用的入口文件。有一些第三方模块会根据不同的环境提供几份代码。
*   以fetch为例，浏览器中通过原生或xhr实现，在node中通过http模块实现。它的package.json中有两个入口文件描述。
*   有关package.json内容的解析，见https://blog.csdn.net/qq_34703156/article/details/121401990   
*   
   package.json的配置：
   `
       {
           browser:"fetch-npm-browserify.js",
           main:"retch-npm-node.js"
       }
   `
   如果我们明确要使用的入口文件，则做以下配置：
   `
   module:{
      resolve:{
          mainFields:[main]
      }
   }
   `
   

## 4.优化resolve.alias配置
   * alias参数:用于映射，将配置的名称映射成路径地址。   
 `
    resolve:{
    alias:{
      compomemts:'./src/components'
    }
  }
` 
 * 以React为例，React库又dist和lib两个文件夹，dist中是打包压缩后的代码，lib中是以commonJs规范的模块化代码。默认情况下会以reac.js为入口解析代码，解析的过程是一个很耗时的操作。
 * 我们可以配置resolve.alais,直接使用React.main.js
   `
       module:{
         resolve:{
             alias:{
                 'reac':'path.resolve(__dirname,'./node_module/react/dist/react.min.js')'
             }
         }
       }
   `
   
  /**
  使用该配置会影响到tree-Sharking,如果引入的库我们只使用了其中很少一部分函数，不建议使用该方法，例如loadsh。
  */
  
## 5.优化resolve.extensions配置
   * 用于匹配未写明后缀名的路径。比如require('./src/main'),未写明main.js，但仍能匹配到。
   * exytnsions默认为['.js','.json']
   * 配置时遵守以下几点
   
       1、后缀列表尽可能小
       
       2、编写源码时尽可能带上后缀
       
       3、频率出现最高的后缀放在最前面。
       

## 6.优化module.noparse
  *  module.noparse可以让Webpack忽略对部分没有采取模块化的代码进行文件递归处理。 
  *  有一些庞大且未采用模块的库，如jquery,chartjs等，Webpack解析这些文件既耗时，又没有意义。
    
`
    module:{
        noparse:[/\react\.mian\.js$/]
    }
`


# DullPlugin
*    Windows系统中以.dell为后缀的文件为动态链接库，动态连接库中包含为其他函数所调用的函数和数据。
*    
    
    
# HappyPack
    webpack构建的流程是文件读写和计算密集型操作，文件特别多时Webpack构建慢的问题会特别严重，所以引入HappyPack,将任务分解给多个线程去执行。
    
# ParalleUglifyPlugin

#  自动刷新

# HMR

# 区分环境

# 压缩代码

# cdn加速

# TreeShaking

# 提取公共代码

# 分割代码以按需加载 
# prepack

# ScoprHoising 
# 输出分析

# 总结

