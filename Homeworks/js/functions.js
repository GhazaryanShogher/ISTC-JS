 // calculator

     function calculator (parametr1, action, parametr2) {
          if (typeof parametr1 == "number" && typeof parametr2 == "number") {
            switch (action) {
            case "+":
            return parametr1 + parametr2;
            case "-":
            return parametr1 - parametr2;
            case "*":
            return parametr1 * parametr2;
            case "/":
            if (parametr2 != 0) {
            return parametr1 / parametr2;
            } else alert ("parametr2 can not be 0");
            case "%":
            return parametr1*parametr2/100;
            default: 
            return "Second parametr is not action";
            }
          } else return "First and thrdth parametrs must be numbers";
     }     
     console.log(calculator(12, "/", 3));

     // check the type of paramets
     // if all are numbers add, if all are have string type then concat

     function typeofParametrs(parametr1,parametr2,parametr3){
            console.log("The type of parametr1 is " + typeof parametr1 + ";", "The type of parametr2 is " + typeof parametr2 +";", "The type of parametr3 is " +  typeof parametr3 +";");
            if (typeof parametr1 == "number" && typeof parametr2 == "number" && typeof parametr3 == "number") {
                var sum = parametr1 + parametr2 + parametr3;
                console.log ("sum = ", sum);
            } else if (typeof parametr1 == "string" && typeof parametr2 == "string" && typeof parametr3 == "string") {
                var text = parametr1  + parametr2 + parametr3;
                console.log(text);
            } else console.log("All parametrs must be number or string");
        }
        typeofParametrs(5,2,8);
