1. 执行一下程序，输出结果为？
```
var x = 10;
var y = 20;
var z = x < y ? x++:++y;
console.log('x='+x+';y='+y+';z='+z);
```
    x=11, y=20, z=10

2. typeof Date.now() 的值是：

    number 

3. 一下代码的输出结果是？
```
var obj = {};
obj.log = console.log;
obj.log.call(console,this);
```
    windows
4. 已知arr = [1,2,NaN,1,4,2,NaN]，现为输出arr的不重复元素（重复元素只输出一次），则下列程序中的①处，可以作为判断条件的是（）
```
var newArr = [];
for(var i = 0 ;i<arr.length;i++){
  if(①){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
```

    !newArr.includes(arr[i])
    indexOf不能判断NaN
5. 如下代码片段的运行结果是
```
var obj ={a:1,b:function () {alert(this.a)}}; 
var fun =obj.b; 
fun()
```
    undifined 
6. 请问以下JS代码会输出什么
```
var a = 10; 
(function a() {
    a = 20;
    console.log(a); 
})()
```
    函数a的具体内容
7. 以下代码的执行后，str 的值是：
```
var str = "Hellllo world";
str = str.replace(/(a)\1/g, '$1');
```
    hello world
    Hello world
8. 以下代码的运行结果是：
```
var bb = 1;
function aa(bb) {
    bb = 2;
    alert(bb);
};
aa(bb);
alert(bb);
```
    2,1
9. 请问以下JS代码最后输出的len值是多少？
```
var len = 117;
let func = {
  len: 935,
  showLen: function() {
    console.log(this.len);
  },
  show: function() {
    (function(cb) {
      cb();
    })(this.showLen)
  }
}
func.show();
```
    117
10. 以下JavaScript 代码，在浏览器中运行的结果是
```
var foo = {n:1};
(function(foo){
    console.log(foo.n);
    foo.n = 3;
    var foo = {n:2};
    console.log(foo.n);
})(foo);
console.log(foo.n);
```
1 2 3
11. 一下哪些操作会造成回流？

    var obj = document.getElementById(“test”);
    A alert(obj.className)
    B alert(obj.offsetHeight)
    C obj.style.height = “100px”
    D obj.style.color = “red”

    B C  （offset和scroll会需要计算“相对位置”），所以会造成回流
12. 代码var foo = “10”+3-“1”;console.log(foo);执行后，foo的值为
        
        102
13. 以下程序输出结果为？
```
function Person(age){
       this.age = age;
 }

Person.prototype = {
       constructor:Person,
       getAge:function(){
            console.log(this.age);
        },
 }
var ldh = new Person(24);
Person.prototype.age = 18;
Object.prototype.age = 20;
ldh.getAge();
```
    20 X
    24
14. 下列代码的输出结果为
```
function fn(value){
console.log(arguments instanceof Array);
console.log(arguments.length);
console.log(value);
var arr = [...arguments];
console.log(arr instanceof Array);
}
fn(1,2,3);
```
false 3 1
15. 下面代码会输出什么？

    ["1","2","3"].map(parseInt)

    [1,NaN,NaN]
    parseInt接受两个参数，value,redix。以上代码相当于：
    parseInt('1', 0, ['1','2','3'])
    parseInt('2', 1, ['1','2','3'])
    parseInt('3', 2, ['1','2','3'])
    1，redis的取值为2——36 所以返回nan,3不是二进制数 返回nan

16. 如何阻止IE和各大浏览器默认行为?

    windos.event.returnValue = false;
    enevt.preventDefault();

17. 执行以下程序，下列选项中，说法正确的是（）
```
class Dog{
  static dog(){
    console.log(this); // ①
    }
  bark(){
    console.log('狗会叫');
    }
}
var dog = new Dog();
```
    A：①式的this指代类的实例对象
    B：调用dog方法，既可以使用Dog.dog()，也可以使用dog.dog()
    C：调用bark方法，只能使用dog.bark()，不能使用Dog.bark()
    D：在类中，不允许静态方法和非静态方法重名

    c
    静态方法的this只能指向类
    静态方法不能由实例对象调用
    可以重名
