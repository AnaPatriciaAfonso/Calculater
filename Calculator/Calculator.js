var firstMathExpression=null;

function insert(){
    document.getElementById("resultado").innerHTML = "0";
}

function pressNumber(number){
    var resultado = document.getElementById("resultado").innerHTML 

    if ((resultado=="0" || resultado=="E") && number!="."){
        document.getElementById("resultado").innerHTML=number;
    }
    
    else if (resultado.length<9 && resultado.substring(0,1)=="-")
    {
        document.getElementById("resultado").innerHTML=resultado+number;
    }
    else if (resultado.length<8 && resultado.substring(0,1)!="-")
    {
        document.getElementById("resultado").innerHTML=resultado+number;
    }
}

function pressPositiveNegative(){
    var resultado = document.getElementById("resultado").innerHTML 
    var firstchar = resultado.substring(0,1)
    if (firstchar=="-"){
        document.getElementById("resultado").innerHTML=resultado.substring(1,resultado.length);
    }
    
    else if (firstchar!="0")
    {
        document.getElementById("resultado").innerHTML="-"+resultado;
    }
}

function pressC(){
    document.getElementById("resultado").innerHTML = "0"; 
    firstMathExpression="";
}

function pressCE(){
    document.getElementById("resultado").innerHTML = ""; 
}

function pressCLEAR(){
    var resultado = document.getElementById("resultado").innerHTML 
    
    if (resultado.length==1){
        document.getElementById("resultado").innerHTML="0";
    }
    else
    {
        document.getElementById("resultado").innerHTML = resultado.substr(0, resultado.length-1);
    }   
}


function pressOperation(operation){
    var resultado = document.getElementById("resultado").innerHTML

    switch (operation) {
        case '/':
            firstMathExpression=resultado + "/"; 
            document.getElementById("resultado").innerHTML="";
            break;
        case '*':
            firstMathExpression=resultado + "*"; 
            document.getElementById("resultado").innerHTML="";
            break;
        case '-':
            firstMathExpression=resultado + "-"; 
            document.getElementById("resultado").innerHTML="";
            break;
        case '+':
            firstMathExpression=resultado + "+"; 
            document.getElementById("resultado").innerHTML="";
            break;
    }
}

function pressResult(){
    var resultado = document.getElementById("resultado").innerHTML

    var mathExpression=firstMathExpression+resultado;

    document.getElementById("resultado").innerHTML=eval(mathExpression);

}


function myFunction() {
    var modeON = document.getElementById("modeDayNight").innerHTML
    
    switch(modeON){
        case "Day Mode":
            document.getElementById("modeDayNight").innerHTML="Night Mode"
            document.getElementById("Style").href="styles/black.css";
            break
        case "Night Mode":
            document.getElementById("modeDayNight").innerHTML="Day Mode"
            document.getElementById("Style").href="styles/white.css";
            break
    }
 }