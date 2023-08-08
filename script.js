



function solve(data){
    
    result=eval(data);
    updateDisplay(result, answer=true);
}

function updateDisplay(e,var answer=false){
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
