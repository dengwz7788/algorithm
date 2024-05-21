function deepClone(obj, hash = new WeakMap()) {

    // typeof instanceof
    if(obj == null || typeof obj !== 'object'){
        return obj;
    }

    if(hash.has(obj)){
        return hash.get(obj)
    }

    let clone

    if(Array.isArray(obj)){
        clone = []
    }else if( obj instanceof Date ){
        clone = new Date(obj.getTime())
    }else if( obj instanceof RegExp ){
        clone = new RegExp(obj)
    }else if( obj instanceof Map ){
        clone  = new Map()
    }else if( obj instanceof Set ){
        clone  = new Set()
    }else{
        clone = {}
        Object.setPrototypeOf(clone, Object.getPrototypeOf(obj))
    }

    hash.set(obj,clone)

    if( obj instanceof Map || obj instanceof Set){
         obj.forEach( (  value, key ) => {
            if( obj instanceof Map){
                clone.set( key, deepClone(value, hash))
            }else{
                clone.add( key, deepClone(value, hash) )
            }

         })
    } else {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                clone[key] = deepClone( obj[key], hash )
            }
        }
    }

    const symKeys = Object.getOwnPropertySymbols(obj)
    for (let index = 0; index < symKeys.length; index++) {
        const tmp = symKeys[index];
        if(obj.getOwnPropertySymbols(tmp)){
            clone[tmp] = deepClone( obj[tmp], hash)
        }
    }

    return clone

}
  
let obj = {
    a: 1,
    b: "s",
    c: false,
    d: new Map([[1, 'one'], [2, 'two']]),
    e: {
        a: {
            b: new Date()
        }
    },
    f: new Date(),
    g: new Set([1, 2, 3]),
    q: () => {}
}
let newObj = deepClone(obj)
obj.e.a = 2
console.log("obj", obj)
console.log("newObj", newObj)