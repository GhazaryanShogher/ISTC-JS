
    x = String(123);
    console.log(typeof(x)) // “123”

    var sentence = 'The quarter';
var index = 4;
console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));

var str1 = 'Hello';
var str2 = 'World';
console.log(str1.concat(' ', str2));
var str = 'Blue Whale';
 console.log(str.includes('Blue'));

console.log('Blue Whale'.indexOf('B'));     // returns  0
console.log('Blue Whale'.repeat('3'));     // returns  0

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "ISTC");
console.log(res);

var str = "How are you doing today?";
var res = str.split(" ");
console.log(res) // returns []

const str4 = 'Saturday night plans';
console.log(str4.startsWith('Sat',3));

var str5 = "Hello World!";
var res1 = str5.toLowerCase();
console.log(res1);  

var stringObj = "foo";
console.log(stringObj);
console.log(stringObj.toString());

function string1(num) {
    var type = typeof(num.toString());
    console.log(num.toString());
    console.log(typeof(type));
}

var x = string1(256);

function strToArray(string){
    var arr = string.split(" ");
    for (i in arr ) {
        console.log(arr[i]);
    }

}

strToArray("Saturday night plans is to Visit Microsoft!");

