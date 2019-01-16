function registration(){
    document.getElementById("card").style.display = "block"
    var name = document.getElementsByName("name")[0].value;
    var mail = document.getElementsByName("email")[0].value;
    var num = document.getElementsByName("tel")[0].value;
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = mail;
    document.getElementById("tel").innerHTML = num;           
}