
import chat from "./chat"
import welcome from "./welcome"
import eventListeners from "./eventListeners"
import newsArticles from "./news"
import events from "./events"

//Welcome Page:
welcome.welcomeBuilderAndAppender();
// Registration hyperlink ("here") button:
let hereHyperlinkClick = document.querySelector(".hereHyperLink")
hereHyperlinkClick.addEventListener("click", eventListeners.onRegistrationFormClick)

let loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", eventListeners.checkUserInputForm, eventListeners.userLogin)



//

// News
// newsArticles.buildArticles();

//Chat Page on click..eventually//
// chat.chatPageLoad();
// chat.userMessageHTML();
