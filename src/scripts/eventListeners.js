// import welcome from "./welcome"
// import data from "./data"

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
    },
//creates a message object and posts to the database.json. Clears textarea on submit click
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
    //submits message and clears textarea on enter keyup
    chatClickOnEnter() {
        if (event.keyCode === 13) {
            document.querySelector("#messageSubmit").click();
            let messageInput = document.querySelector(".messageInput");
                messageInput.value="";
        }
    }
}



export default eventListeners;