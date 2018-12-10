
        // the param part of arr
        function arrayPart(arr, param){
            console.log("newArray =",arr.slice(0, param));
         }
         arrayPart(["name","surname","age","birthday","addres","number"],3);
     
     // return the most frequent item in arary
     function mostFrequentItem(arr){
         var cnt = 1;
         var times = 0;
         var item ;
         for (var i = 0; i<arr.length; i++){
             for (var j = i; j<arr.length; j++){
                 if(arr[i] == arr[j]){
                     times ++;
                     if(cnt<times){
                         cnt = times;
                         item = arr[i];
                     }
                 }
             }
             times = 0;
         }
         console.log(item + " "+ cnt + " times");
     }
     mostFrequentItem([7, 'a', 'a', 'a', 2, 7, 'a', 7, 'a', 2, 4, 9, 7]);
     
     //return the integer valuse of array
     function integerValues(arr){
         var newArr = [];
         var sum = 0;
         var product = 1;
         for (var i = 0; i< arr.length;i++){
             if (Number.isInteger(arr[i])){
                 newArr.push(arr[i]);
                 sum +=arr[i];
                 product *= arr[i];
             }
         }
         console.log(newArr);
         console.log("sum = ",sum);
         console.log("product = ",product);
     }
     
     integerValues([3,2.3,4.2,6,8,2,5]);
     
     //unique elements
     function uniqueElements(arr){
         var unique = [];
         var sortedArr;
         for (var i = 0; i<arr.length; i++){
             if(unique.indexOf(arr[i])== -1)
             unique.push(arr[i])
         }
         sortedArr = unique.sort(function(a,b){return a-b});
         console.log(sortedArr);
     }
     uniqueElements([3,2,3,4,2,6,8,2,5]);
     
     // shuffle array items
     function shuffleArr (arr){
         for (var i = arr.length-1; i >=0; i--) {
          
          var randomIndex = Math.floor(Math.random()*(i+1)); 
          var itemAtIndex = arr[randomIndex]; 
           
          arr[randomIndex] = arr[i]; 
          arr[i] = itemAtIndex;
      }
      return arr;
     } 
     
     console.log(shuffleArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
     x = 1;
     console.log('x='+x);
     var x;