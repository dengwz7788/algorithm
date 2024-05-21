/**
 * 原型链是一种实现对象继承的机制。
 * 
 * 原型对象：每一个javascript的对象都有一个指向另一个对象的引用，及这个对象的原型
 * 原型链：原型的对象也有原型
 * 属性查询： 先查当前对象，再找原型，直接underfind
 * 
 * 继承：
*/
/*
 * 原型链继承 - 子类型的原型为父类型的一个实例对象。
    * 优点：
    *   父类新增原型方法/原型属性，子类都能访问到 
    * 缺点：
    *   无法实现多继承
    *   来自原型对象的所有属性被所有实例共享
    *   创建子类实例时，无法向父类构造函数传参
    *   要想为子类新增属性和方法，必须要在Student.prototype = new Person() 之后执行，不能放到构造器中
**/
function obj(){

}
obj.prototype = new Object()

/** todo
 * 借用构造函数继承 - 在子类型构造函数中通用call()调用父类型构造函数
    * 优点：
    *   解决了原型链继承中子类实例共享父类引用属性的问题
    *   创建子类实例时，可以向父类传递参数
    *   可以实现多继承(call多个父类对象)  
    * 缺点：
    *   实例并不是父类的实例，只是子类的实例
    *   只能继承父类的实例属性和方法，不能继承原型属性和方法
    *   无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
*/
function obj3(name){
    Object.call(this) //通过call来改变Object的this指向
    this.name = name
}
let newObj = new obj3("123")

/**
 * ES6中class 的继承
 * 优点：
    *  语法简单易懂,操作更方便
    * 缺点：
    *   并不是所有的浏览器都支持class关键字
 *  
*/
class obj1 extends Object{
    constructor(){
        super()
    }
}

/**
 * 原型式继承 - 
*/
let obj2 = Object.create(Object.prototype)

/**
 * 组合式继承 - 通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
   * 优点：
    *   可以继承实例属性/方法，也可以继承原型属性/方法
    *   不存在引用属性共享问题
    *   可传参
    *   函数可复用
    * 缺点：
    *   调用了两次父类构造函数，生成了两份实例
*/
(() => { // 为了使用作用域来防止报错，没啥意义
    function Person (name, age) {
    this.name = name,
    this.age = age,
    this.setAge = function () { }
    }
    Person.prototype.setAge = function () {
    console.log("111")
    }
    function Student (name, age, price) {
    Person.call(this, name, age)
    this.price = price
    this.setScore = function () { }
    }
    Student.prototype = new Person()
    Student.prototype.constructor = Student//组合继承也是需要修复构造函数指向的
    Student.prototype.sayHello = function () { }
    var s1 = new Student('Tom', 20, 15000)
    var s2 = new Student('Jack', 22, 14000)
    console.log(s1)
    console.log(s1.constructor) //Student
    console.log(p1.constructor) //Person
})()

/**
 * 寄生组合继承 - 通过闭包的方式，将父类指向第三方
*/
