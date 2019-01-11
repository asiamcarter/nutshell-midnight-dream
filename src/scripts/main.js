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

nav.buildNav();

//Welcome Page:
welcome.welcomeBuilderAndAppender();

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

