import welcome from "./welcome"
import data from "./data"
import newsArticles from "./news"
import chat from "./chat"
import eventsForm from "./eventsForm";

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
        newsArticles.buildArticles()
    },

    userLogin(){
        welcome.userChecker();
    },

    goBack(){
        welcome.goBackToWelcome();
    },

    checkUserInputForm(){
        welcome.userCheckInputBoxes();
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
    },
    // ****************************EVENTS*******************************
     // this function will cause the "add new event button" to appear
    newEventButtonClick(){
        document.querySelector(".event--add").addEventListener("click", function(){
            eventsForm.createEventForm()
            eventListeners.saveEventButtonClick()
        })
    },
    saveEventButtonClick(){
        document.querySelector(".event--save--button").addEventListener("click", function(){
            document.querySelector(".add--event--form").textContent = "";
        })
    },
    editEventButtonClick(){
        document.querySelector(".event--edit--button").addEventListener("click", function(){
            console.log("someday this button will edit things")
        })
    }
}



export default eventListeners;