let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    const newArray = [];
    firstArray.forEach(function(name){
        newArray.push(name);
    });

    secondArray.forEach(function(name){
        newArray.push(name);
    })
    return newArray;
}

console.log(mergeArrays(chunkOne, chunkTwo));

