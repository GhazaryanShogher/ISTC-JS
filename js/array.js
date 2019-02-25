var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Lemon,Kiwi,Apple,Mango
//console.log("1",fruits);
fruits.splice(1, 2); // Banana,Orange,Lemon,Kiwi,Mango

console.log(fruits);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // 1,5,10,25,40,100
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a}); // 100,40,25,10,5,1


//palidrom
function check(str){
    var string = str.toLowerCase().replace(/[\W_]/g,'');
    console.log('string = ',string);
    var strRevers = string.split('').reverse().join('');
    console.log('strRevers = ',strRevers);
    if(string==strRevers){
      return true;
    } else return false;
  }
  document.write(check('car jkij raC'));