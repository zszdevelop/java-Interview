

# SpringMVC请求流程

![image-20190730230853942](https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190730230853942.png)

1. DispatcherServlet

   SpringMVC 所有请求都会通过一个单例的DispatcherServlet,**委托给其他组件（controller）来执行实际的处理**

2. 处理器映射

   **背景：**

   - DispatcherServlet的任务就是将请求发送给Spring MVC控制器（controller）

   - 应用程序可能存在多个控制器

   **具体步骤**

   DispatcherServlet会查询一个或多个处理器映射（handler mapping）来确定下一站在哪里，处理器会根据携带的url信息来进行决策

3. 控制器（controller）

   **背景**

   - 一旦选择了合适的控制器，DispatcherServlet会将请求发送给选中的控制器。

   **具体步骤**

   1. 到了控制器，请求会卸下其负载（用户提交的信息）

   2. **耐心等待控制器处理这些信息**

   实际上，设计良好的控制器本身只处理很少甚至不处理工作，而是将业务逻辑委托给一个或多个服务对象进行处理

4. 模型及逻辑视图名

   **背景**

   控制器完成逻辑处理后，通常会产生一些信息，这些信息**需要返回给用户并在浏览器上**显示，这些信息被称为model。

   返回可能是model ,也可能HTML，发送一个视图（view）通常是JSP

   **具体步骤**

   模型数据打包，并标示出用于渲染输出的视图名，接下来会将请求连同**模型和视图名**发送回DispatcherServlet

5. 视图解析器

   **背景**

   控制器返回的是视图名，而不是视图。因为返回视图名这只是一个逻辑名，通过这个名字来查找真正的视图，这样控制器就不会与特定的视图耦合在一起了

   **具体步骤**

   DispathcherServlet将会使用视图解析器（view resolver）来将逻辑视图名匹配一个特定的视图实现。不一定是JSP

6. 视图

   **背景**

   DispatcherServlet已经知道由哪个视图渲染结果，请求的任务基本完成

   **具体步骤**

   视图将使用模型数据渲染输出，

7. 响应

   视图解析渲染后的输出，会通过响应对象传递给客户端

  

   

   


