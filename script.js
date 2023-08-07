

var num1=0, num2=0;
function sub(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 - num2;
}
function add(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1+num2;
}
function divide(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 / num2;
}
function mult(num1, num2){
    num1=Number(num1)
    num2=Number(num2)
return num1 * num2;
}




function solve(data){
    
    data=data.replace(/\s/g,'')
    
    var validNums=[1,2,3,4,5,6,7,8,9,0];
while (data.contains("x")){

for (var i=0; i<data.length; i++){
if (data[i]=="x"){}
}

}
    updateDisplay(result, answer=true);
}



console.log(num1)
    console.log(operator)
    console.log(num2)
    switch(operator){
        case "+":
            var result= add(num1, num2);
            break;
        case "-":
            var result= sub(num1, num2);
            break;
        case "x":
            var result= mult(num1, num2);
            break;
        case "/":
            if (num2=="0"){
                var result="Infinity";
            }else{
            var result= divide(num1, num2);
        }
            break;
    }
    document.querySelector(".display").textContent=result;
}

function updateDisplay(e, answer=false){
    if(answer){
document.getElementById("display").textContent=e;
return;
}
document.getElementById("display").textContent+=e.target.textContent;
	
}
var numKeys=document.querySelectorAll(".numKey");

numKeys.forEach(numKeys =>
    numKeys.addEventListener('click', e => updateDisplay(e)));
numKeys=document.querySelectorAll(".opKey");
numKeys.forEach(numKeys => 
    numKeys.addEventListener("click", function(e){document.querySelector(".display").textContent+=e.target.textContent; operation=e.target.textContent;}))
numKeys=document.querySelector(".equal");
numKeys.addEventListener("click",function(){solve(document.querySelector(".display").textContent)})
console.log(document.querySelectorAll(".opKey")[0].textContent)
