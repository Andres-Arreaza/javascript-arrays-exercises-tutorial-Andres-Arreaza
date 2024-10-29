// Your code here
const matrixBuilder = (num) => {
    let matrix = [];
    for (let i = 0; i < num; i++) {
        let row = [];
        for (let j = 0; j < num; j++) {
            let numRandom = Math.floor(Math.random()+0.5);
            row.push(numRandom);
        }
        matrix.push(row);
    }
    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
