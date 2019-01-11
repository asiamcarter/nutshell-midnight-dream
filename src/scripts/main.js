import nav from "./nav"
import welcome from "./welcome"
import eventListeners from "./eventListeners"

nav.buildNav();

//Welcome Page:
welcome.welcomeBuilderAndAppender();

// Registration hyperlink ("here") button:
let hereHyperlinkClick = document.querySelector(".hereHyperLink")
hereHyperlinkClick.addEventListener("click", eventListeners.onRegistrationFormClick)

let loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", eventListeners.checkUserInputForm, eventListeners.userLogin)

