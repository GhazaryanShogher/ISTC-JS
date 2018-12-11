
        var x = 5;
    function myFunct() {
        var y = 8;
        return y;
    }
    // self -invoked inqn iren kanchox brauser@ kanchec 
    (function myFunk(){
        alert(3+6);
    })();
    //console.log(y)

    // gtnel voreve mijakayqum 
    function sum (parametr1, parametr2){
        var sum = 0;
        var sum1 = 0;
        for (var i=parametr1; i<=parametr2;i++){
            sum += i;
        }
        console.log("sum from parametr1 to parametr2 = ",sum);
        for (var i=parametr2;i>=parametr1;i--){
            sum1 += i;
        }
        console.log("sum from parametr2 to parametr1 = ",sum1);
    }
    sum(7,10);

   // frofile function with object
   function profile (name, surname, age, gender){
      var data = {
           name:name,
           surname:surname,
           age:age,
           gender:gender
       }
       return data;
   }
   console.log ("personal data is ",profile ("Aram", "Aramyan", 25, "male"));