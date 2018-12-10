//decimal
    function decimalNumber(number,part){
        return number.toPrecision(part);

    }
    console.log(decimalNumber(8.12678,4));
// checking if the number is natural
    function isNaturalNumber(num){
        if(typeof num == "number" && parseInt(num)==num && Math.abs(num)==num){
            console.log (+ num + " is a natural number");        
        } else  console.log(+ num + " is not a natural number");
    }
    isNaturalNumber(9.67)