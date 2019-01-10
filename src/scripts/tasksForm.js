// when "new task" button is clicked, a form pops up which will allow a person to create a new task to track on their page.

//form is not displaying
const taskForm = {

    createTasksEditForm () {

        let clearOutputContainer = document.querySelector(".output");
        clearOutputContainer.innerHTML = " ";

        let taskEditFormContainer = document.createElement("div");
        taskEditFormContainer.setAttribute = ("id", "taskEditForm");
        clearOutputContainer.appendChild(taskEditFormContainer);

        let taskFormInputLabel = document.createElement("lebel");
        taskFormInputLabel.textContent = "I have to:";
        let taskFormInputName = document.createElement("input");
        taskFormInputName.value = "taskTitle";
        taskEditFormContainer.appendChild(taskFormInputLabel);
        taskEditFormContainer.appendChild(taskFormInputName);

        let taskFormDateLabel = document.createElement("lebel");
        taskFormDateLabel.textContent = "I will be done by:"
        let taskFormInputDate = document.createElement("input");
        taskFormInputDate.value = "taskDueDate";
        taskEditFormContainer.appendChild(taskFormDateLabel);
        taskEditFormContainer.appendChild(taskFormInputDate);

        let taskSaveButton = document.createElement("button")
        taskSaveButton.textContent = "Save";
        taskSaveButton.setAttribute = ("id", "taskSaveButton")
        taskEditFormContainer.appendChild(taskSaveButton);
    }
}

export default taskForm