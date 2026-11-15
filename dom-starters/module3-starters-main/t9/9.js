const calculation = document.getElementById("calculation");
const button = document.getElementById("start");
const result = document.getElementById("result");

button.addEventListener("click", function(){
    let numbers = calculation.value.split(/[+\-/*]/);
    
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    
    if(calculation.value.includes("+")){
        result.innerHTML = num1 + num2;
    }
    if(calculation.value.includes("-")){
        result.innerHTML = num1 - num2;
    }
    if(calculation.value.includes("/")){
        result.innerHTML = num1 / num2;
    }
    if(calculation.value.includes("*")){
        result.innerHTML = num1 * num2;
    }
})