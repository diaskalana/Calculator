const year = document.querySelector('.year')
const calScreen = document.querySelector('.cal-screen > p')
const regularButtons = document.querySelector('.regular-buttons')
const clearBtn = document.querySelector('#clearBtn')
const deleteBtn = document.querySelector('#deleteBtn')

year.textContent = new Date().getFullYear();
calScreen.textContent = 0;
const numSet = []
let numSetTwo = []
let result;
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

// To enable delete function
deleteBtn.addEventListener('click', () => {
    if (numSet.length == 1) {
        numSet[0] = 0
        addToScreen(numSet)

    }
    if (calScreen.textContent != 0) {
        numSet.pop()
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
            if (numSet[0] == 0) {
                numSet.pop()
            }
            numSet.push(event.target.textContent)
        }
        if (event.target.id === 'period') {
            if (!numSet.includes('.')) {
                numSet.push('.')
            }
        }
    }
    else {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

    if (event.target.id === 'divide') {

        if (numSet[0] != 0) {
            numSetTwo = [...numSet]
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            addToScreen(numSet)
            // console.log('check')
            operation = 'divide'
        }

    }

    if (event.target.id === 'multiply') {

        if (numSet[0] != 0) {
            numSetTwo = [...numSet]
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            addToScreen(numSet)
            operation = 'multiply'
        }

    }

    if (event.target.id === 'plus') {

        if (numSet[0] != 0) {
            numSetTwo = [...numSet]
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            addToScreen(numSet)
            operation = 'plus'
        }

    }

    if (event.target.id === 'minus') {

        if (numSet[0] != 0) {
            numSetTwo = [...numSet]
            numSet.splice(0, numSet.length)
            numSet[0] = 0
            addToScreen(numSet)
            operation = 'minus'
        }

    }

    if (event.target.id === 'equal') {
        if (numSet[0] != 0) {
            if (operation == 'divide') {
                result = convertToNumber(numSetTwo) / convertToNumber(numSet)
                // console.log(convertToNumber(numSetTwo), convertToNumber(numSet))
                displayResult(result)
            }
        } else {
            alert("Can't divide by 0!")
        }

        if (operation == 'multiply') {
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
