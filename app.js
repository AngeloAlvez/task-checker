// comprar alho 
// cancelar a Net
var arrayTasks = [
//     text:'louça',
//     check:false,
//     id:0
// },
// {
//     text:'futebol',
//     check :true,
//     id:1
// },
// {
//     text:'janta',
//     check :false,
//     id:2
// }


]

// FUNÇÕES DE TESTE PARA CHECKAR OU DESCHECKAR O BOX

// function checkOn(){
//     document.getElementById('checkbox').checked = true;
//   }
  
//   function checkOff(){
//     document.getElementById('checkb').checked = false;
//   }

//inicializando com as tarefas já inclusas no array acima (simulando um db)
function init() {
    for (let i=0; i < arrayTasks.length; i++ ){
        const taskObject = arrayTasks[i]
        addTask(taskObject)
    }   
}

init();

function addTask(task) {
    let id = `task-${task.id}`
    let idCheck = `check-${task.id}`
    const taskItem = document.createElement('taskItem');
    taskItem.id = id
    taskItem.innerHTML = `  
        <li class="task">
                <div class="to-do">
                    <input id='${idCheck}' type="checkbox">
                    <div class="item">${task.text}</div>
                    <input id="lixeira" class="delete-task" type="button" onclick="delTask(${task.id})" value="X">
                </div>
        </li>`
    const ul = document.getElementById('ul-task')
    ul.appendChild(taskItem)


    //event check
   // arrayTasks[task.id].check = true

    document.getElementById(idCheck).checked = task.check

}
function delTask(id) {
    var myobj = document.getElementById(`task-${id}`);
    arrayTasks.splice(id,1)
    myobj.remove(); 
}
//pegando o valor do input (tarefa a ser adicionada) e dando um addTask(input.value)
function clickTask() {
    const taskObject = {}
    taskObject.text = document.getElementById("inputTask").value;
    taskObject.check = false
    taskObject.id = arrayTasks.length
    arrayTasks.push(taskObject)
    addTask(taskObject)

    //deixando o input vazio após o envio da tarefa
    document.getElementById("inputTask").value = "";

}
//envio da tarefa também com a tecla enter
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      clickTask();
    }
  }, false);




// function toggleCheck(id) {
    
// }
