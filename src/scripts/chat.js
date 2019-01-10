import data from "./data"

const chat = {
    //method creates chatroom div, message input field and message submit button
    chatPageLoad() {
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
    },
    //method takes an object as an argument and creates an HTML template
    userMessageHTML(message) {

        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection");
        userNameSection.innerHTML = `${message.user.name}`

        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");
        // userPhotoSection.textContent=`${message.photo}`

        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");
        userMessageContent.innerHTML =`${message.message} ${message.messageTime} `


        userMessageDiv.appendChild(userNameSection);
        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);

        let chatroomDiv = document.querySelector(".chatroomDiv");
        chatroomDiv.appendChild(userMessageDiv);
        return chatroomDiv;
    },

    userMessageToDOM() {
        data.chatData()
        .then (parsedMessages => {
            let messageDocFrag = document.createDocumentFragment()
            parsedMessages.forEach (message => {
                let messageHTML = this.userMessageHTML(message);
                messageDocFrag.appendChild(messageHTML);
            })
        })
    }
}

export default chat;