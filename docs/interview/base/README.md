# 基础知识

## 原始类型

::: tip
javascript原始类型有6中,原始类型既只保存原始值，没有函数可以调用
:::

## 六种原始类型

* string
* number
* boolean
* null
* undefined
* symbol

::: warning
为什么说原始类型没有函数可以调用,但是`'1'.toString()`又可以在浏览器中正确执行?

因为`'1'.toString()`中字符串`'1'`在此时会被封装成对应字符串对象，相当于`new String('1').toString()`,因为`new String('1')`
实例化一个对象，而这个对象上是有`toString()`方法的
:::

## null到底是什么类型

* `null`不是一个空引用, 而是一个原始值; 它只是期望此处将引用一个对象, 注意是"期望".
* `typeof null`结果是`object`, 这是个历史遗留bug.
* 在ECMA6中, 曾经有提案为历史平反, 将`type null`的值纠正为`null`, 但最后提案被拒了.
* 理由是历史遗留代码太多, 不想得罪人, 不如继续将错就错当和事老

## 对象类型
::: tip
在javascript中, 除了原始类型，其他的都是对象类型，对象类型储存的是地址，而原始类型储存的是值.
:::

```js
let a = []
let b = a
a.push(1)
console.log(b) // 输出:1
```
以上代码中,创建一个对象类型a(数组),将a的栈储存地址赋值给了变量b，此时修改a的值，打印出b的值也同步发生了改变,因为他们在内存中使用的同一个地址，改变其中任意变量的值，都会影响其他变量的值

## 对象当做函数参数

```js
function Person(person) {
    person.age = 24
    person = {
        name: '韩梅梅',
        age: 18
    }
    return person
}

let lilei = {
    name: '李雷',
    age: 18
}
let user = new Person(lilei)
console.log(lilei.age) //输出: 24
console.log(user.age)  //输出: 18
```

**代码分析**

1. 在`Person`函数中，`person`传递的是对象`lilei`的指针(指向地址)
2. 在`Person`函数内部，改变`person`的属性值，会同步反应到对象`lilei`上,此时`lilei.age`属性发生改变，既值为24
3. 在`Person`函数内部，将`person`重新分配一个新的内存地址，此时该`person`和形参`person`没有任何关联了，并返回这个最新`person`对象

## typeof 和 instanceof

## typeof

* 对于基本类型，除 `null` 以外，均可以返回正确的结果; 对于 `null` 则返回 object 类型
* 对于引用类型，除 `function` 以外，一律返回 `object` 类型; 对于 `function` 返回 `function` 类型

```js
typeof 10010;           // 输出: number
typeof 'lilei';         // 输出: string
typeof true;            // 输出: boolean
typeof undefined;       // 输出: undefined
typeof Symbol();        // 输出: symbol
typeof {};              // 输出: object
typeof new Array();     // 输出: object

// 如果对象是函数类型 -> function
typeof new Function();  // 输出: function
```

## instanceof

* `instanceof` 是用来判断 `A` 是否为 `B` 的实例，表达式为：`A instanceof B`，如果 A 是 B 的实例，则返回 `true`,否则返回 `false`。

```js
function _instanceof(A, B) {
    let _A = A.__proto__
    let _B = B.prototype
    // _A的内部属性__proto__指向_B的原型对象
    if (_A === _B) {
        return true
    }
    return false
}

function Person() {
}

function Student() {
}

let p1 = new Person()

_instanceof(p1, Person)  // 输出：true
_instanceof(p1, Student) // 输出：false

    // ----分割线----
    ([]) instanceof Array; //true
({}) instanceof Object;//true
new Date() instanceof Date;//true
```

::: tip
instanceof 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型
:::

## == 和 ===

::: tip
`===` 严格相等:左右两边不仅值要相等，类型也要相等，例如`'1'===1`的结果是`false`，因为一边是`string`，另一边是`number`。

`==`  不严格相等:
:::

* 两边的类型是否相同，相同的话就比较值的大小，例如`1==2`，返回`false`
* 类型不相同会进行类型转换
* 判断的是否是`null`和`undefined`，是的话就返回`true`
* 判断的类型是否是`String`和`Number`，是的话，把`String`类型转换成`Number`，再进行比较
* 判断其中一方是否是`Boolean`，是的话就把`Boolean`转换成`Number`，再进行比较
* 如果其中一方为`Object`，且另一方为`String`、`Number`或者`Symbol`，会将`Object`转换成原始类型后，再进行比较

## 对象转原始类型

对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

1. 是否已经是原始类型，是则直接返回
2. 调用`valueOf()`，如果转换为原始类型，则返回
3. 调用`toString()`，如果转换为原始类型，则返回
4. 也可以重写`Symbol.toPrimitive()`方法，优先级别最高
5. 如果都没有返回原始类型，会报错

```js
let obj = {
    value: 0,
    valueOf() {
        return 1;
    },
    toString() {
        return '2'
    },
    [Symbol.toPrimitive]() {
        return 3
    }
}
console.log(obj + 1); // 输出:4
```

```js
// 面试题：如何使 a==1 && a==2 && a==3 为 'true'
let a = {
    value: 0,
    valueOf() {
        this.value++;
        return this.value
    }
}
console.log(a == 1 && a == 2 && a == 3) // 输出:true
```
**代码分析**：
1. 重写对象`a`的`valueOf()`方法，使`value`属性每次调用时自增
2. 当判断`a==1`时，第一次调用`valueOf()`方法，此时`value`等于1，判断`1==1`
3. 判断`a==2`时，第二次调用`valueOf()`方法，此时`value`等于2，判断`2==2`
4. 判断`a==3`时，第三次调用`valueOf()`方法，此时`value`等于3，判断`3==3`
5. `true && true && true`, 所以打印`true`


## new操作中发生了什么
* 创建一个空对象
* 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）
* 执行构造函数中的代码(为这个新对象添加属性)
* 最后返回 this 指向的新对象，也就是实例(如果没有手动返回其他的对象)

## this指向解析
1. 独立函数调用，例如`getUserInfo()`，此时`this`指向全局对象`window`
2. 对象调用，例如`stu.getStudentName()`，此时`this`指向调用的对象`stu`
3. `call()`、`apply()`和`bind()`改变上下文的方法，`this`指向取决于这些方法的第一个参数，当第一个参数为`null`时，`this`指向全局对象`window`
4. 箭头函数没有`this`，箭头函数里面的`this`只取决于包裹箭头函数的第一个普通函数的`this`
5. `new`构造函数调用，`this`永远指向构造函数返回的实例上，优先级最高。

```js
var name = '未命名'
let getName = function () {
    return this.name
}
let Student = function (name) {
    this.name = name
}
Student.prototype.getName = function () {
    return this.name
}
let lilei = {
    name:'李雷',
    getName:getName
}
let hanmeimei = {
    name:'韩梅梅'
}

getName()        // 输出: 未命名
lilei.getName()  // 输出: 李雷
lilei.getName.apply(hanmeimei)  // 输出: 韩梅梅
let p = new Student('王富贵')
p.getName()   // 输出: 王富贵
```

