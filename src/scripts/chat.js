import eventListeners from "./eventListeners"
import chatFormAndAppend from "./chatFormAndAppend"


const chat = {
    //method creates chatroom div, message input field and message submit button
    chatPageLoad() {
        chatFormAndAppend.userMessageToDOM();
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