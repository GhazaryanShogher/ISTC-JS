
  //the sum of odd numbers between 0 - 100
  var sum = 0;
  for (var i = 1; i <= 100; i++) {
      if (i % 2 == 0){
        sum += i;
      }      
  }
  console.log("sum=",sum);

 //the sum of odd numbers between 0 - 100
  for (var i = 1; i <= 100; i++) {
      if (i % 2 == 0){
        console.log(i);
      }      
  }
  // 3-i && 4-i bajanvox tver@
  for (var i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 4 ==0){
        console.log(i);
      }      
  }