
import chat from "./chat"
import welcome from "./welcome"
import eventListeners from "./eventListeners"
import events from "./events"

//Welcome Page:
welcome.welcomeBuilderAndAppender();
// Registration hyperlink ("here") button:
let hereHyperlinkClick = document.querySelector(".hereHyperLink")
hereHyperlinkClick.addEventListener("click", eventListeners.onRegistrationFormClick)
//

//Chat Page on click..eventually//
chat.chatPageLoad();
// chat.userMessageHTML();
