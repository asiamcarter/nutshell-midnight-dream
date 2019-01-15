// Creates message HTML and appends to To DOM
// Author: Asia Carter

import data from "./data"
import chatEditForm from "./chatEditForm"

const chatFormAndAppend = {

    //method takes an object as an argument and creates an HTML template
    userMessageHTML(message, id) {

        //create userMessage div with class of userMessage
        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        //create userNameSection which holds the user's username, with class of usernameSection
        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection")
        userNameSection.textContent = `${message.user.name}`

       //event listener added to username. On click, the user is prompted with a message asking if they would like to add the username clicked to their friend's list. If user accepts, a new object is created and posted to the database via newFriendPoster method. If user cancels, an alert with message is displayed.
        userNameSection.addEventListener("click", () => {
            let userFriend = userNameSection.textContent
            if (confirm(`Add ${userFriend}?`)) {
                let sessionId = sessionStorage.getItem("User")
                const friendToAdd = {
                 userId: Number(sessionId),
                 otherId: message.id,
                 username: userFriend
                }
                data.newFriendPoster(friendToAdd)
                    .then(()=> {
                        setTimeout(function()
                        { alert(`${userFriend} Added!`);}, 450);
                    })
            } else {
                setTimeout(function()
                { alert("bummertown!");}, 450);
            }
        })

        //creates photo section of message, with user photo from database
        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");
        userPhotoSection.innerHTML= `<img src=${message.user.photo} class="userPhoto">`

        //creates user message section, populates with user message content
        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");

        //adds an id to be used with edit funtionality

        userMessageContent.classList.add(`chatroomDiv--${id}`);
        userMessageContent.innerHTML =`${message.message}${message.time} `

        //appends username, photo and message to the DOM

        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);
        userMessageContent.appendChild(userNameSection);

        //gets session user. if the session user and the user id match, an edit button will populate the DOM
        let sessionUser = sessionStorage.getItem("User");
        if (Number(sessionUser) === message.user.id) {
        let messageEditButton = document.createElement("button");
        messageEditButton.textContent="edit";
        messageEditButton.setAttribute("id", `messageEditButton--${message.id}`)
        messageEditButton.classList.add("messageEditButton")
        userMessageContent.appendChild(messageEditButton);
        //get all messages
        data.getChatData()
            .then(() => {
                //event listener on message button targets the id of the event, splits on dash
                messageEditButton.addEventListener("click", () => {
                    chatEditForm.chatFoodEditForm(message)
                })
            })
        }
        return userMessageDiv;
    },
    //appends messages to the DOM along with scrollbar that stays anchored to the bottom of the div so that the most recent message is always visible.
    userMessageToDOM() {
        data.getChatData()
        .then (parsedMessages => {
            let messageDocFrag = document.createDocumentFragment()
            let chatroomDiv = document.querySelector(".chatroomDiv");
            //controlls height of scroll
            const isScrolledToBottom = chatroomDiv.scrollHeight - chatroomDiv.clientHeight <= chatroomDiv.scrollTop +1;

                parsedMessages.forEach (message => {
                    let messageHTML = chatFormAndAppend.userMessageHTML(message, message.id);
                    messageDocFrag.appendChild(messageHTML);
                })
                //clears DOM so that messages aren't repeated when submit is pressed
                while (chatroomDiv.firstChild) {
                    chatroomDiv.removeChild(chatroomDiv.firstChild);
                }
                chatroomDiv.appendChild(messageDocFrag);
            //controls position of scroll
            if (isScrolledToBottom) {
                chatroomDiv.scrollTop = chatroomDiv.scrollHeight - chatroomDiv.clientHeight
            }
        })
    }
}

export default chatFormAndAppend;