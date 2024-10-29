let contact = {
    fullName: "John Doe",
    phone: "123-123-2134",
    email: "test@nowhere.com"
}

for(let key in contact){
    let data = key +" : "+ contact[key];
    console.log(data);
}
