import taskList from "./tasks"
import tasksForm from "./tasksForm"
// import chat from "./chat"
// import welcome from "./welcome"
// import eventListeners from "./eventListeners"
// import newsArticles from "./news"
// import eventsList from "./eventsList"

//NH test call for task function to build DOM elements
taskList.createTaskList()
tasksForm.createTasksEditForm()

// // Example with "expand" to get other data
// fetch("http://localhost:8088/tasks?_expand=user")
// .then(response => response.json())
// .then(userObjects => { console.log(userObjects) })

// //Welcome Page:
// welcome.welcomeBuilderAndAppender();
// // Registration hyperlink ("here") button:
// let hereHyperlinkClick = document.querySelector(".hereHyperLink")
// hereHyperlinkClick.addEventListener("click", eventListeners.onRegistrationFormClick)
// //

// News
// newsArticles.buildArticles();

//Chat Page on click..eventually//
// chat.chatPageLoad();
// let submitButton = document.querySelector("#messageSubmit");
// submitButton.addEventListener("click", eventListeners.chatMessage)
// let messageInput = document.querySelector(".messageInput");
// messageInput.addEventListener("keyup", eventListeners.chatClickOnEnter)
// chat.chatPageLoad();
// chat.userMessageHTML();

