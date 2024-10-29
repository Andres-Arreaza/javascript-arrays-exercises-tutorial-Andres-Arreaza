let arrayOfCelsiusValues = [-2, 34, 56, -10];

const convertCelsiusToFahrenheit = (value) => {
    return (value * 9.0 / 5.0) + 32.0;
};

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(convertCelsiusToFahrenheit);

console.log(arrayOfFahrenheitValues);
