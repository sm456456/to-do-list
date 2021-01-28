// Setting Up Variables

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let taskAll = document.querySelector(".tasks-all")
let completeAll = document.querySelector(".complete-all")




// Focus On Input Field
window.onload = () => {
  theInput.focus(); //when refreshed, the iput will automatically be on
};

// Adding The Task

theAddButton.onclick = () => {
  if (theInput.value === "") {
    swal("Oops", "Please add a text !", "error");
  } else {
    let noTaskMsg = document.querySelector(".no-tasks-message");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(noTaskMsg)) {
      // Remove No Tasks Message
      noTaskMsg.remove();
    }
    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);
    
    // Create The Delete Button Text
    let deletetext = document.createTextNode("DELETE");

       // Create EDIT Button
       let editElement = document.createElement("span");

    // Create The EDIT Button Text
    let edittext = document.createTextNode("EDIT");

 
    // Add Text To Main Span
    mainSpan.appendChild(text);

    // Add Class To Main Span
    mainSpan.className = "task-box";

    // Add Text To Delete Button
    deleteElement.appendChild(deletetext);

    // deleteElement.innerText = deletetext;
    deleteElement.classList.add("delete");

    // or deleteElement.className = 'delete'

    /////////////////
    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);

    // Add class To edit Button
    editElement.classList.add("edit");

    // Add Text To edit Button
    editElement.appendChild(edittext);

    // Add edit Button To Main Span
    mainSpan.appendChild(editElement);
    // Empty The Input
    theInput.value = "";

    // Focus On Field
    theInput.focus();


    //calculate tasks
    calculateTasks()

    swal("Good Job !", "Task added", "success");
  }
};




let theEditbutton = document.querySelector(".edit");
mainSpan = document.querySelector(".task-box")



 // EDIT: If the ToDo task itself is clicked and modified (save on blur/return)
  // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content


let doItEdit = () =>{
    mainSpan.contentEditable = "true";
}

theEditbutton.onclick =(e)=>{


    doItEdit();
    
}
//   if (e.target.tagName.toLowerCase() === "p") {
//     const originalTask = e.target.textContent;
//     const modifyTask = () => {
//       if (e.target.textContent.length < 2) {
//         e.target.textContent = originalTask;
//         return block();
//       }
//       targetToDo.name = e.target.textContent;
//       saveAndRender();
//     };
//     e.target.onkeydown = (e) => {
//       // Save on return
//       if (e.key === "Enter") {
//         e.preventDefault(); // prevents line breaks
//         // https://stackoverflow.com/questions/425274/prevent-line-paragraph-breaks-in-contenteditable
//         modifyTask();
//       }
//     };
//     // Save on clicking out of the editable box
//     e.target.onblur = () => {
//       modifyTask();
//     };
//   }
// });



document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();


        ///////// new editing ////////////

    // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {

        createNoTasks();}

    swal("Good Job !", "Task deleted", "success");
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }


   //calculate tasks
   calculateTasks()

});



// remove all
taskAll.onclick =()=>{
    document.querySelectorAll('.task-box').forEach(n => n.remove());

   //calculate tasks
   calculateTasks()
    ///////// new editing ////////////
    if (tasksContainer.childElementCount == 0) {

        createNoTasks();}
    
}
// finished all
completeAll.onclick =()=>{
    document.querySelectorAll('.task-box').forEach(n => n.classList.toggle("finished"));


       //calculate tasks
       calculateTasks()
}




    ///////// new editing ////////////

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");
  
    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");
  
    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);
  
    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
  
    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
  
  }



  // Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
  }
