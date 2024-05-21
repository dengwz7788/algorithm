/**
 * promise.all
 * promise.race
 * promise.allSettled
 * promise.any
 * **/

// 请求请求

let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(123)
    }, 100)
})
let promise1 = new Promise( (resolve, reject) => reject(321))

/**
 * 一个reject则返回
*/
function _all(PromiseLen){

    let result = []
    return new Promise(function(resolve, reject){
        for (let index = 0; index < PromiseLen.length; index++) {
            const element = PromiseLen[index];
            
            element.then( res => {
                result[index] = res

                if(result.length == PromiseLen.length){
                    resolve(result)
                }

            }).catch( err => {
                reject(err)
            })
        }
    })
}

/**
 * 一个resolve则返回
*/
function _any(PromiseLen){
    let result  = []
    return new Promise(function( resolve, reject ){
        for (let index = 0; index < PromiseLen.length; index++) {
            const element = PromiseLen[index];

            element.then( res => {
                resolve(res)
            }).catch(err => {
                result.push(err)
                if(result.length == PromiseLen.length){
                    reject(result)
                }
            })
            
        }
    })
}

/**
 * allSettled
*/

function _allSettled(PromiseLen){
 return new Promise( function( resolve, reject ){
    let result = []
    for (let index = 0; index < PromiseLen.length; index++) {
        const element = PromiseLen[index];

        element.then( res => {
            let tmp = {
                status: 'fulfilled',
                value: res
            }

            result.push(tmp)

            if(result.length == PromiseLen.length){
                resolve(result)
            }
        }).catch( err => {
            let tmp = {
                status: 'reject',
                reason: err
            }

            result.push(tmp)

            if(result.length == PromiseLen.length){
                resolve(result)
            }
        })

    }
 })
}

/**
 * race 多个一起，谁先到，返回谁
 * **/

function _race(PromiseLen){
    return new Promise(function( resolve, reject ){
        for (let index = 0; index < PromiseLen.length; index++) {
            const element = PromiseLen[index];
            
            element.then( res => {
                resolve(res)
            }).catch( err => {
                reject(err)
            })
        }
    })
}

function _promise(){
  
 let that = this
 
 function resolve(value){
    if(this.status == 'pending'){
        this.status = 'fulfilled'
        this.value = value
    }
 }

 function reject(reason){
    if(this.status == 'pending'){
        this.status = 'reject'
        this.reason = reason
    }
 }


}


_race([promise, promise1]).then( res => console.log(res) ).catch( err => console.log(err))