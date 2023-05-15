const userNumber = document.getElementById('userNumber');
let doubleNumber = document.getElementById('doubleNumber');
const button = document.querySelector('button');


const showNumber = () => {
    let firstNumber = userNumber.value;
    console.log(firstNumber);
    let double= (firstNumber*firstNumber);
    console.log(double);
    doubleNumber.value = double;
};

button.onclick = showNumber;
