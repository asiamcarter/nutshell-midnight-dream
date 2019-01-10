const chat = {
    //method creates chatroom div, message input field and message submit button
    chatPageLoad() {
        let outPutArticle = document.querySelector(".output");
        outPutArticle.innerHTML+="CHAT";
        let chatroomDiv = document.createElement("div");
        chatroomDiv.classList.add("chatroomDiv");
        outPutArticle.appendChild(chatroomDiv);

        let messageInputField = document.createElement("input");
        messageInputField.classList.add("messageInput");
        messageInputField.setAttribute("type", "text");
        outPutArticle.appendChild(messageInputField);

        let messageSubmitButton = document.createElement("button");
        messageSubmitButton.innerHTML+= "Submit";
        messageSubmitButton.setAttribute("id", "messageSubmit");
        outPutArticle.appendChild(messageSubmitButton);
    },

    userMessageHTML(message) {

        let userMessageDiv = document.createElement("div");
        userMessageDiv.classList.add("userMessage");

        let userNameSection = document.createElement("section");
        userNameSection.classList.add("usernameSection");

        let userPhotoSection = document.createElement("section");
        userPhotoSection.classList.add("userPhotoSection");

        let userMessageContent = document.createElement("section");
        userMessageContent.classList.add("userMessageContent");

        userMessageDiv.appendChild(userNameSection);
        userMessageDiv.appendChild(userPhotoSection);
        userMessageDiv.appendChild(userMessageContent);

        let chatroomDiv = document.querySelector(".chatroomDiv");
        chatroomDiv.appendChild(userMessageDiv);
    }
}

export default chat;