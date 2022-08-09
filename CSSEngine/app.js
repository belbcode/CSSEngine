const myElement = document.getElementById('mySelector')
console.log(myElement.style.top)

const addToStyle = (styleToModify, toAdd) => {
    console.log(styleToModify,parseInt(styleToModify),toAdd)
    let extVal = parseInt(styleToModify) ? parseInt(styleToModify) : 0
    console.log(extVal)
    return `${String(extVal + toAdd)}px`
}

const updateBoxPos = (event, prevCords) => {
    console.log(event.x, event.y, myElement.style.top)
    myElement.style.top = addToStyle(myElement.style.top, 20);
}

const myEvent = (event) => {
    console.log('tracking mouse position')
    updateBoxPos(event)
}

console.log({myElement})

myElement.addEventListener('mouseover', () => {
    myElement.style.border = '2px solid lightblue'
    myElement.style.cursor = 'pointer'
})
myElement.addEventListener('mouseleave', ()=> {
    myElement.style.border = ''
})

myElement.addEventListener('mousedown', (event)=> {
    myElement.style.cursor =  'move';

    myElement.addEventListener('mousemove', myEvent);
})

myElement.addEventListener('mouseup', (event)=> {
    myElement.removeEventListener('mousemove', myEvent)
    myElement.style.cursor = 'pointer'
    console.log('unclick')
    // mouseTrack(false);

})
