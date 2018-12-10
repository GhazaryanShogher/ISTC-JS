
    function strUpercase(string) {
        var arr = string.split(" ");
        var str = "";
         for(i = 0; i<arr.length; i++){
            var rep = arr[i];
           var strUpercase = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
           str =str.concat(' ',strUpercase);     
         }
         return str;
     }
    console.log(strUpercase("hello world"));