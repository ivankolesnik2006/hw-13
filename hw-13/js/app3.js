function createRemaker(chars_to_remove) {
    return function(input_str) {
        let result = '';

        for (let i = 0; i < input_str.length; i++) {
            let char = input_str[i];
            if (!chars_to_remove.includes(char)) {
                result += char;
            }
        }

        return result;
    }
}

let remover = createRemaker(['l', 'd']);

let output = remover(" hello world");
console.log(output);
