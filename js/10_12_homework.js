// function concat
function concatStr(str, param){
    if(param > 1 && typeof(str)=="string") {
        var string = "";
        string = str.repeat(param);
    } else {
        string = string.concat(str);
    }
    return string;
}

console.log("str=", concatStr("hello world",4));

// if the element of array is array return in a new array
function checkIsArray(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr.push(arr[i]);
        }       
    }    
    return newArr; 
}

console.log(checkIsArray([2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6]));

//check if it is Palindrome
function checkPalindrome(str){
    string = str.split('').reverse().join('');
    if(str === string){
        return str  + " is Palindrome";
    } else {
        return str  + " is not Palindrome";
    }
}

console.log(checkPalindrome("hello"));
console.log(checkPalindrome("mam"));