18. 执行以下程序，输出结果为？
    ```
    var uname = "window";
    var object = {
                uname :"object",
                fun:function(){
                    console.log(this.uname);
                    return function(){
                    console.log(this.uname);
                    }
                }
    }
    object.fun()();
    ```
    object windos
    object.func()()相当于 var fn = object.func();fn()
19. 执行一下代码，五秒后的输出结果是？
```
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000 * i);
}
```
    55555
20. 对于代码 var a = 10.42; 取出 a 的整数部分，以下代码哪些是正确的？
        A：parseInt(a);
        B：Math.floor(a);
        C：Math.ceil(a);
        D：a.split(‘.’)[0];

        A,B
        split操作的只能是string,reg
21. 执行以下程序，输出结果为？
```
class Phone{
  constructor(price){
    this.price = price;
  }
  get price(){
    return 999;
  }
}
var p = new Phone(888);
console.log(p.price);
```
    抛出异常，只有get(),没有set()时会发生异常
22. 以下不属于 typeof 运算符返回值的是？
    A. "string"
    B. "function"
    C. "object"
    D. "null"

    D
23. 执行以下代码，错误的输出结果是
    A. 输入：typeof {"x":1} 输出："object" 
    B. 输入：typeof 1 输出："number" 
    C. 输入：typeof [{x:1}] 输出："array" 
    D. 输入：typeof NaN 输出："number"

    C
24. 可以用typeof来判断的基本类型有
    A. undefined
    B. null
    C. array
    D. object

    A
25. 以下不属于JavaScript基本数据类型的是：
    A. Boolean
    B. undefined
    C. Symbol
    D. Array

    D
26. 以下关于JavaScript中数据类型的说法错误的是()
    A. 数据类型分为基本数据类型和引用数据类型
    B. JavaScript一共有8种数据类型
    C. Object是引用数据类型，且只存储于堆(heap)中
    D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中

    B X    c

27. 请选择结果为ture的表达式？
    A. null instanceof Object
    B. null === undefined
    C. null == undefined
    D. NaN == NaN

    C
28. 下列代码结果为 true 的是？
    A. Symbol.for('a') === Symbol.for('a')
    B. Symbol('a') === Symbol('a')
    C. NaN === NaN
    D. {} === {}

    D X  A
29. 根据如下变量，下列表达式中返回值为true的是
    var a = 1;
    var b = [];
    var c = '';
    var d = true;
    A. (a || b) === true
    B. (b && c) === true
    C. (c && d) === true
    D. (d || a) === true

    D
30. 1==true的返回值是true，这句话是否正确？
    A. T
    B. F

    A
32. 下面代码输出为true的是?
    A. console.log([] === []);
    B. console.log(undefined == 0);
    C. console.log(undefined == false);
    D. console.log(false == '');

    B X  D
33. 浏览器环境下，以下打印结果为true的是
    A. console.log("12" === 12) 
    B. console.log (NaN === NaN) 
    C. console.log (typeof(null) === typeof(window))
    D. console.log ([1,2,3] === [1,2,3])

    C
34. 以下表达式，正确的是
    A. Number('a') == Number('a')
    B. -1 == true
    C. 3 + '2' === 5
    D. ![] == ''

    B D

35. 下列程序的输出结果是多少？你能理清楚test函数的this指向吗？
    var a = 5;
    function test() { 
        a = 0; 
        alert(a); 
        alert(this.a); 
        var a;
        alert(a); 
    }
    new test();

    0 undefined 0

36. 下面代码的输出结果是
```
var out = 25,
   inner = {
        out: 20,
        func: function () {
            var out = 30;
            return this.out;
        }
    };
console.log((inner.func, inner.func)());
console.log(inner.func());
console.log((inner.func)());
console.log((inner.func = inner.func)());
```
37. 下面程序的输出结果是？
```
if (!("a" in window)) {
    var a = 1;
}
alert(a);
```
38. 下面程序的输出结果是？
```
var a = 1;
var b = function a(x) {
  x && a(--x);
};
alert(a);
```
### AI：
1.创建一个基本的HTML页面结构，包括\<head>和\<body>部分。

    <!DOTYPE HTML>
    <html>
        <head></head>
        <body></body>
    </html>

