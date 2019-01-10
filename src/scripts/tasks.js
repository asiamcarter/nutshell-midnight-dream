//This JS file will contain a function which
//create an article which can be appended to to the output container in the index.HTML

const taskList = {

    createTaskList () {
        //container for all form HTML
        let taskListContainer = document.querySelector(".output");
        taskListContainer.setAttribute = (".taskList_container")
        //clear existing DOM HTML and create task list HTML elements container (formBucket)
        let formBucket = document.querySelector(".welcome_container")
        formBucket.innerHTML = " ";
        taskListContainer.appendChild(formBucket);
        formBucket.appendChild(taskListHeader);
        //HTML which creates the task list header, container for entries, and a "new task" button which displays on the DOM for a new user
        let taskListHeader = document.createElement("h1");
        taskListHeader.innerHTML = "Turtle Tasks";
        taskListHeader.setAttribute ("id", "taskForm_header");
        //container for the future entries
        let taskListDiv = document.createElement("div");
        taskListDiv.setAttribute ("id", "taskList_div");
        formBucket.appendChild(taskListDiv);
        //new task button
        let newTaskButton = document.createElement("button");
        newTaskButton.textContent = "Add New Task";
        newTaskButton.setAttribute = ("class", "form_button");
        newTaskButton.setAttribute = ("id", "form_button_new_task");
        formBucket.appendChild(newTaskButton);
        //HTML to append to the task list application after a new entry is submitted in the form
        let savedTask = document.createElement("p");
        savedTask.setAttribute ("id", "taskForm_savedTask");

    //     //Event listener for the "new task" button and will eventually create a form which will POST to the JSON and populate the users task list
        newTaskButton.addEventListener("click", () => {
            console.log("click")
        })
    }
};

export default taskList