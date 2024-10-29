let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
/* Solucion preferible */

const mergeTwoList = (arr) => {
     let odd = arr.filter((number) => number % 2 !=0);
     let even = arr.filter((number) => number % 2 ===0);
     return odd.concat(even);
}


console.log(mergeTwoList(listOfNumbers));

/*
function mergeTwoList(arr){
    let odd = [];
    let even = [];

   for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2!=0) {
            odd.push(arr[i])
        }else{
            even.push(arr[i])
        }
   }
   return odd.concat(even);
}
console.log(mergeTwoList(listOfNumbers))
*/