2.使用CSS实现一个简单的布局，例如两列布局或者居中布局。

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

### JavaScript基础：
1. 编写一个函数，接受一个字符串作为参数，并返回该字符串的反转形式。

    ```
    function reverse(str){
        let result = ''
        for(let index in str){
            result = result + str(index)
        }
        return result
    }

    function reverseString(str){
        return str.split('').reverse().join('')
    }
    ```

### DOM操作：
1.使用JavaScript创建一个新的\<div>元素，并将其添加到页面中的某个位置。

    ```
    const tar = document.createElement('div')
    const body = docuent.querySelector('body')
    body.appendchild(tar)
    ```
### 优化
1. 解释网页加载速度的影响因素，并提供一些优化建议。

        服务器响应事件、文件大小、资源请求数量、页面渲染、事件回流。
        压缩资源，合并文件，优化图像，减少http请求
2. 解释懒加载（Lazy Loading）的概念，并说明它如何提升页面性能。

        懒加载是☞渲染时只加载可视区域的文件、当用户滚动时再加载可见区域的文件。
### 其他：
1. 解释前端路由（Frontend Routing）的概念，并说明它与传统后端路由的区别。

        前端路由通过javascript控制页面跳转，不需要向服务器请求界面，速度更快。常见的事hash和history路由。hash通过浏览器的 onHashChange事件实现，history通过xxx实现，hash模式带#，history会引起请求变化，部署时需要特殊配置。
2. 解释什么是跨域请求（Cross-Origin Request），以及如何解决跨域请求的问题。

        跨越是由于同源策略导致，发送请求时目标资源与当前界面不是同协议，域名，端口会引发同源策略。可以使用代理，中间层，jsonp,后端配置，iframe解决跨域。1. 执行一下程序，输出结果为？
```
var x = 10;
var y = 20;
var z = x < y ? x++:++y;
console.log('x='+x+';y='+y+';z='+z);
```
    x=11, y=20, z=10

2. typeof Date.now() 的值是：

    number 

3. 一下代码的输出结果是？
```
var obj = {};
obj.log = console.log;
obj.log.call(console,this);
```
    windows
4. 已知arr = [1,2,NaN,1,4,2,NaN]，现为输出arr的不重复元素（重复元素只输出一次），则下列程序中的①处，可以作为判断条件的是（）
```
var newArr = [];
for(var i = 0 ;i<arr.length;i++){
  if(①){
    newArr.push(arr[i]);
  }
}
console.log(newArr);
```

    !newArr.includes(arr[i])
    indexOf不能判断NaN
5. 如下代码片段的运行结果是
```
var obj ={a:1,b:function () {alert(this.a)}}; 
var fun =obj.b; 
fun()
```
    undifined 
6. 请问以下JS代码会输出什么
```
var a = 10; 
(function a() {
    a = 20;
    console.log(a); 
})()
```
    函数a的具体内容
7. 以下代码的执行后，str 的值是：
```
var str = "Hellllo world";
str = str.replace(/(a)\1/g, '$1');
```
    hello world
    Hello world
8. 以下代码的运行结果是：
```
var bb = 1;
function aa(bb) {
    bb = 2;
    alert(bb);
};
aa(bb);
alert(bb);
```
    2,1
9. 请问以下JS代码最后输出的len值是多少？
```
var len = 117;
let func = {
  len: 935,
  showLen: function() {
    console.log(this.len);
  },
  show: function() {
    (function(cb) {
      cb();
    })(this.showLen)
  }
}
func.show();
```
    117
