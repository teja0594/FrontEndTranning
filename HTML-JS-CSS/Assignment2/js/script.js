function Operation(buttonValue)
{
    if(buttonValue=="")
    {
        document.getElementById("display").value = ""
    }
    else if(buttonValue=="back")
    {
       var modifiedExpression =  document.getElementById("display").value.slice(0,-1);
       console.log(modifiedExpression)
       document.getElementById("display").value =modifiedExpression 
    }
    else if(buttonValue=="solve")
    {
        var expression = document.getElementById("display").value
        console.log(expression)
        var result = eval(expression)
        document.getElementById("display").value = result
        console.log(result);   
    }
    else{
        document.getElementById("display").value+=buttonValue
    }
}
function Style(num)
{
        document.getElementById("styles").href=`../RealTimeCalculator/css/style${num}.css`
}
