
   // checking if number is prime
   function isPrime(number){
    var cnt = 0;
    if (number == 1){
        return "Number is not prime";
    } else {
    for (i=2; i<number; i++){
        if (number % i == 0){
            cnt ++;
        }
        if (cnt > 2) {
         return "Number is not prime";
        } else return "Number is prime";
        }
    }
}
console.log(isPrime(3));
console.log(isPrime(10));
console.log(isPrime(7));
// checking type
function checkType(number) {
    var objTypes = {
        number: "number",
        string: "string",
        object: "object",
        boolean: "boolean",
        function: "function",
        undef: "undefined"
    };
    var typeOfNumber = typeof(number);
    var key;
    for(key in objTypes) {
        if (typeOfNumber == objTypes[key])
     return typeOfNumber;
    }
}
console.log('3',checkType(true));
isNaN("0l") 
//sqrt
function mySqrt (number) {
    if (typeof(number) == "number") {
     var sqrtOfNumber = number * number;
     return sqrtOfNumber;
    }  else alert("please enter a number");     
    
}
console.log (mySqrt("jdh"));

// create object
function creatObj (par1,par2,par3) {
    var obj = {
     name:par1,
     surname:par2,
     age:par3
     }
     return obj;
}  
console.log(creatObj("Karen","Ghazaryan","25"));
var x = 123;
var y = new Number(123);
z = new String(123);
console.log("z",typeof(z));
console.log("y",typeof(y));
console.log("x",typeof(x));
console.log("2",x == y)
console.log("1",x === y)
console.log(Number.isNaN(10/"aa"));