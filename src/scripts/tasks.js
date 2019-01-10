//This JS file will contain a function which
//create an article which can be appended to to the output container in the index.HTML

const taskForm = {

    createAndAppendTaskForm () {

        let taskFormHeader = document.createElement("h1");
        taskFormHeader.innerHTML = "Turtle Tasks";
        taskFormHeader.setAttribute ("id", "taskForm_header");

        let savedTask = document.createElement("p");
        savedTask.setAttribute ("id", "taskForm_savedTask")



        let taskFormContainer = document.querySelector(".output")
        taskFormContainer.appendChild(taskFormHeader)
    }
};

export default taskForm