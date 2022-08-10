const myElement = document.getElementById('mySelector')


myElement.addEventListener('mouseover', () => {
    myElement.style.border = '2px solid lightblue'
    myElement.style.cursor = 'pointer'
})
myElement.addEventListener('mouseleave', () => {
    myElement.style.border = ''
})

// const addToStyle = (styleToModify, toAdd) => {
//     let extVal = parseInt(styleToModify) ? parseInt(styleToModify) : 0
//     return `${String(extVal + toAdd)}px`
// }

// const updateBoxPos = (event, difference) => {
//     console.log(event)
//     myElement.style.top = addToStyle(myElement.style.top, 3);
// }

// const myEvent = (event) => {
//     myElement.addEventListener('mousemove', (event) => {
//         updateBoxPos(event)
//     })
// }

// myElement.addEventListener('mousedown', (event) => {
//     myElement.style.cursor =  'move';
//     // myEvent(event);
// })

// myElement.addEventListener('mouseup', (event) => {
//     myElement.style.cursor = 'pointer'

// })
let myObj = myElement.style.cssText
console.log(myObj.cssText)

let shouldMove = false

prevX = null
prevY = null

myElement.addEventListener('mousemove', (e) => {
    let x = e.x
    let y = e.y
    myElement.addEventListener('mousedown', () => {
        shouldMove = true
        myElement.style.cursor =  'move';
    })
    myElement.addEventListener('mouseup', () => {
        shouldMove = false
        myElement.style.cursor = 'pointer'
    })

    let top = myElement.style.top ? parseInt(myElement.style.top) : 0
    let left = myElement.style.left ? parseInt(myElement.style.left) : 0
    if(shouldMove) {
        myElement.style.top = `${top+(y - prevY)}px`
        myElement.style.left = `${left+(x - prevX)}px`
        myObj = myElement.style.cssText
        console.log(myObj)
    }
    prevX = x
    prevY = y

})

