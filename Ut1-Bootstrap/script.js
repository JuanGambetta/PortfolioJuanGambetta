const agregarProyBut = document.getElementById('agregarProyectos');
agregarProyBut.addEventListener('click', handleClickProy);

const infoBut = document.getElementById('info');
infoBut.addEventListener('click', handleClicki);

const notifBut = document.getElementById('noti');
notifBut.addEventListener('click', handleClickn);

const handleMouseoverMas = document.getElementById('mas');
handleMouseoverMas.addEventListener('mouseover', handleMouseovermas);

let boolProy = true;

let cardCount = 1;


function handleClickProy() {
    if (confirm('Quieres agregar un nuevo proyecto?')) {
        
        const nombreProyecto = prompt('Ingresa el nombre del proyecto')
        const newProy = document.createElement('div');
        const newBody = document.createElement('div');
        const tituloProyecto = document.createElement('h5');
        const newButton = document.createElement('a');
        const newTareas = document.createElement('div');

        newProy.classList.add('card');
        newBody.classList.add('card-body');
        tituloProyecto.classList.add('card-title');
        tituloProyecto.textContent = nombreProyecto;
        newButton.classList.add('btn');
        newButton.classList.add('btn-primary');
        newButton.classList.add('bot');
        newButton.hrefList = '#';
        newButton.id = 'agregarTarea' + cardCount;
        newButton.textContent = 'Agregar';
        newButton.style = "width: 95%;"
        newTareas.id = 'tareasProy' + cardCount;
        cardCount += 1;

        agregarListener(newButton);

        newProy.appendChild(newBody);
        newBody.appendChild(tituloProyecto);
        newBody.appendChild(newTareas);
        newBody.appendChild(newButton);

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
function handleMouseovermas() {
    alert('No implementado aun')
}
function agregarTareafun(event){    
    const nombreTarea = prompt('Ingresa el nombre de la tarea')
    let idBien = event.target.id;
    idBien = idBien[idBien.length - 1]
    idBien = 'tareasProy' + idBien;
    console.log(idBien)
    const contTareas = document.getElementById(idBien);
    const nuevaTarea = document.createElement('p');
    nuevaTarea.classList.add('card-text');
    nuevaTarea.textContent = nombreTarea;
    contTareas.appendChild(nuevaTarea);
}
function agregarListener(element){
    element.addEventListener('click', event => agregarTareafun(event))
};
