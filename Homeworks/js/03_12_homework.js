
  var obj = {
    name: "Edgar",
    surname: "Sargsyan",
    country: "Russia",
    birth: 2014,
    date: 2018,
    age: function(){
       return this.date - this.birth;
    }
    
}
// gorcoxutyunner objecti methodnerov
obj.adult = function(){
      return 18 - this.age();
}

      console.log(obj.adult())
// checf the object has this property
function checkObjProprty(prop){
    var key = Object.keys(obj).indexOf(prop);
    var value = Object.values(obj).indexOf(prop);
    if(key!=-1){
        console.log("Yes it is a key");
    } else if(value!=-1) {
      console.log("Yes it is a value");
    }
}
checkObjProprty("age");

// deleting the 3th key
function deleting3th(object){
    var cnt = 0;
    for(var key in object){
        cnt ++;
        if(cnt == 3){
          delete object.key;
          console.log(object.key);
          return;
        } 
    }
}

deleting3th(obj);

//return object length
function objLength(object){
    var length = Object.keys(object).length;
    console.log("object length = ",length);
}
objLength(obj);