const x = document.getElementById('number1');
const y = document.getElementById('number2');
const result = document.getElementById('result');

function calculate(operator) {
    const num1 = parseInt(x.value);
    const num2 = parseInt(y.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = "Please enter a valid number"
        return
    }

    switch (operator) {
        case '+' :
            result.innerText = `Sum: ${num1 + num2}`
        break
        case '-' :
            result.innerText = `Sub: ${num1 - num2}`

        break
        case '*' :
            result.innerText = `Multiplication: ${num1 * num2}`
        break
        case '/' :
            if (num2 === 0 || num1 === 0) {
                result.innerText = "Connot divide by zero"
            } else {
                result.innerText = `divide: ${num1 / num2}`

            }
        break
        default: 
            result.innerHTML = "Enter a valid number"
    }

}