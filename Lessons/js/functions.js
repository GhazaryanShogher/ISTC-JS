
    for (var i = 0; i <= 100; i++) {
        if( i% 5 == 0) {
            continue;
        }
        if (i% 6 == 0){
            var y = i + 2;
        }
        console.log(y);  
    }
    // undefined haytararc arjeq chunecox
    //not defined chhaytararac

    //function decleration
    function product (parametr1, parametr2) {
        return parametr1 * parametr2;
    }
   console.log(product (2,5));
   console.log(product (2,5));
   
    // function decleration ev function expretion

    // expration 
    var product = function () {
        return 3 * 6;
    }
    console.log(product());

     function multiply (parametr1, parametr2 = 6) {
        return parametr1 * parametr2;
    }
    console.log(multiply (2));
    
    