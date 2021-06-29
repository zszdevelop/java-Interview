# Js异步解决方案-Generator(五)

## 1. 简介

Generator是协程在ES6的实现，最大的特点就是可以交出函数的执行权

我们可以通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案

Generator的英文是生成器

想要了解生成器(Generator)，还是绕不过迭代器(Iterator)这个概念，我们先来简单介绍下

## 2. 迭代器(Iterator)

### 2.1 Iterator简介

迭代器是一种接口，也可以说是一种规范

js中不同的数据类型如(Array/Object/Set)等等遍历方式都各有不同，比如对象遍历我们会使用`for..in..`，数组可以使用`for循环/for..in../forEach`等等

那么有没有统一的方式遍历这些数据呢？这就是迭代器存在的意义，它可以提供统一的遍历数据的方式，只要在想要遍历的数据结构中添加一个支持迭代器的属性即可

### 2.2 Iterator语法

```js
const obj = {
    [Symbol.iterator]:function(){}
}
```

`[Symbol.iterator]` 属性名是固定的写法，只要拥有了该属性的对象，就能够用迭代器的方式进行遍历

迭代器的遍历方法是首先获得一个迭代器的指针，初始时该指针指向第一条数据之前

接着通过调用 `next` 方法，改变指针的指向，让其指向下一条数据

每一次的 `next` 都会返回一个对象，该对象有两个属性

- value 代表想要获取的数据
- done 布尔值，false表示当前指针指向的数据有值，true表示遍历已经结束

### 2.3 Iterator详解

在JS中，`Array/Set/Map/String`都默认支持迭代器

由于数组和集合都支持迭代器，所以它们都可以用同一种方式来遍历

es6中提供了一种新的循环方法叫做`for-of`，它实际上就是使用迭代器来进行遍历

换句话说只有支持了迭代器的数据结构才能使用`for-of`循环

**数组中使用迭代器遍历**

```js
let arr = [{num:1},2,3]
let it = arr[Symbol.iterator]() // 获取数组中的迭代器
console.log(it.next()) 	// { value: Object { num: 1 }, done: false }
console.log(it.next()) 	// { value: 2, done: false }
console.log(it.next()) 	// { value: 3, done: false }
console.log(it.next()) 	// { value: undefined, done: true }
```

数组是支持迭代器遍历的，所以可以直接获取其迭代器，集合也是一样

**集合中使用迭代器遍历**

```js
let list = new Set([1,3,2,3])
let it = list.entries() 	// 获取set集合中自带的的迭代器
console.log(it.next()) 	// { value: [ 1, 1 ], done: false }
console.log(it.next()) 	// { value: [ 3, 3 ], done: false }
console.log(it.next()) 	// { value: [ 2, 2 ], done: false }
console.log(it.next()) 	// { value: undefined, done: true }
```

集合与数组不同的是，我们可以使用Set中的`entries`方法获取迭代器

Set集合中每次遍历出来的值是一个数组，里面的第一和第二个元素都是一样的

**自定义对象中使用迭代器遍历**

首先自定义的对象没有迭代器属性，所以不支持迭代器迭代，我们也都知道`for..of`是无法遍历对象的，原因就在这里，因为`for..of`是使用迭代器迭代，所以对象不能用`for..of`

既然知道是因为自定义对象无迭代器属性，那么我们可以为它加上`Symbol.iterator`这样一个属性，并为它实现一个迭代器方法，如下

```js
let obj = {
  name : 'tom',
  age : 18,
  gender : '男',
  intro : function(){
    console.log('my name is '+this.name)
  },
  [Symbol.iterator]:function(){
    let i = 0;
    // 获取当前对象的所有属性并形成一个数组
    let keys = Object.keys(this); 
    return {
      next: function(){
        return {
          // 外部每次执行next都能得到数组中的第i个元素
          value:keys[i++], 
          // 如果数组的数据已经遍历完则返回true
          done:i > keys.length 
        }
      }
    }
  }
}

for(let attr of obj){
  console.log(attr);
}
```

