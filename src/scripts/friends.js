import eventListeners from "./eventListeners"
const friends = {
friendPageBuilder(){
    let output = document.querySelector(".output");
    output.innerHTML=" ";
    let friendContainer = document.createElement("article");
    friendContainer.setAttribute("class", "friendContainer")
    output.appendChild(friendContainer);
    let friendHeader = document.createElement("h1");
    friendHeader.innerHTML = "Your Friends:";
    friendContainer.appendChild(friendHeader);

    let friendInput = document.createElement("input");
    friendInput.classList.add("friendInputField");
    friendInput.setAttribute("placeholder", "Type in Friend Name Here");
    let friendInputButton = document.createElement("button");
    friendInputButton.classList.add("friendInputButton");
    friendInputButton.textContent = "Add A Friend";
    friendContainer.appendChild(friendInput);
    friendContainer.appendChild(friendInputButton);

    friendInputButton.addEventListener("click", eventListeners.addAFriend)
    }
}

export default friends