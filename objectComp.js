function multiplyStrings(num1, num2) {
    let len1 = num1.length, len2 = num2.length;

    let result = []
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = num1[i] * num2[j];
            if(!result[i + j + 1]){
                result[i + j + 1] = 0
            }

            let sum = result[i + j + 1] + mul;
            
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    result.shift();

    return result.length ? result.join('') : '0';
}

let num1 = '1234567867654564564654897646';
let num2 = '1234567867654564564654897646';
console.log(multiplyStrings(num1, num2)); // 输出结果