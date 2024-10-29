let myArray = [2323, 4344, 2325, 324413, 21234, 24531, 2123, 42234, 544, 456, 345, 42, 5445, 23, 5656, 423];
/*La didefrencia entre el for in es que este accede a los indices, 
y los for of a sus valores */

// Your code here

const CalculoDePromedios = (arr) => {
    let total = 0;
    arr.forEach(element => {
        total = total + element;
    });

    let promedio = total / arr.length;
    return promedio;
}
console.log(CalculoDePromedios(myArray));