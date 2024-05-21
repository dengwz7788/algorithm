/**
 *  debounce 防抖 - 防抖是在一定时间内仅一次触发
 * 
 */
let timer; 
let flag;
function debounce( func, wait = 500){

   clearTimeout(timer)
   timer = setTimeout(() => {
      typeof func == 'function' && func()
   }, wait);
}

debounce(function(){
  console.log("value", 123)
})
debounce(function(){
    console.log("value", 567)
})
debounce(function(){
    console.log("value", 345)
})


