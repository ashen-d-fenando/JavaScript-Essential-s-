let lenght;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = lenght * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}



//Calculate total amount 

let  grocery1;  
let grocery2;
let grocery3; 

function calTotal(){
    grocery1 = parseFloat( document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let total = grocery1 + grocery2 + grocery3;
    console.log(total);

    document.getElementById("total").innerHTML = `The area of the rectangle is: ${total}`;
}
