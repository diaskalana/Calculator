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
let operation;

// To display to screen
function addToScreen(array) {
    calScreen.textContent = array.join('')
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
    // console.log('check')
    operation = op
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
    } else if (event.target.id.startsWith('num')) {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

    if (event.target.id === 'divide') {
        initOperation('divide')

    }

    if (event.target.id === 'multiply') {

        initOperation('multiply')

    }

    if (event.target.id === 'plus') {
        initOperation('plus')

    }

    if (event.target.id === 'minus') {
        initOperation('minus')


    }

    if (event.target.id === 'equal') {

        if (operation == 'divide') {
            if (numSet[0] != 0) {
                result = convertToNumber(numSetTwo) / convertToNumber(numSet)
                displayResult(result)
            } else {
                alert("Can't divide by 0!")
            }
        } else if (operation == 'multiply') {
            result = convertToNumber(numSetTwo) * convertToNumber(numSet)
            displayResult(result)

        } else if (operation == 'plus') {
            result = convertToNumber(numSetTwo) + convertToNumber(numSet)
            displayResult(result)
        } else if (operation == 'minus') {
            result = convertToNumber(numSetTwo) - convertToNumber(numSet)
            displayResult(result)
        }

    }

})
