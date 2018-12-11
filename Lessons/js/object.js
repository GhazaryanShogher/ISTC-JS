var str = "name";
    var obj = {
        name: "Edgar",
        surname: "Sargsyan"
    }
    for (var key in obj){
        console.log("key",key)
        if (str ===key) {
            console.log("the same")
        }
        console.log("value",obj[key])
    }

    var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    year     : 2018,
    birth    : 1990,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
person.age = function(){
    return this.year - this.birth;
}
person.text = function(){
    return "This is your full name " + this.firstName + " " + this.lastName;
}
console.log(person.text())
console.log(Object.values(person));
console.log(Object.keys(person));
