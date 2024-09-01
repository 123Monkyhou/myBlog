### 简介：
    - 用来管理java项目
    - 导入所有依赖包
    - 配置：
        localRespository  mirror profile
        
### 构建过程：
    场景：1.重新编译 2.打包 3.部署
    mvn clean   清理
    mvn compile 编译项目、生成target问价夹
    mvn test    执行测试源码
    mvn site    生成项目依赖信息展示界面
    mvn package 打包
    mvn install 打包后上传到mvn本地仓库
    mvn deploy  打包后上传到maven私服仓库