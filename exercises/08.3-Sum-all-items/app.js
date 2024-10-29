function sumTheElements(theArray){
	let total = 0;
	for(let i=0; i <theArray.length; i++){
		let item = theArray[i];
		total += item; 
	}
	return total;
}

console.log(sumTheElements([2,13,34,5]))

/*
const sumTheElements = (theArray) => {
	let total = 0;
	theArray.forEach(element => {
		total = total + element;
	});
	return total;
}

console.log(sumTheElements([2,13,34,5]));

*/