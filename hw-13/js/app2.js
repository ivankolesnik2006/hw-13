function arrayWithUserData() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const columns = parseInt(prompt("Enter the number of columns:"));

    const userArray = [];

    for (let i = 0; i < rows; i++) {
        const innerArray = [];
        for (let j = 0; j < columns; j++) {
            const value = parseFloat(prompt(`Enter the value for element at position [${i}][${j}]:`));
            innerArray.push(value);
        }
        userArray.push(innerArray);
    }

    return userArray;
}

const userArray = arrayWithUserData();

console.log("User array:", userArray);