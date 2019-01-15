function menu(){
    var element = document.getElementById("menu");
    console.log(element.length);
   if(element.classList.contains("hidden")){
       element.classList.remove("hidden");       
   } else{
    element.className = "hidden";
   }
}