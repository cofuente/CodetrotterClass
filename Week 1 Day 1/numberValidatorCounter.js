function validate(){
var num = document.getElementById('num').value;
num = parseInt(num);    
    if(isNaN(num))
        alert("Error! Please enter a number")
    else{
        var output = document.getElementById('output');
        while(num-- >= 0){
            console.log(num);
            output.innerHTML = num;
                 
        }
    }
}