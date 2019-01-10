//This JS file will contain a function which
//create an article which can be appended to to the output container in the index.HTML

const taskList = {

    createTaskList () {
        // //clear output container DOM
        let clearOutputContainer = document.querySelector(".output");
        clearOutputContainer.innerHTML = " ";

        //Task List container
        let taskListContainer = document.createElement("div");
        taskListContainer.setAttribute = ("id", ".taskList_container")
        clearOutputContainer.appendChild(taskListContainer);

        //create header
        let taskListHeader = document.createElement("h1");
        taskListHeader.innerHTML = "Turtle Tasks";
        taskListHeader.setAttribute ("id", "taskForm_header");
        taskListContainer.appendChild(taskListHeader);

        //container for the future task entries from form
        let taskListDiv = document.createElement("div");
        taskListDiv.setAttribute ("id", "taskList_div");
        taskListContainer.appendChild(taskListDiv);

        //new task button
        let newTaskButton = document.createElement("button");
        newTaskButton.textContent = "Add New Task";
        newTaskButton.setAttribute = ("class", "form_button");
        newTaskButton.setAttribute = ("id", "form_button_new_task");
        taskListContainer.appendChild(newTaskButton);

        //HTML to append to the task list application after a new entry is submitted in the form
        let savedTask = document.createElement("p");
        savedTask.setAttribute ("id", "taskForm_savedTask");

        //Event listener for the "new task" button and will eventually create a form which will POST to the JSON and populate the users task list
        newTaskButton.addEventListener("click", () => {
            console.log("click")
        })
    }
};

export default taskList