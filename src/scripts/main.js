import welcome from "./welcome"
import eventListeners from "./eventListeners"

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