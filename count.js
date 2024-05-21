const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
}
  
function get(obj, key){
    let key2 = key.replaceAll("[", ".").replaceAll("]", "").split(".")

    let tmp = obj
    while(key2.length > 0){
        let keyname = key2.shift()
        tmp = tmp[keyname]
    }
    return tmp;
}

function set(obj, key, value){
    let key2 = Array.isArray(key) ? key : key.replaceAll("[", ".").replaceAll("]", "").split(".")

    let tmp = obj;
    key2.map( (k, index, arr) => {
        if(index == key2.length - 1){
            tmp[k] = value
        }else{
            if (!tmp.hasOwnProperty(k)) {
                const next = arr[index + 1];
                tmp[k] = typeof next == 'object' ? {} : []; // create a new object if next is item in array is not a number
            }
            tmp = tmp[k];
        }   
    })

    return obj
}

function compare(a, b){
    let Arr = a.split(".")
    let Arr2 = b.split(".")

    let status = 0

    for (let index = 0; index < Arr.length; index++) {
        const tmp = parseInt(Arr[index], 10);
        const tmp2 = parseInt(Arr2[index], 10);

        if(status == 0){
            if(tmp > tmp2){
                status = 1
            }else if(tmp < tmp2){
                status = -1
            }
        }
    }
    return status;
}
