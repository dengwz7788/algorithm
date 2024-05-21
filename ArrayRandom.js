function ArrayRandom(Arr){
    
    for (let i = 0; i < Arr.length - 1; i++) {
        if( Math.random() > 0.5 ){
            let tmp = Arr[i]
            Arr[i] = Arr[i + 1]
            Arr[i + 1] = tmp
        }
    }

    return Arr;
}

let Arr = [1,2,3,4,5,6]
console.log("Arr", ArrayRandom(Arr))