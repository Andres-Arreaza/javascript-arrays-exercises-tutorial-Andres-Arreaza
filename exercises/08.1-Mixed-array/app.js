let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here

let newMix = [];
mix.forEach(function(element){
    newMix.push(typeof element);
})
console.log(newMix);