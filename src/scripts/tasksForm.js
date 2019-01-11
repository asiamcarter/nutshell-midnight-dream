import data from "./data"
import taskList from "./tasks";
// when "new task" button is clicked, a form pops up which will allow a person to create a new task to track on their page.

//form is not displaying
const tasksForm = {

    createTasksEditForm () {
        //clear DOM
        let clearOutputContainer = document.querySelector(".output");
        clearOutputContainer.innerHTML = " ";

        //create container for the edit form
        let taskEditFormContainer = document.createElement("div");
        taskEditFormContainer.setAttribute = ("id", "taskEditForm");
        clearOutputContainer.appendChild(taskEditFormContainer);

        //New Task Header
        let newTaskHeader = document.createElement("h1");
        newTaskHeader.innerHTML = "Turtle Things To Tackle";
        newTaskHeader.setAttribute ("id", "taskList_header");
        taskEditFormContainer.appendChild(newTaskHeader);

        //create fields to capture data which align to data structure
        let taskFormInputLabel = document.createElement("lebel");
        taskFormInputLabel.textContent = "I have to:";
        taskEditFormContainer.appendChild(taskFormInputLabel);

        let taskFormInputName = document.createElement("input");
        taskEditFormContainer.appendChild(taskFormInputName);

        let taskFormDateLabel = document.createElement("lebel");
        taskFormDateLabel.textContent = "I will be done by:";
        taskEditFormContainer.appendChild(taskFormDateLabel);

        let taskFormInputDate = document.createElement("input");
        taskEditFormContainer.appendChild(taskFormInputDate);
        //create save button
        let taskSaveButton = document.createElement("button");
        taskSaveButton.textContent = "Do It (later)!";
        taskSaveButton.setAttribute = ("class", "task_button");
        taskSaveButton.setAttribute = ("id", "task_save_button");
        taskEditFormContainer.appendChild(taskSaveButton);
        //save button event listener
        taskSaveButton.addEventListener("click", () => {
            //object which will add the new task and due date for a user, but will also add their background information of user id and completed bolean
            let taskObject = {
                "task": taskFormInputName.value,
                "dueDate": taskFormInputDate.value,
                //how do I add these two silently without puthing them on the field?
                "completed": false,
                "userId":"",
            };
            data.postNewTask(taskObject)
            // .then(response => {
            //     taskList.createTaskList()
            // });
        });
    }
}


export default tasksForm