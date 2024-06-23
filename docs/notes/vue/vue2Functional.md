  背景：之前业务中需要根据后台返回的json静态展示数据，当时感觉简单就用v-for,v-if做了一个。后来发现了functional这个东西，很符合当时的业务。
  
  官网对functional的介绍：https://v2.cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6
    
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de63ea1c999043e59edd6ccad0202cbd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1451&h=977&s=147465&e=png&b=fafafa)
    
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93e320ef4c94fcdb53e1c629f5eb564~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1527&h=535&s=64834&e=png&b=ffffff)
# 一.  应用场景：
   业务中纯静态显示的组件，不需要交互。只通过props获取数据。
   例如：我们接收到json后，展示数据。

   json内容：
    
```js
[
    {
        type:"input",
        text:"18：00"
    },
    {
        type:"text",
        text:"67度23分"
    },
    {
        type:"button",
        text:"获取位置"
    }
]
```
   显示效果：
       
# 二. 实现方法
   
    在export default中添加funtional，或者在template标签中添加functional属性。
   
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc87f98dcbed41ec959f8893d07508ee~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=785&h=249&s=26759&e=png&b=1f1f1f)
   
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eacc87d39bf54653ba428e4bfe0fde04~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=503&h=177&s=8269&e=png&b=f8f8f8)
    
   完整代码：
```js
<script>
    export default{
        functional,
        props:['collectData'],
        render:(props,{slot})=>{
            return ()=>h(
            'div',{id:"collectParseWrapper"},
            props.collectData.map((item,index)=>{
            let textTemp
            let propTemp = {}
            switch (item.type) {
                case 'button':
                textTemp = 'button'
                    break;
                default:
                    break;
            }
            return h('div',{},[h('div',`${index+1}. title`),
                                    h(item.type,{},textTemp),
                                        h('span','descri')])
        })
        )
        }
    }
</script>
```
   
   组件使用：
   
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db33e886b58647c5b8bb18d668303a73~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1247&h=61&s=16161&e=png&b=202020)
       
 注：vue3中没有functional, 因为vue3使用了setup

    
