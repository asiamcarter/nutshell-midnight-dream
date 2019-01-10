import taskForm from "./tasks"
import welcome from "./welcome"
import eventListeners from "./eventListeners"

//NH test call for task function to build DOM elements
taskForm.createAndAppendTaskForm()

// Example with "expand" to get other data
fetch("http://localhost:8088/tasks?_expand=user")
.then(response => response.json())
.then(userObjects => { console.log(userObjects) })

//Welcome Page:
welcome.welcomeBuilderAndAppender();
// Registration hyperlink ("here") button:
let hereHyperlinkClick = document.querySelector(".hereHyperLink")
hereHyperlinkClick.addEventListener("click", eventListeners.onRegistrationFormClick)
//
