  // using and (&&) in if
  var x = 7;
  var y = 9;

  if (x > 0 && y > 0) {
      z = x * y;
      console.log(z);
  } else console.log("Not if");

      // using or (&&) in if
  var x = "aaa";
  var y = "bbb";

  if (x === "aaa" || y === "aaa") {
      z = x + y;
      console.log(z);
  } else console.log(x);

  // if else if
  var x = 15;
  var y = 10;
  if (x % 3 == 1) {
      alert ("ok");
  } else if (y % 2 == 1) {
      alert ("hi");
  } else {
      alert ("else");
  }

  // if else if else
  var x = 15;
  var y = 10;
  if (x % 3 == 1) {
      alert ("ok");
  } else if (y % 2 == 0) {
      alert ("hi");
  } else {
      alert ("else");
  }

  // object with age
  var obj = {
      age: 20
  }
  if (obj.age >= 18) {
      alert ("Hello world");
  } else {
      alert ("Bye");
  }
