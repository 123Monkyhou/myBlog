import{_ as e,c as a,o,a1 as t}from"./chunks/framework.D13AgEzC.js";const y=JSON.parse('{"title":"生成安卓证书过程","description":"","frontmatter":{},"headers":[],"relativePath":"notes/uniapp/生成安卓证书.md","filePath":"notes/uniapp/生成安卓证书.md"}'),s={name:"notes/uniapp/生成安卓证书.md"},r=t(`<h1 id="生成安卓证书过程" tabindex="-1">生成安卓证书过程 <a class="header-anchor" href="#生成安卓证书过程" aria-label="Permalink to &quot;生成安卓证书过程&quot;">​</a></h1><h2 id="下载java8" tabindex="-1">下载java8 <a class="header-anchor" href="#下载java8" aria-label="Permalink to &quot;下载java8&quot;">​</a></h2><pre><code>地址：https://www.oracle.com/java/technologies/downloads/#java8
</code></pre><h2 id="命令行执行以下命令" tabindex="-1">命令行执行以下命令 <a class="header-anchor" href="#命令行执行以下命令" aria-label="Permalink to &quot;命令行执行以下命令&quot;">​</a></h2><ol><li><p>将jre命令添加到临时环境变量中 (配置了全局变量可忽略这一步)</p><p><code>set PATH=%PATH%;&quot;C:\\Program Files\\Java\\jdk-17.0.1\\bin&quot;</code></p></li><li><p>使用keytool生成证书信息</p><p><code>keytool -genkeypair -alias testkey -keyalg RSA -keypass keypassword -keystore test.keystore -storepass keystorypassword</code></p><pre><code> 说明：
 -alias：密钥的别名
 -keyalg：使用的hash算法
 -keypass：密钥的访问密码
 -keystore：密钥库文件名，xc.keystore保存了生成的证书
 -storepass：密钥库的访问密码
</code></pre></li><li><p>查看证书信息 <code>keytool -list -keystore test.keystore</code></p></li></ol>`,5),n=[r];function i(l,c,p,d,_,h){return o(),a("div",null,n)}const u=e(s,[["render",i]]);export{y as __pageData,u as default};
