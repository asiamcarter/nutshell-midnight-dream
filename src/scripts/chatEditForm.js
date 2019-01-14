import data from "./data"
import chatFormAndAppend from "./chatFormAndAppend";
//This module creates the form shown when edit button is pressed.
const chatEditForm = {
    chatFoodEditForm (message) {
        let messageDivId = event.target.id;
        let messageId = messageDivId.split("--")[1]
        let editMessageField = document.createElement("input");
        editMessageField.setAttribute("type", "text");
        editMessageField.value = message.message;
        console.log(editMessageField)
        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        // let messageDivId = event.target.id;
        // let messageId = messageDivId.split("--")[1]
        //HTTP GET request gets message array, pass in the message id
        data.getChatData2(messageId)
        .then(response => {
            console.log(response)

            //add event listener to save button. Event listener creates object to PUT in database.json
            saveButton.addEventListener("click", () => {
                let date = new Date();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let timestamp = `${hours}:${minutes}`;
                let editedMessage = {
                    message: editMessageField.value,
                    time: timestamp,
                    userId: "2"
                }
                //HTTP PUT request takes the new object and puts it in the place of the former object. Then the new object is rendered to the DOM.
                    data.putChatEdit(response.id, editedMessage)
                    .then(response => {
                        chatFormAndAppend.userMessageToDOM()
                    })
            })
        })
    //Empties the chatroomdiv and replaces it with the edit message form and save button

    let messageDiv = document.querySelector(`.chatroomDiv--${messageId}`);

    while (messageDiv.firstChild) {
        messageDiv.removeChild(messageDiv.firstChild);
    }
    messageDiv.appendChild(editMessageField);
    messageDiv.appendChild(saveButton);
    }
}

export default chatEditForm