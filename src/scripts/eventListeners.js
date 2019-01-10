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

        let messageContent = document.querySelector(".messageInput").value;
        let date = new Date();
        // let userId = userId

        let messageObject =
        {
            message: messageContent,
            time: date,
            userId: "2"
        }
        console.log(messageObject)
        data.postChatData(messageObject)
            .then(response=> {
                chat.userMessageToDOM();
        })

    }
}



export default eventListeners;