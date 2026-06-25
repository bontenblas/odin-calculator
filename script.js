function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(num1, ope, num2) {
    if (ope === '+') {
        return add(num1, num2)
    }

    if (ope === '-') {
        return subtract(num1, num2)
    }

    if (ope === '*') {
        return multiply(num1, num2)
    }

    if (ope === '/') {
        return divide(num1, num2)
    }
}

// TODO:
//   - fix refresh when user presses C button
//   - fix equals not working
//   - figure out the secondNum problem


let currentNum = ''
let initOperand = ''
let firstNum = ''
let operator = ''
let secondNum = ''
const display = document.querySelector('.display p')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            currentNum = ''
            display.textContent = 0
        } else if (button.classList.contains('operator')) {
            if (currentNum === '') {
                return
            } else {
                const getOpe = button.textContent
                initOperand = currentNum + ' ' + getOpe + ' '
                operator = getOpe
                display.textContent = initOperand
                
                if (firstNum === '') {
                    firstNum = currentNum
                    console.log(firstNum)
                    console.log(initOperand)
                    currentNum = ''
                } 
                // else {
                //     secondNum = currentNum
                //     console.log(secondNum)
                // }
            }
        }  else if (button.classList.contains('equals')) {
            if (currentNum === '' || firstNum === '' || secondNum === '' || operator === '') {
                return
            } else {
                secondNum = currentNum
                console.log(secondNum)
                display.textContent = operate(firstNum, operator, secondNum)
            }
        } else {
            const getValue = button.textContent
            if (firstNum === '') {
                currentNum = currentNum + getValue;
                display.textContent = currentNum;
            } else {
                currentNum = currentNum + getValue
                display.textContent = initOperand + currentNum
            }
        }
    })
})

