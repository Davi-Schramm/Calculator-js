let add = (n1,n2) => n1+n2;

let subtract = (n1,n2) => n1-n2;

let multiply = (n1,n2) => n1*n2;

function divide(n1,n2){
    if(n2 != 0){
        return n1/n2;
    }
}

function operate(){
    n2 = Number(document.getElementById("display").textContent);
    if(operator == '+'){
        document.getElementById("display").innerText = add(numbo,n2);
    }
    else if(operator == '-'){
        document.getElementById("display").innerText = subtract(numbo,n2);
    }
    else if(operator == '*'){
        document.getElementById("display").innerText = multiply(numbo,n2);
    }
    else if(operator == '/'){
        if (n2 == 0){alert("Can't divide by 0")}
        else{
        document.getElementById("display").innerText = divide(numbo,n2);
        }
    }
}

function getanumbo(numb){
    document.getElementById("display").innerText += numb;
    var number = document.getElementById("display").textContent;
    number = Number(number);
    document.getElementById("display").innerText = number;
};

function operater(op){
    operate();
    numbo = Number(document.getElementById("display").textContent);
    document.getElementById("display").innerText = 0;
    operator = op;
};


let numbo = 0;
let operator = '+';

function reset(){
    numbo = 0;
    operator = '+';
    document.getElementById("display").innerText = 0;
}

function redirect(symbol){
    
}