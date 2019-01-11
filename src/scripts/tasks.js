import data from "./data";
import tasksForm from "./tasksForm";

//This JS file will contain a function which
//create an article which can be appended to to the output container in the index.HTML

const taskList = {

    createTaskList () {
        // //clear output container DOM
        let clearOutputContainer = document.querySelector(".output");
        clearOutputContainer.innerHTML = " ";

        //Task List container
        let taskListContainer = document.createElement("div");
        taskListContainer.setAttribute = ("id", ".taskList_container");
        clearOutputContainer.appendChild(taskListContainer);

        //create header
        let taskListHeader = document.createElement("h1");
        taskListHeader.innerHTML = "Turtle Tasks";
        taskListHeader.setAttribute ("id", "taskList_header");
        taskListContainer.appendChild(taskListHeader);

        //task entry div for all saved tasks to be placed
        let taskListDiv = document.createElement("div");
        taskListDiv.setAttribute = ("id", "saved_tasks");
        taskListContainer.appendChild(taskListDiv);

        //new task button
        let newTaskButton = document.createElement("button");
        newTaskButton.textContent = "Add New Task";
        newTaskButton.setAttribute = ("class", "task_button");
        newTaskButton.setAttribute = ("id", "new_task_button");
        taskListContainer.appendChild(newTaskButton);

        //TO DO Event listener for the "new task" button and will eventually create a form which will POST to the JSON and populate the users task list
        newTaskButton.addEventListener("click", () => {
            // console.log("click") works!
            tasksForm.createTasksEditForm()
        });

        //doc fragment for each task which returns from the JSON
        const taskFragment = document.createDocumentFragment();
        data.taskListData()
        .then(allTasks => {
            console.log(allTasks);
            allTasks.forEach(toDo => {
            //create html elements for each task list object and append to the task container on the DOM
            let taskListEntry = document.createElement("div");
            taskListEntry.setAttribute ("id", "taskList_entry");
            taskListDiv.appendChild(taskListEntry);

            let taskItem = document.createElement("p");
            taskItem.textContent = toDo.task;

            let taskDate = document.createElement("p");
            taskDate.textContent = toDo.dueDate;

            taskListEntry.appendChild(taskItem);
            taskListEntry.appendChild(taskDate);

            taskFragment.appendChild(taskListEntry);

            taskListDiv.appendChild(taskFragment);

            });
        });
    }
};

export default taskList