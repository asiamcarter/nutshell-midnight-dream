
import data from "./data"
import chatEditForm from "./chatEditForm"
//Module creates message HTML and appends to To DOM
const chatFormAndAppend = {
    //method takes an object as an argument and creates an HTML template
    userMessageHTML(message, id) {
        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection");
        userNameSection.textContent = `${message.user.id}`

        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");
        // userPhotoSection.textContent=`${message.photo}`

        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");
        userMessageContent.classList.add(`chatroomDiv--${id}`);
        userMessageContent.textContent =`${message.message} ${message.time} `

        let messageEditButton = document.createElement("button");
        messageEditButton.textContent="edit";
        messageEditButton.setAttribute("id", `messageEditButton--${message.id}`)

        userMessageDiv.appendChild(userNameSection);
        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);
        userMessageContent.appendChild(messageEditButton);




        data.getChatData()
        .then(() => {

            messageEditButton.addEventListener("click", () => {
                let messageDivId = event.target.id;
                let messageId = messageDivId.split("--")[1]
                chatEditForm.chatFoodEditForm(message)
            })
        })

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
    },
}

export default chatFormAndAppend;