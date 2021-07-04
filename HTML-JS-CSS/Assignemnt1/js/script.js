function Operation(operator) {

    var operand1 =Number( document.getElementById("one").value);
    var operand2 = Number(document.getElementById("two").value);
    var result;
    if(operator=="+")
    {
    result=operand1+operand2
    }
    else if(operator=="-"){
        result=operand1-operand2
    }
    else if(operator=="*"){
        result=operand1*operand2
    }
    else{
        result=operand1/operand2
    } 
    document.getElementById("result").value=result
    console.log(result);
    
    }