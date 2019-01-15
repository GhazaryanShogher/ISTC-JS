function red(){
    document.getElementById("red-circle").style.animationName = "red";
}
function black(){
    document.getElementById("black-circle").style.animationName = "black";
}
function red1(){
    document.getElementById("red-circle").style.animationName = "red1";
}
function black1(){
    document.getElementById("black-circle").style.animationName = "black1";
}

function change(){
    var cnt  = true;
    if(cnt) {
        red();
        black();
        cnt = false;
    } else { 
        black1();
        red1();
        cnt = true;
    }    

    
}