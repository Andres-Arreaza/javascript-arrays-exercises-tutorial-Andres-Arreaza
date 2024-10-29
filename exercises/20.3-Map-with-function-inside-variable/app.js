let names = ['Alice', 'Bob', 'Marry', 'Joe', 'Hilary', 'Stevia', 'Dylan'];

const prepender = (name) => {
	return 'My name is: ' +name;
}

let presentacion = names.map(prepender);
console.log(presentacion)
