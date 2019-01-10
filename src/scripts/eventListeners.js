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
        let messageContent = document.querySelector(".messageInput");
        let messageObject = {
            message: messageContent,
            time: "",
            name: "",
        }
        data.postChatData(messageObject)
        .then (response => {
            chat.userMessageToDOM();
        })
    }

}

export default eventListeners