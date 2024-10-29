let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach(element => {
        return_array.push(element ===1 ? element : 'Yahoo');
    });
    return return_array;
}
console.log(ZerosToYahoos(myArray));