如上所示，加上`[Symbol.iterator]`这个迭代器属性我们自定义了一个迭代器方法，就可以使用`for..of`方法了

### 2.4 Iterator作用

Iterator 的作用有三个：

- 为各种数据结构，提供一个统一的、简便的访问接口
- 使得数据结构的成员能够按某种次序排列
- ES6 创造了一种新的遍历命令`for..of`循环，Iterator 接口主要供`for..of`消费

Iterator我们就介绍到这里，到这就理解上文Iterator参数是什么了吧，就是代表一个有迭代器属性的参数

## 3. 初识Generator

Generator其实也是一个函数，只不过是一个特殊的函数

普通函数，你运行了这个函数，函数内部不会停，直到这个函数结束

Generator这个函数特殊之处就是，中间可以停

### 3.1 Generator函数特点

```js
function *generatorFn() {
  console.log("a");
  yield '1';
  console.log("b");
  yield '2'; 
  console.log("c");
  return '3';
}

let it = generatorFn()
it.next()
it.next()
it.next()
it.next()
```

上面这个示例就是一个Generator函数，首先我们观察它的特点，一个一个进行分析

- 不同于普通函数，Generator函数在

  ```
  function
  ```

  后面，函数名之前有个

  ```
  *
  ```

  - `*`用来表示函数为 Generator 函数
  - 写法很多，`function* fn()`、`function*fn()`和`function *fn()`都可以

- 函数内部有

  ```
  yield
  ```

  字段

  - `yield`用来定义函数内部的状态，并让出执行权
  - 这个关键字只能出现在生成器函数体内，但是生成器中也可以没有 yield 关键字，函数遇到 yield 的时候会暂停，并把 yield 后面的表达式结果抛出去

- 调用后其函数返回值使用了

  ```
  next
  ```

  方法

  - 调用 Generator 函数和调用普通函数一样，在函数名后面加上()即可
  - Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针
  - 所以要调用迭代器对象 Iterator 的 `next` 方法，指针就会从函数头部或者上一次停下来的地方开始执行
  - `next` 方法其实就是将代码的控制权交还给生成器函数

### 3.2 分析执行过程

接着我们来分析它的执行过程，线来看它的打印结果，还是上面那个例子

```js
let it = generatorFn()
it.next()
// a
// {value: "1", done: false}

it.next()
// b
// {value: "1", done: false}

it.next()
// c
// {value: "1", done: true}

it.next()
// {value: undefined, done: true}
```

首先，Generator 函数执行，返回了一个指向内部状态对象的指针，此时没有任何输出

第一次调用`next`方法，从 Generator 函数的头部开始执行，先是打印了 a ，执行到`yield`就停下来，并将`yield`后边表达式的值 '1'，作为返回对象的 value 属性值，此时函数还没有执行完， 返回对象的 done 属性值是 false

第二次调用`next`方法时，同上步

第三次调用`next`方法时，先是打印了 c ，然后执行了函数的返回操作，并将 return 后面的表达式的值，作为返回对象的 value 属性值，此时函数已经结束，所以 done 属性值为true

第四次调用`next`方法时， 此时函数已经执行完了，所以返回 value 属性值是 undefined，done 属性值是 true ，如果执行第三步时，没有 return 语句的话，就直接返回 `{value: undefined, done: true}`

简单的理解，Generator函数`yield`放到哪里它就停到哪里，调用时使用`next`方法踹一步就走一步

### 3.3 next参数传递

`yield`是有返回值的，`next`方法直接调用不传入参数的时候，`yield` 表达式的返回值是 undefined

当 next 传入参数的时候，该参数会作为**上一步**`yield`的返回值

我们通过示例来理解

```js
function *geFn(){
  cosnole.log("start")
  let a = yield "1"
  
  console.log(a)
  let b = yield "2"
  
  console.log(b)
  let c = yield "3"
  
  console.log(c)
  return 4
}

let it = geFn()
it.next()
// start
// { value:1, done: false }

it1.next()
// undefined   		未传值，所以a=undefined
// { value:2, done: false }

it.next("hahaha")
// hahaha	     		传值，所以b=hahaha
// { value:3, done: false }

it.next("omg")
// omg				 		传值，所以c=omg
// {value: 4, done: true}
```

