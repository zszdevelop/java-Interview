(window.webpackJsonp=window.webpackJsonp||[]).push([[1065],{1441:function(a,t,e){"use strict";e.r(t);var s=e(26),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"线程池的具体实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池的具体实现原理"}},[a._v("#")]),a._v(" 线程池的具体实现原理")]),a._v(" "),e("p",[a._v("在上一节我们从宏观上介绍了ThreadPoolExecutor，下面我们来深入解析一下线程池的具体实现原理，将从下面几个方面讲解：")]),a._v(" "),e("p",[e("strong",[a._v("1.线程池状态")])]),a._v(" "),e("p",[e("strong",[a._v("2.任务的执行")])]),a._v(" "),e("p",[e("strong",[a._v("3.线程池中的线程初始化")])]),a._v(" "),e("p",[e("strong",[a._v("4.任务缓存队列及排队策略")])]),a._v(" "),e("p",[e("strong",[a._v("5.任务拒绝策略")])]),a._v(" "),e("p",[e("strong",[a._v("6.线程池的关闭")])]),a._v(" "),e("p",[e("strong",[a._v("7.线程池容量的动态调整")])]),a._v(" "),e("h2",{attrs:{id:"_1-线程池状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程池状态"}},[a._v("#")]),a._v(" 1. 线程池状态")]),a._v(" "),e("p",[a._v("在ThreadPoolExecutor中定义了一个volatile变量，另外定义了几个static final变量表示线程池的各个状态：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" runState"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" RUNNING    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" SHUTDOWN   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" STOP       "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" TERMINATED "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("runState表示当前线程池的状态，它是一个volatile变量用来保证线程之间的可见性；")]),a._v(" "),e("p",[a._v("下面的几个static final变量表示runState可能的几个取值。")]),a._v(" "),e("ul",[e("li",[a._v("当创建线程池后，初始时，线程池处于RUNNING状态；")]),a._v(" "),e("li",[a._v("如果调用了shutdown()方法，则线程池处于SHUTDOWN状态，"),e("strong",[a._v("此时线程池不能够接受新的任务，它会等待所有任务执行完毕")]),a._v("；")]),a._v(" "),e("li",[a._v("如果调用了shutdownNow()方法，则线程池处于STOP状态，"),e("strong",[a._v("此时线程池不能接受新的任务，并且会去尝试终止正在执行的任务")]),a._v("；")]),a._v(" "),e("li",[a._v("当线程池"),e("strong",[a._v("处于SHUTDOWN或STOP状态")]),a._v("，并且"),e("strong",[a._v("所有工作线程已经销毁")]),a._v("，"),e("strong",[a._v("任务缓存队列已经清空或执行结束后，线程池被设置为TERMINATED状态")]),a._v("。")])]),a._v(" "),e("h2",{attrs:{id:"_2-任务的执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-任务的执行"}},[a._v("#")]),a._v(" 2. 任务的执行")]),a._v(" "),e("p",[a._v("在了解将任务提交给线程池到任务执行完毕整个过程之前，我们先来看一下ThreadPoolExecutor类中其他的一些比较重要成员变量：")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BlockingQueue")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" workQueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//任务缓存队列，用来存放等待执行的任务")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReentrantLock")]),a._v(" mainLock "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ReentrantLock")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程池的主要状态锁，对线程池状态（比如线程池大小")]),a._v("\n                                                              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//、runState等）的改变都要使用这个锁")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" workers "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HashSet")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Worker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用来存放工作集")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v("  keepAliveTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程存货时间   ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" allowCoreThreadTimeOut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//是否允许为核心线程设置存活时间")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v("   corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//核心池的大小（即线程池中的线程数目大于这个参数时，提交的任务会被放进任务缓存队列）")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v("   maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程池最大能容忍的线程数")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v("   poolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程池中当前的线程数")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RejectedExecutionHandler")]),a._v(" handler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//任务拒绝策略")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadFactory")]),a._v(" threadFactory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//线程工厂，用来创建线程")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" largestPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用来记录线程池中曾经出现过的最大线程数")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" completedTaskCount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用来记录已经执行完毕的任务个数")]),a._v("\n")])])]),e("p",[a._v("每个变量的作用都已经标明出来了，这里要重点解释一下corePoolSize、maximumPoolSize、largestPoolSize三个变量。")]),a._v(" "),e("h3",{attrs:{id:"_2-1-线程池例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-线程池例子"}},[a._v("#")]),a._v(" 2.1 线程池例子")]),a._v(" "),e("p",[a._v("corePoolSize在很多地方被翻译成核心池大小，其实我的理解这个就是线程池的大小。举个简单的例子：")]),a._v(" "),e("p",[a._v("假如有一个工厂，工厂里面有10个工人，每个工人同时只能做一件任务。")]),a._v(" "),e("p",[a._v("因此只要当10个工人中有工人是空闲的，来了任务就分配给空闲的工人做；")]),a._v(" "),e("p",[a._v("当10个工人都有任务在做时，如果还来了任务，就把任务进行排队等待；")]),a._v(" "),e("p",[a._v("如果说新任务数目增长的速度远远大于工人做任务的速度，那么此时工厂主管可能会想补救措施，比如重新招4个临时工人进来；")]),a._v(" "),e("p",[a._v("然后就将任务也分配给这4个临时工人做；")]),a._v(" "),e("p",[a._v("如果说着14个工人做任务的速度还是不够，此时工厂主管可能就要考虑不再接收新的任务或者抛弃前面的一些任务了。")]),a._v(" "),e("p",[a._v("当这14个工人当中有人空闲时，而新任务增长的速度又比较缓慢，工厂主管可能就考虑辞掉4个临时工了，只保持原来的10个工人，毕竟请额外的工人是要花钱的。")]),a._v(" "),e("p",[a._v("这个例子中的corePoolSize就是10，而maximumPoolSize就是14（10+4）")]),a._v(" "),e("p",[a._v("也就是说corePoolSize就是线程池大小，maximumPoolSize在我看来是线程池的一种补救措施，即任务量突然过大时的一种补救措施。")]),a._v(" "),e("p",[a._v("不过为了方便理解，在本文后面还是将corePoolSize翻译成核心池大小。")]),a._v(" "),e("p",[a._v("largestPoolSize只是一个用来起记录作用的变量，用来记录线程池中曾经有过的最大线程数目，跟线程池的容量没有任何关系。")]),a._v(" "),e("h3",{attrs:{id:"_2-2-提交到最终执行完毕经历了哪些过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-提交到最终执行完毕经历了哪些过程"}},[a._v("#")]),a._v(" 2.2 提交到最终执行完毕经历了哪些过程")]),a._v(" "),e("p",[a._v("在ThreadPoolExecutor类中，"),e("strong",[a._v("最核心的任务提交方法是execute()方法")]),a._v("，虽然通过submit也可以提交任务，但是实际上submit方法里面最终调用的还是execute()方法，所以我们只需要研究execute()方法的实现原理即可：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("public void execute(Runnable command) {\n    if (command == null)\n        throw new NullPointerException();\n    if (poolSize >= corePoolSize || !addIfUnderCorePoolSize(command)) {\n        if (runState == RUNNING && workQueue.offer(command)) {\n            if (runState != RUNNING || poolSize == 0)\n                ensureQueuedTaskHandled(command);\n        }\n        else if (!addIfUnderMaximumPoolSize(command))\n            reject(command); // is shutdown or saturated\n    }\n}\n")])])]),e("p",[a._v("首先，判断提交的任务command是否为null，若是null，则抛出空指针异常；")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (poolSize >= corePoolSize || !addIfUnderCorePoolSize(command))\n")])])]),e("p",[a._v("由于是或条件运算符，所以先计算前半部分的值，如果线程池中当前线程数不小于核心池大小，那么就会直接进入下面的if语句块了。")]),a._v(" "),e("p",[a._v("如果线程池中当前线程数小于核心池大小，则接着执行后半部分，也就是执行")]),a._v(" "),e("p",[a._v("如果执行完addIfUnderCorePoolSize这个方法返回false，则继续执行下面的if语句块，否则整个方法就直接执行完毕了。")]),a._v(" "),e("p",[a._v("如果执行完addIfUnderCorePoolSize这个方法返回false，然后接着判断：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`if` `(runState == RUNNING && workQueue.offer(command))`\n")])])]),e("p",[a._v("如果当前线程池处于RUNNING状态，则将任务放入任务缓存队列；如果当前线程池不处于RUNNING状态或者任务放入缓存队列失败，则执行：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`addIfUnderMaximumPoolSize(command)`\n")])])]),e("p",[a._v("如果执行addIfUnderMaximumPoolSize方法失败，则执行reject()方法进行任务拒绝处理。")]),a._v(" "),e("p",[a._v("回到前面：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`if` `(runState == RUNNING && workQueue.offer(command))`\n")])])]),e("p",[a._v("这句的执行，如果说当前线程池处于RUNNING状态且将任务放入任务缓存队列成功，则继续进行判断：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`if` `(runState != RUNNING || poolSize == ``0``)`\n")])])]),e("p",[a._v("这句判断是为了防止在将此任务添加进任务缓存队列的同时其他线程突然调用shutdown或者shutdownNow方法关闭了线程池的一种应急措施。如果是这样就执行：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("`ensureQueuedTaskHandled(command)`\n")])])]),e("p",[a._v("进行应急处理，从名字可以看出是保证 添加到任务缓存队列中的任务得到处理。")]),a._v(" "),e("p",[a._v("...")]),a._v(" "),e("h3",{attrs:{id:"_2-3-总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-总结"}},[a._v("#")]),a._v(" 2.3 总结")]),a._v(" "),e("p",[a._v("1）首先，要清楚corePoolSize和maximumPoolSize的含义；")]),a._v(" "),e("p",[a._v("2）其次，要知道Worker是用来起到什么作用的；")]),a._v(" "),e("p",[a._v("3）要知道任务提交给线程池之后的处理策略，这里总结一下主要有4点：")]),a._v(" "),e("ul",[e("li",[a._v("如果当前线程池中的线程数目小于corePoolSize，则每来一个任务，就会创建一个线程去执行这个任务；")]),a._v(" "),e("li",[a._v("如果当前线程池中的线程数目>=corePoolSize，则每来一个任务，会尝试将其添加到任务缓存队列当中，若添加成功，则该任务会等待空闲线程将其取出去执行；若添加失败（一般来说是任务缓存队列已满），则会尝试创建新的线程去执行这个任务；")]),a._v(" "),e("li",[a._v("如果当前线程池中的线程数目达到maximumPoolSize，则会采取任务拒绝策略进行处理；")]),a._v(" "),e("li",[a._v("如果线程池中的线程数量大于 corePoolSize时，如果某线程空闲时间超过keepAliveTime，线程将被终止，直至线程池中的线程数目不大于corePoolSize；如果允许为核心池中的线程设置存活时间，那么核心池中的线程空闲时间超过keepAliveTime，线程也会被终止。")])]),a._v(" "),e("h2",{attrs:{id:"_3-线程池中的线程初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程池中的线程初始化"}},[a._v("#")]),a._v(" 3. 线程池中的线程初始化")]),a._v(" "),e("p",[a._v("默认情况下，创建线程池之后，线程池中是没有线程的，需要提交任务之后才会创建线程。")]),a._v(" "),e("p",[a._v("在实际中如果需要线程池创建之后立即创建线程，可以通过以下两个方法办到：")]),a._v(" "),e("ul",[e("li",[a._v("prestartCoreThread()：初始化一个核心线程；")]),a._v(" "),e("li",[a._v("prestartAllCoreThreads()：初始化所有核心线程")])]),a._v(" "),e("p",[a._v("下面是这2个方法的实现：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("public boolean prestartCoreThread() {\n    return addIfUnderCorePoolSize(null); //注意传进去的参数是null\n}\n \npublic int prestartAllCoreThreads() {\n    int n = 0;\n    while (addIfUnderCorePoolSize(null))//注意传进去的参数是null\n        ++n;\n    return n;\n}\n")])])]),e("p",[a._v("注意上面传进去的参数是null，根据第2小节的分析可知如果传进去的参数为null，则最后执行线程会阻塞在getTask方法中的")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\tr = workQueue.take();\n")])])]),e("p",[a._v("即等待任务队列中有任务。")]),a._v(" "),e("h2",{attrs:{id:"_4-任务缓存队列及排队策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-任务缓存队列及排队策略"}},[a._v("#")]),a._v(" 4. "),e("strong",[a._v("任务缓存队列及排队策略")])]),a._v(" "),e("p",[a._v("在前面我们多次提到了任务缓存队列，即workQueue，它用来存放等待执行的任务。")]),a._v(" "),e("p",[a._v("workQueue的类型为BlockingQueue"),e("Runnable",[a._v("，通常可以取下面三种类型：")])],1),a._v(" "),e("ul",[e("li",[e("p",[a._v("ArrayBlockingQueue：基于数组的先进先出队列，此队列创建时必须指定大小；")])]),a._v(" "),e("li",[e("p",[a._v("LinkedBlockingQueue：基于链表的先进先出队列，如果创建时没有指定此队列大小，则默认为Integer.MAX_VALUE；")])]),a._v(" "),e("li",[e("p",[a._v("synchronousQueue：这个队列比较特殊，它不会保存提交的任务，而是将直接新建一个线程来执行新来的任务。")])])]),a._v(" "),e("h2",{attrs:{id:"_5-任务拒绝策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-任务拒绝策略"}},[a._v("#")]),a._v(" 5. 任务拒绝策略")]),a._v(" "),e("p",[a._v("当线程池的任务缓存队列已满并且线程池中的线程数目达到maximumPoolSize，如果还有任务到来就会采取任务拒绝策略，通常有以下四种策略：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ThreadPoolExecutor.AbortPolicy:丢弃任务并抛出RejectedExecutionException异常。\nThreadPoolExecutor.DiscardPolicy：也是丢弃任务，但是不抛出异常。\nThreadPoolExecutor.DiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务（重复此过程）\nThreadPoolExecutor.CallerRunsPolicy：由调用线程处理该任务\n")])])]),e("h2",{attrs:{id:"_6-线程池的关闭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-线程池的关闭"}},[a._v("#")]),a._v(" 6. "),e("strong",[a._v("线程池的关闭")])]),a._v(" "),e("p",[a._v("ThreadPoolExecutor提供了两个方法，用于线程池的关闭，分别是shutdown()和shutdownNow()，其中：")]),a._v(" "),e("ul",[e("li",[a._v("shutdown()：不会立即终止线程池，而是要等所有任务缓存队列中的任务都执行完后才终止，但再也不会接受新的任务")]),a._v(" "),e("li",[a._v("shutdownNow()：立即终止线程池，并尝试打断正在执行的任务，并且清空任务缓存队列，返回尚未执行的任务")])]),a._v(" "),e("h2",{attrs:{id:"_7-线程池容量的动态调整"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-线程池容量的动态调整"}},[a._v("#")]),a._v(" 7. "),e("strong",[a._v("线程池容量的动态调整")])]),a._v(" "),e("p",[a._v("ThreadPoolExecutor提供了动态调整线程池容量大小的方法：setCorePoolSize()和setMaximumPoolSize()，")]),a._v(" "),e("ul",[e("li",[a._v("setCorePoolSize：设置核心池大小")]),a._v(" "),e("li",[a._v("setMaximumPoolSize：设置线程池最大能创建的线程数目大小")])]),a._v(" "),e("p",[a._v("当上述参数从小变大时，ThreadPoolExecutor进行线程赋值，还可能立即创建新的线程来执行任务。")])])}),[],!1,null,null,null);t.default=r.exports}}]);