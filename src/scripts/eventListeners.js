import welcome from "./welcome"
import data from "./data"
import newsArticles from "./news"
import chat from "./chat"
import eventsForm from "./eventsForm";
import eventsList from "./eventsList"
import newsForm from "./newsForm"
import chatFormAndAppend from "./chatFormAndAppend";

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
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let timestamp = `${hours}:${minutes}`;
        // let userId = userId
        let sessionUser = sessionStorage.getItem("User")
        let messageObject =
        {
            message: messageContent,
            time: timestamp,
            userId: sessionUser
        }
        console.log(messageObject)
        data.postChatData(messageObject)
            .then(response=> {
                chatFormAndAppend.userMessageToDOM();
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
            let eventName = document.querySelector(".new--event--name").value;
            let eventDate = document.querySelector(".new--event--date").value;
            let eventLocation = document.querySelector(".new--event--location").value;
            let user = "2";
            let newEventInfo = {
                name: eventName,
                date: eventDate,
                location: eventLocation,
                userId: user
            }
            console.log(newEventInfo);

            data.postEventData(newEventInfo)
            .then( () => {
                eventsList.listEvents()
            })

            document.querySelector(".add--event--form").textContent = "";
        })
    },
    saveNewsArticle() {
        newsForm.checkFields()      // Checks to see if fields are filled in, then POSTs
    }
}




export default eventListeners;