10. 以下JavaScript 代码，在浏览器中运行的结果是
```
var foo = {n:1};
(function(foo){
    console.log(foo.n);
    foo.n = 3;
    var foo = {n:2};
    console.log(foo.n);
})(foo);
console.log(foo.n);
```
1 2 3
11. 一下哪些操作会造成回流？

    var obj = document.getElementById(“test”);
    A alert(obj.className)
    B alert(obj.offsetHeight)
    C obj.style.height = “100px”
    D obj.style.color = “red”

    B C  （offset和scroll会需要计算“相对位置”），所以会造成回流
12. 代码var foo = “10”+3-“1”;console.log(foo);执行后，foo的值为
        
        102
13. 以下程序输出结果为？
```
function Person(age){
       this.age = age;
 }

Person.prototype = {
       constructor:Person,
       getAge:function(){
            console.log(this.age);
        },
 }
var ldh = new Person(24);
Person.prototype.age = 18;
Object.prototype.age = 20;
ldh.getAge();
```
    20 X
    24
14. 下列代码的输出结果为
```
function fn(value){
console.log(arguments instanceof Array);
console.log(arguments.length);
console.log(value);
var arr = [...arguments];
console.log(arr instanceof Array);
}
fn(1,2,3);
```
false 3 1
15. 下面代码会输出什么？

    ["1","2","3"].map(parseInt)

    [1,NaN,NaN]
    parseInt接受两个参数，value,redix。以上代码相当于：
    parseInt('1', 0, ['1','2','3'])
    parseInt('2', 1, ['1','2','3'])
    parseInt('3', 2, ['1','2','3'])
    1，redis的取值为2——36 所以返回nan,3不是二进制数 返回nan

16. 如何阻止IE和各大浏览器默认行为?

    windos.event.returnValue = false;
    enevt.preventDefault();

17. 执行以下程序，下列选项中，说法正确的是（）
```
class Dog{
  static dog(){
    console.log(this); // ①
    }
  bark(){
    console.log('狗会叫');
    }
}
var dog = new Dog();
```
    A：①式的this指代类的实例对象
    B：调用dog方法，既可以使用Dog.dog()，也可以使用dog.dog()
    C：调用bark方法，只能使用dog.bark()，不能使用Dog.bark()
    D：在类中，不允许静态方法和非静态方法重名

    c
    静态方法的this只能指向类
    静态方法不能由实例对象调用
    可以重名
18. 执行以下程序，输出结果为？
    ```
    var uname = "window";
    var object = {
                uname :"object",
                fun:function(){
                    console.log(this.uname);
                    return function(){
                    console.log(this.uname);
                    }
                }
    }
    object.fun()();
    ```
    object windos
    object.func()()相当于 var fn = object.func();fn()
19. 执行一下代码，五秒后的输出结果是？
```
for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000 * i);
}
```
    55555
20. 对于代码 var a = 10.42; 取出 a 的整数部分，以下代码哪些是正确的？
        A：parseInt(a);
        B：Math.floor(a);
        C：Math.ceil(a);
        D：a.split(‘.’)[0];

        A,B
        split操作的只能是string,reg
21. 执行以下程序，输出结果为？
```
class Phone{
  constructor(price){
    this.price = price;
  }
  get price(){
    return 999;
  }
}
var p = new Phone(888);
console.log(p.price);
```
    抛出异常，只有get(),没有set()时会发生异常
22. 以下不属于 typeof 运算符返回值的是？
    A. "string"
    B. "function"
    C. "object"
    D. "null"

    D
23. 执行以下代码，错误的输出结果是
    A. 输入：typeof {"x":1} 输出："object" 
    B. 输入：typeof 1 输出："number" 
    C. 输入：typeof [{x:1}] 输出："array" 
    D. 输入：typeof NaN 输出："number"

    C
24. 可以用typeof来判断的基本类型有
    A. undefined
    B. null
    C. array
    D. object

    A
25. 以下不属于JavaScript基本数据类型的是：
    A. Boolean
    B. undefined
    C. Symbol
    D. Array

    D
26. 以下关于JavaScript中数据类型的说法错误的是()
    A. 数据类型分为基本数据类型和引用数据类型
    B. JavaScript一共有8种数据类型
    C. Object是引用数据类型，且只存储于堆(heap)中
    D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中

    B X    c

