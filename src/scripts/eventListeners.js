import welcome from "./welcome"
import data from "./data"
import chat from "./chat"

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
    },
    chatMessage() {
        chat.userMessageToDOM();
    }

}

export default eventListeners