const mainDiv = document.querySelector('.boxDiv')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const clear = document.querySelector('#clear')

mainDiv.style.display = 'none'


btn.addEventListener('click', ()=>{
    const newDiv = document.createElement('div')
    const newInput = document.createElement('input')
    const newBtn1 = document.createElement('button')
    const newBtn2 = document.createElement('button')


    mainDiv.style.display = 'block'
    newBtn1.innerHTML = 'Edit'
    newBtn2.innerHTML = 'Del'
    newInput.value = input.value
    newInput.disabled = true
    newBtn1.addEventListener('click', ()=>{
        newInput.disabled = false
    })
    newInput.addEventListener('focusout', ()=>{
        newInput.disabled = true
    })
    newBtn2.addEventListener('click', ()=>{
        newDiv.remove()
        if(mainDiv == 0){
            mainDiv.style.display = 'none'
        }
    }) 
    clear.addEventListener('click', ()=>{
        newDiv.remove()
        mainDiv.style.display = 'none'
    })
    if (input.value == '') {
        newDiv = false
    }

    newBtn1.setAttribute('class', 'newBtn1')
    newBtn2.setAttribute('class', 'newBtn2')
    newDiv.setAttribute('class', 'newDiv')
    newInput.setAttribute('class', 'newInput')
    mainDiv.setAttribute('class', 'newBoxDiv')


    newDiv.append(newInput)
    newDiv.append(newBtn1)
    newDiv.append(newBtn2)
    mainDiv.append(newDiv)

    input.value = ''
})