function menu(){
    var element = document.getElementById("menu");
   if(element.classList.contains("hidden")){
       element.classList.remove("hidden");       
   } else{
    element.className = "hidden";
   }
}