<<<<<<< HEAD
import data from "./data"
import eventListeners from "./eventListeners"
=======
// import welcome from "./welcome"
// import data from "./data"
>>>>>>> master

const chat = {

    chatFoodEditForm () {
        let editMessageField = document.createElement("input");
        editMessageField.setAttribute("type", "text");
        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        let messageDivId = event.target.id;
        let messageId = messageDivId.split("--")[1]
        data.getChatData2(messageId)
        .then(response => {
            console.log("RESPONSE:", response)

        saveButton.addEventListener("click", () => {
            let date = new Date();
            let editedMessage = {
                message: editMessageField.value,
                time: date,
                userId: "2"
            }

            data.putChatEdit(response.id, editedMessage)
            .then(response => {
                chat.userMessageToDOM()
            })
        })



        })

        let messageDiv = document.querySelector(".chatroomDiv");

        while (messageDiv.firstChild) {
            messageDiv.removeChild(messageDiv.firstChild);
        }
        messageDiv.appendChild(editMessageField);
        messageDiv.appendChild(saveButton);
    },
    //method takes an object as an argument and creates an HTML template
    userMessageHTML(message) {

        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection");
        userNameSection.textContent = `${message.user.name}`
        console.log(message.user)

        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");
        // userPhotoSection.textContent=`${message.photo}`

        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");
        userMessageContent.classList.add(`chatroomDiv--${message.id}`);
        userMessageContent.textContent =`${message.message} ${message.time} `

        let messageEditButton = document.createElement("button");
        messageEditButton.textContent="edit";
        messageEditButton.setAttribute("id", `messageEditButton--${message.id}`)



        userMessageDiv.appendChild(userNameSection);
        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);
        userMessageContent.appendChild(messageEditButton);


        messageEditButton.addEventListener("click", chat.chatFoodEditForm)


        return userMessageDiv;
    },
//appends messages to the DOM along with scrollbar that stays anchored to the bottom of the div so that the most recent message is always visible.
    userMessageToDOM() {
        data.getChatData()
        .then (parsedMessages => {
            let messageDocFrag = document.createDocumentFragment()
            let chatroomDiv = document.querySelector(".chatroomDiv");
            let c = 0;
            const isScrolledToBottom = chatroomDiv.scrollHeight - chatroomDiv.clientHeight <= chatroomDiv.scrollTop +1;
            parsedMessages.forEach (message => {
                let messageHTML = chat.userMessageHTML(message);
                console.log(messageHTML)
                messageDocFrag.appendChild(messageHTML);
            })
            //clears DOM so that messages aren't repeated when submit is pressed
              while (chatroomDiv.firstChild) {
                  chatroomDiv.removeChild(chatroomDiv.firstChild);
              }
              chatroomDiv.appendChild(messageDocFrag);

              if (isScrolledToBottom) {
                  chatroomDiv.scrollTop = chatroomDiv.scrollHeight - chatroomDiv.clientHeight
              }
        })
    },
    //method creates chatroom div, message input field and message submit button
    chatPageLoad() {
        chat.userMessageToDOM();
        let outPutArticle = document.querySelector(".output");
        outPutArticle.textContent= " ";
        outPutArticle.innerHTML+="<h1>CHAT</h1>";
        let chatroomDiv = document.createElement("div");
        chatroomDiv.classList.add("chatroomDiv");
        outPutArticle.appendChild(chatroomDiv);

        let messageInputField = document.createElement("textarea");
        messageInputField.classList.add("messageInput");
        messageInputField.setAttribute("type", "text");
        outPutArticle.appendChild(messageInputField);

        let messageSubmitButton = document.createElement("button");
        messageSubmitButton.innerHTML+= "Submit";
        messageSubmitButton.setAttribute("id", "messageSubmit");
        outPutArticle.appendChild(messageSubmitButton);
        let submitButton = document.querySelector("#messageSubmit");
        submitButton.addEventListener("click", eventListeners.chatMessage)
        let messageInput = document.querySelector(".messageInput");
        messageInput.addEventListener("keyup", eventListeners.chatClickOnEnter);
    }
}

export default chat;