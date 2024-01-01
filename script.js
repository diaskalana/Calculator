const year = document.querySelector('.year')
const calScreen = document.querySelector('.cal-screen > p')
const regularButtons = document.querySelector('.regular-buttons')
const clearBtn = document.querySelector('#clearBtn')
const deleteBtn = document.querySelector('#deleteBtn')

year.textContent = new Date().getFullYear();
calScreen.textContent = 0;
const numSet = []

function addToScreen(array) {
    calScreen.textContent = array.join('')
}

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

clearBtn.addEventListener('click', () => {
    numSet.splice(0, numSet.length)
    numSet[0] = 0
    addToScreen(numSet)
})


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
    } else {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

})
