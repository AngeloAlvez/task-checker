var arrayTasks = JSON.parse(localStorage.getItem("tasks")) || []

arrayTasks.forEach( (elemento) =>{
    console.log(elemento)
    addTaskOnScreen(elemento)
})

function addTaskOnScreen(task) {
    let id = `task-${task.id}`
    let idCheck = `check-${task.id}`
    //verificação se o input está vazio
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
    if (taskObject.text == ""){
        alert('Adicione alguma tarefa')
    }else{
        addTaskOnScreen(taskObject)
        arrayTasks.push(taskObject)

    localStorage.setItem("tasks", JSON.stringify(arrayTasks))

    }
    //deixando o input vazio após o envio da tarefa
    document.getElementById("inputTask").value = "";

}
//envio da tarefa também com a tecla enter
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      clickTask();
    }
  }, false);