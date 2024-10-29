let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below

const deletePerson = (name) => {
    const newPeople = people.filter((person) => person !=name);
    return newPeople;
}



console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
