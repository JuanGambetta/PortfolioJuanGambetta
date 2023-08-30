const agregarProyBut = document.getElementById('agregarProyectos')
agregarProyBut.addEventListener('click', handleClickProy)

const infoBut = document.getElementById('info')
infoBut.addEventListener('click', handleClicki)

const notifBut = document.getElementById('noti')
notifBut.addEventListener('click', handleClickn)

const handleHoverP = document.getElementById('personas')
handleHoverP.addEventListener('mouseover', handleHoverPF)

const handleHoverP2 = document.getElementById('personas')
handleHoverP2.addEventListener('mouseout', handleHoverPF)

const link = 'https://jsonplaceholder.typicode.com/users'

let boolProy = true

let cardCount = 1

let dropdownContent = document.getElementById('dropdownPersonas')

let arrayPersonas = []

fetchData(link)

function handleClickProy() {
    if (confirm('Quieres agregar un nuevo proyecto?')) {
        
        const nombreProyecto = prompt('Ingresa el nombre del proyecto')
        const newProy = document.createElement('div')
        const newBody = document.createElement('div')
        const tituloProyecto = document.createElement('h5')
        const newButton = document.createElement('a')
        const newTareas = document.createElement('div')

        newProy.classList.add('card')
        newBody.classList.add('card-body')
        tituloProyecto.classList.add('card-title')
        tituloProyecto.textContent = nombreProyecto
        newButton.classList.add('btn')
        newButton.classList.add('btn-primary')
        newButton.classList.add('bot')
        newButton.hrefList = '#'
        newButton.id = 'agregarTarea' + cardCount
        newButton.textContent = 'Nueva Tarea'
        newButton.style = "width: 95%"
        newTareas.id = 'tareasProy' + cardCount
        cardCount += 1

        agregarListener(newButton)

        newProy.appendChild(newBody)
        newBody.appendChild(tituloProyecto)
        newBody.appendChild(newTareas)
        newBody.appendChild(newButton)

        if (boolProy) {
            const slot1 = document.getElementById('slot1')
            slot1.appendChild(newProy);
            boolProy = false;
        } else {
            const slot2 = document.getElementById('slot2')
            slot2.appendChild(newProy);
            boolProy = true;
        }
    } else {
        alert('No se ha agregado ningún proyecto')
    };
}
function handleClicki() {
    alert('Trello es la manera divertida, flexible y gratuita para organizar planes, proyectos y más. Integra directamente a tu flujo de trabajo las aplicaciones que tu equipo ya está usando.')
}
function handleClickn() {
    alert('No tienes notificaciones nuevas')
}
function handleHoverPF() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}
function agregarTareafun(event){    
    const nombreTarea = prompt('Ingresa el nombre de la tarea')
    const asignarTarea = document.createElement('button')
    asignarTarea.setAttribute("style", "height: 26px; width: 36px;") 
    asignarTarea.classList.add('botonTarea')
    asignarTareafun(asignarTarea)
    let idBien = event.target.id
    idBien = idBien[idBien.length - 1]
    idBien = 'tareasProy' + idBien
    const contTareas = document.getElementById(idBien)
    const nuevaTarea = document.createElement('p')
    nuevaTarea.classList.add('card-text')
    nuevaTarea.textContent = nombreTarea

    const contenedor = document.createElement('div')
    contenedor.style = 'display: flex; flex-direction: row; justify-content: space-between;'
    contenedor.appendChild(nuevaTarea)
    contenedor.appendChild(asignarTarea)
    contTareas.appendChild(contenedor)
}
function agregarListener(element){
    element.addEventListener('click', event => agregarTareafun(event))
}
function asignarTareafun(element){
    element.addEventListener('click', event => asignarTareafuncion(event))
}
function asignarTareafuncion(event){
    posibleTexto = prompt('A quien asignar la tarea?')
    if (arrayPersonas.includes(posibleTexto)){
            posibleTexto = posibleTexto.split(" ")
            posibleTexto = posibleTexto[0][0] + posibleTexto[1][0]
            console.log(posibleTexto)
            event.target.textContent = posibleTexto
    }else { alert(`No existe una persona con el nombre ` + posibleTexto)
    }
}
function fetchData() {
    fetch(link, { method: "GET" })
      .then((response) => {
        return response.json(); // extract JSON from response
      })
      .then((data) => {
        let counter = 0
        data.forEach(element => {
            arrayPersonas[counter] = element.name
            counter += 1
            let elemento = document.createElement('p')
            elemento.innerHTML = element.name
            elemento.classList.add('dropeable')
            dropdownContent.appendChild(elemento)
        })
      })
      .catch((error) => {
        console.log("Error fetching data: ", error)
      })
}