// Edit functionality for the edit event in the task list application
//Author: Nick Hansen

// import tasksList from "./tasks";

const taskEdit = {

    //target
    taskEditBuilder () {
        //on event lick, console log the specific object properties
        let editDivId = event.target.id;
        console.log(editDivId);
        //only logs task id
        let taskId = editDivId.split("--")[1];
        console.log("task id", taskId);
        //on event click, generate the edit fields
        let taskTitle = document.querySelector("h2");
        let textfield = document.createElement("input");
        textfield.setAttribute("type", "text");
        textfield.setAttribute("id", "task_edit_field");
        let taskListEntry = document.querySelector("#taskListEntry");
        // taskListEntry.replaceChild(taskTitle, textfield);





        // // Execute a function when the user releases a key on the keyboard
        // editMessageField.addEventListener("keyup", function(event) {
        // // Cancel the default action, if needed
        // event.preventDefault();
        // // Number 13 is the "Enter" key on the keyboard
        // if (event.keyCode === 13) {
        //     // Trigger the button element with a click
        }
    // })
    // }
}
export default taskEdit