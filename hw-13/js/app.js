function calculateEach(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }


    if (count > 0) {
        return sum / count;
    } else {
        return "У масиві відсутні числові елементи";
    }
}

const array = [31, 23, 15];
console.log(calculateEach(array)); 