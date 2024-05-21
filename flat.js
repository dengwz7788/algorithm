/****
 *  数组打平
***/

// function _flat(arr, deep = 1){
//     let newArr = []
//     arr.map( item => {
//         if( Array.isArray(item) ){
//             // newArr.push(...item)
//             if(deep == 1){
//                 newArr = newArr.concat(item);
//             }else{
//                 deep--
//                 newArr = newArr.concat(_flat(item, deep));
//             }
//         }else{
//             newArr.push(item)
//         }
//     })
//     return newArr
// }

// 使用 reduce 来实现

// function _flat( arr, deep ){
//     const result = arr.reduce( ( acc, val ) => {
//         if( Array.isArray(val) ){
//             if(  deep == 1 ){
//                 acc = acc.concat(val)
//             }else{
//                 deep--
//                 acc = acc.concat(_flat(val, deep))
//             }
           
//         }else{
//             acc = acc.concat(val)
//         }
//         return acc
//     } , [] )
//     return result;
// }


/**
 * 把函数挂到Array
 * **/

Array.prototype._flat = function(deep){
    return this.reduce( (acc, val) => {
        if(Array.isArray(val)){
            if(deep == 1){
                acc = acc.concat(val)
            }else{
                deep--
                acc = acc.concat(val._flat(deep))
            }
    
        }else{
            acc = acc.concat(val)
        }
        return acc
    }, [] )
}

const arr = [1,[2,[3,[6,7]]], 5]

console.log(arr._flat(3))

// console.log('_flat', _flat(arr, 2))