由于 `next` 方法的参数表示上一个 `yield` 语句的返回值，所以第一次使用 `next` 方法时，不能带有参数

V8引擎会直接忽略第一次使用 `next` 方法时的参数，只有从第二次使用 `next` 方法开始，参数才是有效的

没有接到传值时，`yield`语句的返回值就是undefined，正如上面示例输出那样

通过 `next` 方法的参数，就有办法在Generator函数开始运行之后，继续向函数体内部注入值，这代表了我们可以在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为

### 3.4 再次理解yield

我们再来看一段代码，帮助我们理解`yield`

```js\
function *geFn(){
  console.log("start")
  let a = yield console.log("1")
  console.log(a)
  let b = yield console.log("2")
  console.log(b)
  return console.log("3")
}

let it = geFn()
it.next()
// start
// 1
// {value: undefined, done: false}

it.next("我是a")
// 我是a
// 2
// {value: undefined, done: false}

it.next("我是b")
// 我是b
// 3
// {value: undefined, done: true}
```

通过`next`调用我们可以看到，第一次调用就输出了`start & 1` ，意味着`yield`停止时，后面代码是执行了的



![image-20210617201526090](https://gitee.com/zszdevelop/blogimage/raw/master/image-20210617201526090.png)



如上图所示，如果将说`yield`比做一道墙，那么墙右边和上面是一块，墙左边和下面是一块，这样说应该够直白了吧

### 3.5 for..of 遍历Generator

上文我们就知道了`for...of`内部实现就是在使用迭代器迭代，那么`for...of`循环直接用在Generator遍历器上岂不是完美

是的，它可以自动遍历Generator函数，而且此时不再需要调用next方法，一旦next方法的返回对象的done属性为true，`for...of`循环就会中止，且不包含该返回对象

```js
function *foo() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
  return 6
}
for (let v of foo()) {
  console.log(v)
}
// 1 2 3 4 5
```

### 3.6 yield* 表达式

在`yield`命令后面加上星号，表明它返回的是一个遍历器，这被称为`yield*`表达式

```js
function *foo(){
  yield "foo1"
  yield "foo2"
}
function *bar(){
  yield "bar1"
  yield* foo()
  yield "bar2"
}
for(let val of bar()){
  console.log(val)
}

// bar1 foo1 foo2 bar2
```

`yield`命令后面如果不加星号，返回的是整个数组，加了星号就表示返回的是数组的遍历器

```js
function* gen1(){
  yield ["a", "b", "c"]
}
for(let val of gen1()){
  console.log(a)
}
// ["a", "b", "c"]

// ------------------- 上下分割

function* gen2(){
  yield* ["a", "b", "c"]
}
for(let val of gen2()){
  console.log(a)
}
// a b c
```

### 3.7 Generator中的return

return 方法返回给定值，并结束遍历 Generator 函数

当 return 无值时，就返回 undefined，来看例子

```js
function* foo(){
  yield 1
  yield 2
  yield 3
}

var f = foo()
f.next()
// {value: 1, done: false}

f.return("hahaha")
// 由于调用了return方法，所以遍历已结束，done变true
// {value: "hahaha", done: true}

f.next()
// {value: undefined, done: true}
```

### 3.8Generator错误处理throw

`throw`方法可以再 Generator 函数体外面抛出异常，再函数体内部捕获，听着是很好理解

这里一不小心还是挺容易入坑的，我们来看几个例子吧

```js
function *foo(){
  try{
    yield 'hahaha'
  }catch(err){
    console.log('inside error: ' + err)
  }
}
var f = foo()
try{
    it.throw('this is err')
}catch(err){
    console.log('out error: ' + err)
}
```

上面代码会输出哪个错误呢？

其实答案很简单，上述代码会输出`out error：this is err`

因为调用`throw`的时候，我们并没有执行`next`方法，这个时候内部的`try{}catch{}`代码都还没执行，因此只会被外面捕捉

所以说，我们只需要在调用`throw`之前，先调用一遍`next`，这个时候函数体内部已经执行了`try{}catch{}`，那么执行到`throw`时，内外都有错误捕捉，**`throw`方法会先被内部捕捉**，从而打印`inside error：this is err`

除此，**`throw`方法会附带执行下一个`yield`**，我们来看示例

```js
var foo = function* foo(){
  try {
    yield console.log('1')
    yield console.log('2')
  } catch (e) {
    console.log('inside err')
  }
  yield console.log('3')
  yield console.log('4') 
}
var g = foo()
g.next()
g.throw()
g.next()
```

我们来看上述代码的执行过程

首先执行第一个`next`方法，进入`try()catch()`，输出 1

接着，执行`throw`方法，内部捕捉到，输出`inside err`，此时`try()catch()`代码块已经执行了`catch`，`try()catch()`代码块已经结束了，所以附带执行一个`yield`会继续向下找，所以再输出3

最后执行`next`方法，输出 4

最终输出结果为`1 3 4`

## 4. Generator扩充

在Generator开头有一句话，不知道大家理解没有

- Generator是协程在ES6的实现，最大的特点就是可以交出函数的执行权

### 4.1 什么是协程？

这里使用阮一峰老师的文章参考链接【8】中对协程的解释并略带修改及补充

进程和线程大家应该都清楚，那么协程是什么呢

不知道大家知不知道用户空间线程，其实就是一种由程序员自己写程序来管理他的调度的线程，对内核来说不可见

协程(coroutine)，可以理解就是一种“用户空间线程”，也可理解为多个“线程”相互协作，完成异步任务

由于线程是操作系统的最小执行单元，因此也可以得出，协程是基于线程实现的，不过它要比线程要轻很多

协程，有几个特点：

- 协同，因为是由程序员自己写的调度策略，其通过协作而不是抢占来进行切换
- 在用户态完成创建，切换和销毁
- 编程角度上看，协程的思想本质上就是控制流的主动让出(yield)和恢复(resume)机制

它的运行流程如下

- 协程A开始执行
- 协程A执行到一半，暂停执行，执行的权利转交给协程B。
- 一段时间后B交还执行权
- 协程A重得执行权，继续执行

上面的协程A就是一个异步任务，因为在执行过程中执行权被B抢了，被迫分成两步完成

举例来说，读取文件的协程写法如下

```js
function asnycJob() {
  // ...其他代码
  var f = yield readFile(fileA)
  // ...其他代码
}
```

上面代码的函数 asyncJob 是一个协程，其中的 `yield` 命令，它表示执行到此处，执行权将交给其他协程，也就是说，`yield`命令是异步两个阶段的分界线

协程遇到 `yield` 命令就暂停，等到执行权返回，再从暂停的地方继续往后执行，它的最大优点，就是代码的写法非常像同步操作，只多了一个`yield`命令

### 4.2 Generator与协程

JS是单线程的，ES6中的Generator的实现，类似于开了多线程，但是依然同时只能进行一个线程，不过可以切换

就像汽车在公路上行驶，js公路只是单行道(主线程)，但是有很多车道(辅助线程)都可以汇入车流(异步任务完成后回调进入主线程的任务队列)

而 Generator 把js公路变成了多车道(协程实现)，但是同一时间只有一个车道上的车能开(所以依然是单线程)，不过可以自由变道(移交控制权)

### 4.3 Generator之Thunk函数

thunk函数的诞生源于一个编译器设计的问题：`求值策略`，即函数的参数到底应该何时求值

```js
var x = 1
function fn(n) {
    return n * 10
}
fn(x + 5)
```

如上所示，其中fn方法调用时`x+5`这个表达式应该什么时候求值，有两种思路

- **传值调用(call by value)**，先计算`x+5`的值，再将这个值 `6` 传入函数fn，例如c语言，这种做法的好处是实现比较简单，但是有可能会造成性能损失(例如一个函数传入了两个参数，第二个参数是一个表达式，但是函数体内没有用到这个参数，那么先计算出值就会损耗性能且无意义)
- **传名调用(call by name)**，即直接将表达式`x+5`传入函数体，只在用到它的时候求值

Thunk 函数的定义，就是传名调用的一种实现策略，用来替换某个表达式，实现思路其实也很简单

先将参数放到一个临时函数之中，再将这个临时函数传入函数体，就像下面这样

```js
function fn(m){
  return m * 2    
}
fn(x + 5)

// thunk实现思路
var thunk = function () {
  return x + 5
}

function fn(thunk){
  return thunk() * 2
}
```

JS是传值调用，它的Thunck函数含义有所不同

在JS中，Thunk函数替换的不是表达式，是对函数珂里化的一种运用，简单来说，就是把是多参数函数替换成一个只接受回调函数作为参数的单参数函数，我们来看下它的简单实现

```js
fs.readFile(fileName, callback)

const Thunk = function(fn){
  return function(...args){
    return function(callback){
      return fn.call(this,...args,callback)
    }
  }
}

// 使用上面的Thunk转化器，生成fs.readFile的Thunk函数
var readFileThunk = Thunk(fs.readFile)
readFileThunk(fileName)(callback)
```

如果在生产环境要使用Thunk函数的话，使用Thunkify模块就可以，其实它核心源码就是上面我们写的Thunk，Thunkify里多了一个检查机制而已，比较简单，可自行百度Thunkify模块了解

Thunk这东西在ES6前其实没有太大用处，但是在Generator函数出来后，Thunk函数就可以派上用场了，它可以用于Generator函数的自动流程管理，接收和交换程序的执行权

我们来实现一个基于Thunk函数的Generator自动执行器

```js
// 基于Thunk函数的Genertor函数自动执行器
function run(fn) {
  let gen = fn()
  function next(err, data) {
    // 将指针移动到Generator函数的下一步
    let result = gen.next(data)
    // 判断是否结束
    if (result.done) return
    // 递归,把next放进.value中
    result.value(next)
  }
  next()
}

// 模拟异步方法
let sleep = function(n, callback) {
  setTimeout(() => {
    console.log(n)
    callback && callback(n)
  }, n)
}

// 模拟异步方法进行Thunk转换
let sleepThunk = Thunk(sleep)

// Generator函数
let gen = function*() {
  let f1 = yield sleepThunk(1000)
  let f2 = yield sleepThunk(1500)
  // ...
  let fn = yield sleepThunk(2000)
}

// 调用Genertor函数自动执行器
run(gen)
```

上面代码的 run 函数，就是一个 Generator 函数的自动执行器，内部的 next 函数就是 Thunk 的回调函数

next 函数先将指针移到 Generator 函数的下一步(gen.next 方法)

然后判断 Generator 函数是否结束(result.done 属性)

如果没结束，就将 next 函数再传入 Thunk 函数(result.value 属性)，否则就直接退出

代码中模拟了一个异步操作`sleep`方法，并将其转化为了Thunk方法(使用上文我们实现的那个简易版Thunk)

函数 gen 封装了 n 个异步操作，只要执行 run 函数，这些操作就会自动完成

这样一来，异步操作不仅可以写得像同步操作，而且一行代码就可以执行，极其方便

不过相信大家也看到了，这种自动执行器传入的Generator函数，**yield方法后面必须是一个Thunk 函数**

--------👇--------

Thunk就简单介绍到这里了，更多Thunk相关推荐看阮一峰文参考链接【9】

我们只需要明白Thunk是什么，它和Generator有什么关系就可以

### 4.4 Generator之co函数库

co 函数库是著名程序员 TJ Holowaychuk 于2013年6月发布的一个小工具，用于 Generator 函数的自动执行

[co函数库源码传送门](https://github.com/tj/co)

co 函数库其实就是将两种自动执行器(Thunk 函数和 Promise 对象)，包装成一个库，所以说使用 co 的前提条件是，Generator 函数的 yield 命令后面，只能是 Thunk 函数或 Promise 对象

co函数会返回一个Promise，所以我们可以后接`then`等方法

基于Thunk函数的自动执行器上面介绍了下，那么基于Promise的其实也差不多，我们简单实现下

```js
// 基于Promise函数的Genertor函数自动执行器
function run(gen) {
  let g = gen()

  function next(data) {
    // 将指针移动到Generator函数的下一步
    let result = g.next(data)
    // 判断是否结束，结束返回value，value是一个Promise
    if (result.done) return result.value
    // 递归
    result.value.then(data => {
      next(data)
    })
  }
  next()
}

// 模拟异步方法进行Promise转换
let sleepPromise = function(n) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log(n)
      resolve(n)
    }, n)
  })
}

// Generator函数
let gen = function*() {
  let f1 = yield sleepPromise(1000)
  let f2 = yield sleepPromise(1500)
  // ...
  let fn = yield sleepPromise(2000)
}

// 调用Genertor函数自动执行器
run(gen)
```

如上代码，和Thunk函数那里区别就是yield后面一个跟Thunk函数，一个跟Promise对象

如果Thunk自执行器你理解了，Promise使用也ok的话，这块代码看看就懂了，也没啥解释的

接下来我们来看看co库的源码

co函数库的源码也很简单，只有几十行代码

首先，co 函数接受 Generator 函数作为参数，返回一个 Promise 对象

```js
function co(gen) {
  var ctx = this
  return new Promise(function(resolve, reject) {
  })
}
```

在返回的 Promise 对象里面，co 先检查参数 gen 是否为 Generator 函数

如果是，就执行该函数，得到一个内部指针对象

如果不是就返回，并将 Promise 对象的状态改为 resolved

```js
function co(gen) {
  var ctx = this

  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)
  })
}
```

接着，co 将 Generator 函数的内部指针对象的 next 方法，包装成 onFulefilled 函数

主要是为了能够捕捉抛出的错误

```js
function co(gen) {
  var ctx = this

  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    onFulfilled()
    function onFulfilled(res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (e) {
        return reject(e)
      }
      next(ret)
    }    
  })
}
```

最后，就是关键的 next 函数，它会反复调用自身

```js
function next(ret) {
  if (ret.done) return resolve(ret.value)
  var value = toPromise.call(ctx, ret.value)
  if (value && isPromise(value)) return value.then(onFulfilled, onRejected)
  return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(ret.value) + '"'))
    }
})
```

`next`方法中，第一行，检查当前是否为 Generator 函数的最后一步，如果是就返回

第二行，确保每一步的返回值，是 Promise 对象

第三行，使用 then 方法，为返回值加上回调函数，然后通过 onFulfilled 函数再次调用 next 函数

第四行，在参数不符合要求的情况下(参数非 Thunk 函数和 Promise 对象)，将 Promise 对象的状态改为 rejected，从而终止执行

co 支持并发的异步操作，即允许某些操作同时进行，等到它们全部完成，才进行下一步，我们可以并发的操作放在数组或对象里面，如下

```js
// 数组的写法
co(function* () {
  var res = yield [
    Promise.resolve(1),
    Promise.resolve(2)
  ]
  console.log(res)
}).catch(onerror)

// 对象的写法
co(function* () {
  var res = yield {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  }
  console.log(res)
}).catch(onerror)
```

-------👇-------

以上就是co的内容了，这里提及只是为了让大家了解co这种函数库，虽然目前用的不多，但是对我们理解Generator有帮助，即使这里有些迷糊，也无伤大雅，知道co是什么，co的自动执行原理大概是怎么实现的就行

这块和Thunk一样，也是参考阮一峰老师的文章，所以有兴趣的话可以看下参考链接【10】

## 5. Generator优/缺

### 5.1 优点

优雅的流程控制方式，可以让函数可中断执行，在某些特殊需求里还是很实用的

使用过React-dva的同学可能会更有感触一些

之前Node的koa框架也用Generator，不过后来被async/await替代了

### 5.2 缺点

Generator 函数的执行必须靠执行器，所以才有了 co 函数库，但co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，只针对异步处理来说，还是不太方便

## 参考文章

[「硬核JS」深入了解异步解决方案](https://juejin.cn/post/6844904064614924302#heading-41)