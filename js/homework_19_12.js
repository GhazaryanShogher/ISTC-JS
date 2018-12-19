//find the first unique element in  string
var str = 'abacddbec';
var arr1 = str.split('');
var cnt = 0;
console.log(arr1);

function checkUnique(arr){
    for(var i = 0; i<arr.length; i++){
        for(var j=0; j<arr.length;j++){
            if(arr[i]==arr[j]){
                cnt++;
            } 
            console.log("cnt",cnt);
        }
        if(cnt == 1){
            return arr[i];
        } else cnt = 0;             
    }
}
console.log(checkUnique(arr1));