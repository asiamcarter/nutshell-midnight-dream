
import chat from "./chat"
import welcome from "./welcome"
import eventListeners from "./eventListeners"
import newsArticles from "./news"
import eventsList from "./eventsList"

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

// News
// newsArticles.buildArticles();

//Chat Page on click..eventually//
// chat.chatPageLoad();
// chat.userMessageHTML();

eventsList.listEvents()

