function sum(...args) {
    // 定义一个内部函数，用于累加和返回结果
    let total = args.reduce( (a, b) => a + b, 0)
    function f(...args) {
      total +=  args.reduce( (a, b) => a + b, 0);
      return f;
    }
    
    // 为内部函数添加一个total方法，用于返回累加的结果
    f.total = function() {
      return total;
    };
    
    return f;
  }

const result = sum(1,2,3,4)(2,3,4)(3,1,1)(4,2)(5).total();
console.log(result); // 输出: 15