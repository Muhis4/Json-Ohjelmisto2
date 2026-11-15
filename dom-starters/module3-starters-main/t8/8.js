const operator = document.getElementById("operation");
const calculateBtn = document.getElementById("start");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){
    const selectedOperator = operator.value;
    const intOne = Number(document.getElementById("num1").value);
    const intTwo = Number(document.getElementById("num2").value);
    let answer  = 0;
    if(selectedOperator == "add")
    {
        answer  = intOne + intTwo;
    }
    else if(selectedOperator == "sub")
    {
        answer  = intOne - intTwo;
    }
    else if(selectedOperator == "multi")
    {
        answer  = intOne * intTwo;
    }
    else if(selectedOperator == "div")
    {
        answer  = intOne / intTwo;
    }

    result.innerHTML = answer;
})


