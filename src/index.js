document.addEventListener('DOMContentLoaded', () => {
 let form = document.querySelector("form")
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDoList(e.target.newtask.value)
    form.reset()
  } )
})

function handleToDoList(todo){
 let  p= document.createElement('p')
 let bttn= document.createElement('button')
 bttn.addEventListener('click', handleDelet)
 bttn.textContent='remove'
 p.textContent = ` ${todo}  `
 p.appendChild(bttn)
 console.log(p)
  document.querySelector('#list').appendChild(p)
}
function handleDelet(e){
  e.target.parentNode.remove()
}