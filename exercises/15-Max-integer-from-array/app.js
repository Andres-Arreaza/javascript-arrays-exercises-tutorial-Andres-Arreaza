let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Your code here

const findMax = (arr) => {
    let numberMax = arr[0];
    arr.forEach(num => {
        if(num > numberMax){
            numberMax = num;
        }
    });
    return numberMax;
}

console.log(findMax(myArray));


/*
const findMax = (arr) => {
    let numMax = arr[0];

    arr.forEach(element => {
        if(element > numMax){
            numMax = element;
        }
    });

    return numMax
}

console.log(findMax(myArray));
*/