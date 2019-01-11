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
                let messageInput = document.querySelector(".messageInput");
                messageInput.value="";
        })

    },
    chatClickOnEnter() {
        if (event.keyCode === 13) {
            document.querySelector("#messageSubmit").click();
            let messageInput = document.querySelector(".messageInput");
                messageInput.value="";
        }
    }
}



export default eventListeners;