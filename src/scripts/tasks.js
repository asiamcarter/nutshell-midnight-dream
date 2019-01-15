import data from "./data";
import tasksForm from "./tasksForm";
import taskEdit from "./tasksEditForm"

//This JS file will contain a function which builds a task list current to the specific user logged in to the platform

const taskList = {

    createTaskList () {
        // //clear output container DOM
        let clearOutputContainer = document.querySelector(".output");
        clearOutputContainer.innerHTML = " ";

        //task list container
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

        //button event listener to open new task form
        newTaskButton.addEventListener("click", () => {
            tasksForm.createTasksEditForm()
        });

        //doc fragment for each task which returns from the JSON
        const taskFragment = document.createDocumentFragment();

        data.taskListData()
        .then(allTasks => {
            console.log(allTasks);
            allTasks.forEach(task => {
            //create html elements for each task list object and append to the task container on the DOM
                let taskListEntry = document.createElement("div");
                taskListEntry.setAttribute ("id", "taskListEntry");
                taskListDiv.appendChild(taskListEntry);

                let taskItem = document.createElement("h2");
                taskItem.setAttribute ("id", `taskList_name--${task.id}`)
                taskItem.textContent = task.task;

                //event listener for edit functionality, when task name is clicked, it is replaced with a text box to edit the event name and saved on keyup for the enter key
                taskItem.addEventListener("click", () => {
                    taskEdit.taskEditBuilder()
                });

                let taskDate = document.createElement("p");
                taskDate.textContent = `Due Date: ${task.dueDate}`;

                //create checkbox for each tasklist item
                var taskCheckbox = document.createElement("input");
                taskCheckbox.setAttribute ("type","checkbox");
                taskCheckbox.setAttribute ("id", "tasklist_checkbox");

                //checkbox event listener to remove the task from the page when completed (GET/PATCH)

                taskCheckbox.addEventListener("change", () => {
                    console.log("textbox clicked and value changed to")
                })

                // //1) checkbox clicked for "complete" initiates a PATCH
                // //2) complete a forEach loop over the tasks array and for any values of "true" hide from list
                // //3) if === true, remove the div

                //append forEach elements
                taskListEntry.appendChild(taskItem);
                taskListEntry.appendChild(taskDate);
                taskListEntry.appendChild(taskCheckbox);
                // taskListEntry.appendChild(modifyTaskButton);

                taskFragment.appendChild(taskListEntry);

                taskListDiv.appendChild(taskFragment);
            });
        });
    }
};

export default taskList