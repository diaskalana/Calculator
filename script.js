const year = document.querySelector('.year')
const calScreen = document.querySelector('.cal-screen > p')
const regularButtons = document.querySelector('.regular-buttons')

year.textContent = new Date().getFullYear();
calScreen.textContent = 0;
const numSet = []

function addToScreen(array) {
    calScreen.textContent = array.join('')
}

regularButtons.addEventListener('click', (event) => {
    if (numSet.length < 8) {
        if (event.target.id === 'num0') {
            numSet.push(0)
        } else if (event.target.id === 'num1') {
            numSet.push(1)
        } else if (event.target.id === 'num2') {
            numSet.push(2)
        } else if (event.target.id === 'num3') {
            numSet.push(3)
        } else if (event.target.id === 'num4') {
            numSet.push(4)
        } else if (event.target.id === 'num5') {
            numSet.push(5)
        } else if (event.target.id === 'num6') {
            numSet.push(6)
        } else if (event.target.id === 'num7') {
            numSet.push(7)
        } else if (event.target.id === 'num8') {
            numSet.push(8)
        } else if (event.target.id === 'num9') {
            numSet.push(9)
        } else if (event.target.id === 'period') {
            if (!numSet.includes('.')) {
                numSet.push('.')
            }
        }
    } else {
        alert("The maximum input limit has been reached!")
    }
    addToScreen(numSet)

})