27. 请选择结果为ture的表达式？
    A. null instanceof Object
    B. null === undefined
    C. null == undefined
    D. NaN == NaN

    C
28. 下列代码结果为 true 的是？
    A. Symbol.for('a') === Symbol.for('a')
    B. Symbol('a') === Symbol('a')
    C. NaN === NaN
    D. {} === {}

    D X  A
29. 根据如下变量，下列表达式中返回值为true的是
    var a = 1;
    var b = [];
    var c = '';
    var d = true;
    A. (a || b) === true
    B. (b && c) === true
    C. (c && d) === true
    D. (d || a) === true

    D
30. 1==true的返回值是true，这句话是否正确？
    A. T
    B. F

    A
32. 下面代码输出为true的是?
    A. console.log([] === []);
    B. console.log(undefined == 0);
    C. console.log(undefined == false);
    D. console.log(false == '');

    B X  D
33. 浏览器环境下，以下打印结果为true的是
    A. console.log("12" === 12) 
    B. console.log (NaN === NaN) 
    C. console.log (typeof(null) === typeof(window))
    D. console.log ([1,2,3] === [1,2,3])

    C
34. 以下表达式，正确的是
    A. Number('a') == Number('a')
    B. -1 == true
    C. 3 + '2' === 5
    D. ![] == ''

    B D

35. 下列程序的输出结果是多少？你能理清楚test函数的this指向吗？
    var a = 5;
    function test() { 
        a = 0; 
        alert(a); 
        alert(this.a); 
        var a;
        alert(a); 
    }
    new test();

    0 undefined 0

36. 下面代码的输出结果是
```
var out = 25,
   inner = {
        out: 20,
        func: function () {
            var out = 30;
            return this.out;
        }
    };
console.log((inner.func, inner.func)());
console.log(inner.func());
console.log((inner.func)());
console.log((inner.func = inner.func)());
```
37. 下面程序的输出结果是？
```
if (!("a" in window)) {
    var a = 1;
}
alert(a);
```
38. 下面程序的输出结果是？
```
var a = 1;
var b = function a(x) {
  x && a(--x);
};
alert(a);
```
### AI：
1.创建一个基本的HTML页面结构，包括\<head>和\<body>部分。

    <!DOTYPE HTML>
    <html>
        <head></head>
        <body></body>
    </html>

2.使用CSS实现一个简单的布局，例如两列布局或者居中布局。

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

### JavaScript基础：
1. 编写一个函数，接受一个字符串作为参数，并返回该字符串的反转形式。

    ```
    function reverse(str){
        let result = ''
        for(let index in str){
            result = result + str(index)
        }
        return result
    }

    function reverseString(str){
        return str.split('').reverse().join('')
    }
    ```

### DOM操作：
1.使用JavaScript创建一个新的\<div>元素，并将其添加到页面中的某个位置。

    ```
    const tar = document.createElement('div')
    const body = docuent.querySelector('body')
    body.appendchild(tar)
    ```
### 优化
1. 解释网页加载速度的影响因素，并提供一些优化建议。

        服务器响应事件、文件大小、资源请求数量、页面渲染、事件回流。
        压缩资源，合并文件，优化图像，减少http请求
2. 解释懒加载（Lazy Loading）的概念，并说明它如何提升页面性能。

        懒加载是☞渲染时只加载可视区域的文件、当用户滚动时再加载可见区域的文件。
### 其他：
1. 解释前端路由（Frontend Routing）的概念，并说明它与传统后端路由的区别。

        前端路由通过javascript控制页面跳转，不需要向服务器请求界面，速度更快。常见的事hash和history路由。hash通过浏览器的 onHashChange事件实现，history通过xxx实现，hash模式带#，history会引起请求变化，部署时需要特殊配置。
2. 解释什么是跨域请求（Cross-Origin Request），以及如何解决跨域请求的问题。

        跨越是由于同源策略导致，发送请求时目标资源与当前界面不是同协议，域名，端口会引发同源策略。可以使用代理，中间层，jsonp,后端配置，iframe解决跨域。