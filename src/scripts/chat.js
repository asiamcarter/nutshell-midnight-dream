const chat = {
    //method creates chatroom div, message input field and message submit button
    chatPageLoad() {
        let outPutArticle = document.querySelector(".output");
    outPutArticle.innerHTML+=`${<h1>CHAT</h1>}`;
        let chatroomDiv = document.createElement("div");
        chatroomDiv.classList.add("chatroomDiv");
        outPutArticle.appendChild(chatroomDiv);

        let messageInputField = document.createElement("input");
        messageInputField.classList.add("messageInput");
        messageInputField.setAttribute("type", "text");
        chatroomDiv.appendChild(messageInputField);

        let messageSubmitButton = document.createElement("button");
        messageSubmitButton.innerHTML+= "Submit";
        messageSubmitButton.setAttribute("id", "messageSubmit");
        chatroomDiv.appendChild(messageSubmitButton);
    },

    userMessageHTML(message) {

        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection");
        userNameSection.textContent = `${message.user.name}`

        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");
        // userPhotoSection.textContent=`${message.photo}`

        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");
        userMessageContent.textContent =`${message.message} ${message.messageTime} `

        userMessageDiv.appendChild(userNameSection);
        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);

        let chatroomDiv = document.querySelector(".chatroomDiv");
        chatroomDiv.appendChild(userMessageDiv);
    }
}

export default chat;