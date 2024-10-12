let add = document.querySelector(".plus");
let input = document.getElementById("input");
let listitem = document.querySelector(".task")


function main() {
    let taskvalue = input.value.trim();

    if (taskvalue) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskvalue)
        localStorage.setItem("tasks", JSON.stringify(tasks))

        addtask(taskvalue)
       

    }
}


function addtask(task) {
    let div = document.createElement("div");
    div.setAttribute("class", "task ");
    div.innerText = task;
    
    let div2 = document.createElement("div");
    div2.setAttribute("class", "div2");
    div2.innerHTML = '  <i class="fa-solid fa-trash icon "></i>'

    div.appendChild(div2)
    document.querySelector(".tasks").appendChild(div)
    input.value = '';
    
    
    let clear = document.querySelectorAll(".div2");
    clear.forEach(del => {
        del.onclick = ()=>{
        
            console.log(del.parentElement)
            del.parentElement.classList.toggle("task-delete")
            
            let taskToDelete = del.parentElement.innerText.trim();
            console.log(del.parentElement.innerText)
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
       
           tasks = tasks.filter(task=> task !==taskToDelete )

        localStorage.setItem("tasks", JSON.stringify(tasks));

         
            
        }
    });
}




add.onclick = function () {
    main();
}


function loadtask() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach(task => {
        addtask(task)
    });
    
}

window.onload = loadtask;

