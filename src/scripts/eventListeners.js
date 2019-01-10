import welcome from "./welcome"
import data from "./data"

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
    },
    chatMessage() {
        let messageInput = document.querySelector(".messageInput").value;
        console.log(messageInput);
    }

}

export default eventListeners