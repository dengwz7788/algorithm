/**
 *  throttle 节流 - 节流确保函数在指定的时间间隔内最多只执行一次，即使它被多次触发。
 * 
 */
let timer; 
let flag;
function throttle( func, wait = 500,  immediate = true){
  if(immediate){
    if(!flag){
        flag = true
        timer = setTimeout(() => {
            flag = false
            typeof func == 'function' && func()
        }, wait);
    }
  }else{
    flag = true
    timer = setTimeout(() => {
        flag = false
        typeof func == 'function' && func()
    }, wait);
  }
}

// function throttle2(func, wait){
//     let flag;
//     return function(){
//         let arg = arguments
//         let that = this
//         if(!flag){
//             setTimeout(() => {
//                 flag = false
//                 func.apply(that, arg)
//             }, wait);
//         }
//     }
// }

throttle(function(){
    console.log("value", 567)
}, 1000)
throttle(function(){
    console.log("value", 345)
}, 500)
throttle(function(){
    console.log("value", 123)
}, 50)

