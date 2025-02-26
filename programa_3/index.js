
var idCount = 0;
var data = [];

document.addEventListener("DOMContentLoaded",()=>{
    const formulario = document.getElementById("formulario");
    const taskInput = document.getElementById("task");
    const taskDescriptionInput = document.getElementById("task-description")
    const listaDatos = document.getElementById("card");

    //const btnComplete = document.getElementById("btnComplete");
    //const btnIncomplete = document.getElementById("btnIncomplete");


    formulario.addEventListener('submit', (evt)=>{
        evt.preventDefault();
        const task = taskInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        const newTask = {
            id: idCount++,
            task : task,
            description: description,
            status: false,
        }

        data.push(newTask);
        //let data2 = [];
        //data2 = [...data2, newTask];
        //console.log(data);

        imprimirTarea(listaDatos);
    })
})

const imprimirTarea = (listaDatos)=>{
    if(data.length == 0){
        listaDatos.innerHTML=`
        <div class="work">
            <div class="work-title">
                <h2>NO</h2>
                <p>No hay tareas disponibles</p>
            </div>
        </div>`;

    }else{
        data.map((taskItem, i)=>{
            const nuevoElemento = taskItem.status? 
                `<div class="work-completed">
                    <div class="work-title">
                        <h2>${taskItem.task}</h2>
                        <span>${taskItem.description}</span>
                    </div>
                    <div class="work-buttons">
                        <button id= "btnComplete" type="button" onclick ="evtComplete(${taskItem.id})">
                        <i class="bi bi-check2-circle"></i></button>
                    </div>
                    <div class="work-buttons">
                        <button id = "btnIncomplete" type="button" onclick ="evtIncomplete(${taskItem.id})">
                        <i class="bi bi-x-octagon"></i></button>
                    </div>
                </div>`
                : 
                `<div class="work-incompleted">
                    <div class="work-title">
                        <h2>${taskItem.task}</h2>
                        <span>${taskItem.description}</span>
                    </div>
                    <div class="work-buttons">
                        <button id= "btnComplete" type="button" onclick ="evtComplete(${taskItem.id})">O</button>
                    </div>
                    <div class="work-buttons">
                        <button id = "btnIncomplete" type="button" onclick ="evtIncomplete(${taskItem.id})">
                        <i class="bi bi-x-octagon"></i></button>
                    </div>
                </div>`;
                if(i === 0){
                    listaDatos.innerHTML = nuevoElemento;
                }else{
                    listaDatos.innerHTML += nuevoElemento;
                }
    
        });
    }
}


const evtComplete = (id)=>{
    //console.log(`evt bnt complete ${id}`);
    const newData = data.map((task)=>{
        if (task.id == id){
            return {...task, status:!task.status}
        }else{
            return task;
        }
    });
    data = newData;
    const domELementList = document.getElementById("card");
    imprimirTarea(domELementList);
}

const evtIncomplete = (id)=>{
    //console.log(`evt bnt incomplete ${id}`);
    const newData = data.filter((task) => task.id !== id);
    //const newData = data.splice(id, 1);
    //const newData = data.map(task=>task.id === id ? null: task);
    data = newData;
    const domELementList = document.getElementById("card");
    imprimirTarea(domELementList);
}
