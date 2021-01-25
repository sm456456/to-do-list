// addons:
// 1: when press enter from keybourd it will make adding task
// 2: add edit button

// Setting Up Variables
let theInput = document.querySelector('.add-task input')
let theAddButton = document.querySelector('.add-task .plus')
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let taskBox = document.getElementsByClassName(".task-box");

// Focus On Input Field
window.onload = () => {
    theInput.focus(); //when refreshed, the iput will automatically be on 
}

// Adding The Task
theAddButton.onclick = () => {
    if (theInput.value === '') {
        swal("Oops", "Please add a text !", "error")
    } else {
        let noTaskMsg = document.querySelector('.no-tasks-message')
        // Check If Span With No Tasks Message Is Exist
        if (document.body.contains(noTaskMsg)) {

            // Remove No Tasks Message
            noTaskMsg.remove();
        }
        // Create Main Span Element
        let mainSpan = document.createElement('span')

        // Create Delete Button
        let deleteElement = document.createElement('span')

        // Create The Main Span Text
        let text = document.createTextNode(theInput.value)

        // Create The Delete Button Text
        let deletetext = document.createTextNode('DELETE')



        // Add Text To Main Span
        mainSpan.appendChild(text);


        // Add Class To Main Span
        mainSpan.className = 'task-box'


        // Add Text To Delete Button
        deleteElement.appendChild(deletetext);

        // deleteElement.innerText = deletetext;
        deleteElement.classList.add('delete')
        // or deleteElement.className = 'delete'

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);


        // Add The Task To The Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Input
        theInput.value = ""

        // Focus On Field
        theInput.focus()

        swal("Good Job !", "Task added", "success")
    }
}

document.addEventListener('click', (e) => {

    if (e.target.className == 'delete') {
        e.target.parentNode.remove();
        swal("Good Job !", "Task deleted", "success")
    }

    if (e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished')
    }
})

taskBox.addEventListener("click", (e)){
    if(e.target.className == 'task-box') {
        e.target.classList.toggle('finished')
    }
}