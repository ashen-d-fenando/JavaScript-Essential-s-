function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    if(!isNaN(num1) && !isNaN(num2)){
        let result = perform_arithmetic_operation(num1,num2,operation);


        displayResult((result));
    }else{
        displayResult('Please Enter the valid Number');

    }
}

function perform_arithmetic_operation(num1,num2,operation){
    ;

    if(operation == '+'){
        debugger;
        return num1 + num2;
    }else if(operation == '-'){
        debugger;
        return num1 - num2;
    }else if(operation =='*'){
        debugger;
        return num1 * num2;
    }else if( operation == '/'){
        debugger;
        return num1 / num2;
        
    }

    
    
}

function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is : ${result}`;
}