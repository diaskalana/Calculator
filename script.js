const year = document.querySelector('.year')
const calScreen = document.querySelector('.cal-screen > p')
const regularButtons = document.querySelector('.regular-buttons')
const clearBtn = document.querySelector('#clearBtn')
const deleteBtn = document.querySelector('#deleteBtn')

year.textContent = new Date().getFullYear();
calScreen.textContent = 0;
const numSet = [0]
let numSetTwo = []
let result = 0;
let operation = null;
const operatorElement = document.createElement('span')
operatorElement.classList.add('operator')

// To display to screen
function addToScreen(array) {
    calScreen.textContent = array.join('')
    if (operation != null) {
        calScreen.appendChild(operatorElement).textContent = operation

    }
}

function convertToNumber(array) {
    return Number(array.join(''))
}

function displayResult(res) {
    res = String(res)
    if (res.length > 9) {
        alert("Note that only the first 9 or 8 characters are shown!")
        res = res.substring(0, 9)
        if (res.endsWith('.')) {
            res = res.substring(0, 8)
        }
    }
    calScreen.textContent = res;
}

function initOperation(op) {
    numSetTwo = [...numSet]
    numSet.splice(0, numSet.length)
    numSet[0] = 0
    addToScreen(numSet)
    operation = op
    calScreen.appendChild(operatorElement).textContent = op
}

// To enable delete function
deleteBtn.addEventListener('click', () => {
    if (numSet.length == 1) {
        numSet[0] = 0
        addToScreen(numSet)

    }
    if (calScreen.textContent != 0) {
        numSet.pop()
    }
    if (result != 0) {
        numSet.splice(0, numSet.length)
        numSet[0] = 0
        result = 0

    }
    addToScreen(numSet)
})

// To enable clear function
clearBtn.addEventListener('click', () => {
    numSet.splice(0, numSet.length)
    numSet[0] = 0
    addToScreen(numSet)
})

// To capture number pad events
regularButtons.addEventListener('click', (event) => {

    if (numSet.length < 8) {
        if (event.target.id.startsWith('num')) {
            if (numSet[0] == 0 && numSet[1] == ".") {
                // Do nothing
            } else if (numSet[0] == 0) {
                numSet.pop()
            }
            numSet.push(event.target.textContent)
        }
        if (event.target.id === 'period') {
            if (!numSet.includes('.')) {
                numSet.push('.')
            }
        }
        if (result != 0) {
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            result = 0

        }
    } else if (event.target.id.startsWith('num')) {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

    if (event.target.id === 'divide') {
        initOperation('Division')

    } else if (event.target.id === 'multiply') {
        initOperation('Multiplication')
    } else if (event.target.id === 'plus') {
        initOperation('Addition')
    } else if (event.target.id === 'minus') {
        initOperation('Subtraction')
    } else if (event.target.id === 'equal') {

        if (operation == 'Division') {
            if (numSet[0] != 0) {
                result = convertToNumber(numSetTwo) / convertToNumber(numSet)
                displayResult(result)
            } else {
                alert("Can't divide by 0!")
            }
        } else if (operation == 'Multiplication') {
            result = convertToNumber(numSetTwo) * convertToNumber(numSet)
            displayResult(result)

        } else if (operation == 'Addition') {
            result = convertToNumber(numSetTwo) + convertToNumber(numSet)
            displayResult(result)
        } else if (operation == 'Subtraction') {
            result = convertToNumber(numSetTwo) - convertToNumber(numSet)
            displayResult(result)
        }
        operation = null

    }

})

// To add keyboard support
document.addEventListener('keydown', (event) => {
    const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (numSet.length < 8) {

        if (numList.includes(Number(event.key))) {
            if (numSet[0] == 0 && numSet[1] == ".") {
                // Do nothing
            } else if (numSet[0] == 0) {
                numSet.pop()
            }
            numSet.push(event.key)
        }
        if (event.key == '.') {
            if (!numSet.includes('.')) {
                numSet.push('.')
            }
        }
        if (result != 0) {
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            result = 0

        }
    } else if (numList.includes(Number(event.key))) {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

    if (event.key === '/') {
        initOperation('Division')

    } else if (event.key === '*') {
        initOperation('Multiplication')
    } else if (event.key === '+') {
        initOperation('Addition')
    } else if (event.key === '-') {
        initOperation('Subtraction')
    } else if (event.key === '=') {

        if (operation == 'Division') {
            if (numSet[0] != 0) {
                result = convertToNumber(numSetTwo) / convertToNumber(numSet)
                displayResult(result)
            } else {
                alert("Can't divide by 0!")
            }
        } else if (operation == 'Multiplication') {
            result = convertToNumber(numSetTwo) * convertToNumber(numSet)
            displayResult(result)

        } else if (operation == 'Addition') {
            result = convertToNumber(numSetTwo) + convertToNumber(numSet)
            displayResult(result)
        } else if (operation == 'Subtraction') {
            result = convertToNumber(numSetTwo) - convertToNumber(numSet)
            displayResult(result)
        }
        operation = null

    }

    if (event.key == "Backspace") {
        if (numSet.length == 1) {
            numSet[0] = 0
            addToScreen(numSet)

        }
        if (calScreen.textContent != 0) {
            numSet.pop()
        }
        if (result != 0) {
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            result = 0

        }
        addToScreen(numSet)
    } else if (event.key == "Escape" || event.key == "Delete") {
        numSet.splice(0, numSet.length)
        numSet[0] = 0
        addToScreen(numSet)
    }
})
