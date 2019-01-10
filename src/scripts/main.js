import taskForm from "./tasks"

fetch("http://localhost:8088/tasks?_expand=user") .then(response => response.json()) .then(userObjects => { console.log(userObjects) })

//test call for task function
taskForm.createAndAppendTaskForm()