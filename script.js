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
    num1 = parseInt(num1)
    num2 = parseInt(num2)

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

let currNum = ''
let currOperand = ''
let firstNum = ''
let operator = ''
let secondNum = ''
let result = ''
const display = document.querySelector('.display p')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            currNum = ''
            currOperand = ''
            firstNum = ''
            operator = ''
            secondNum = ''
            display.textContent = 0
            console.log(firstNum)
        } else if (button.classList.contains('operator')) {
            if (currOperand === '' && currNum === '') {
                console.log('no currNum so nothing happened')
                return
            } else {
                const getOpe = button.textContent
                currOperand = currNum + ' ' + getOpe + ' '
                display.textContent = currOperand
                console.log('operator added')
                
                if (firstNum === '') {
                    firstNum = currNum
                    console.log('saving firstNum')
                    console.log(firstNum)
                    console.log(currOperand)
                    operator = getOpe
                    currNum = ''
                } else if (secondNum === '') {
                    currOperand = firstNum + ' ' + getOpe + ' '
                    operator = getOpe
                    display.textContent = currOperand
                    console.log('changed/kept same operator. nothing happened')
                    console.log(currOperand)
                } else {
                    result = operate(firstNum, operator, secondNum)
                    firstNum = result
                    currOperand = firstNum + ' ' + getOpe + ' '
                    display.textContent = currOperand
                    operator = getOpe
                    secondNum = ''
                    currNum = ''
                }
            }
        }  else if (button.classList.contains('equal')) {
            console.log('pressed equals')
            if (currNum === '' || firstNum === '' || secondNum === '' || operator === '') {
                console.log('nothing happened')
                return
            } else {
                console.log('something happened')
                console.log(secondNum)
                result = operate(firstNum, operator, secondNum)
                display.textContent = result
                currNum = ''
                firstNum = result
                secondNum = ''
            }
        } else {
            const getValue = button.textContent
            if (firstNum === '') {
                currNum = currNum + getValue;
                display.textContent = currNum;
                console.log('adding to firstNum set')
            } else {
                currNum = currNum + getValue
                secondNum = currNum
                display.textContent = currOperand + currNum
                console.log('adding to secondNum set')
            }
        }
    })
})

