// Builds friends page
// Contains functionality to add and delete friends
// Author: Asia Carter & Hunter Metts

import eventListeners from "./eventListeners"
import data from "./data"
const friends = {
friendPageBuilder(){

    // Current nav item
    let navItem = document.querySelector("#nav_links");
    let navUL = navItem.firstChild;
    let allLinks = navUL.childNodes;
    console.log(navUL.childNodes)
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].removeAttribute("class");
    }
    let currentLink = navUL.childNodes[4];
    currentLink.setAttribute("class", "current_page");

    data.getFriendsList()
    .then(allFriends => {
        console.log("All Friends:", allFriends)
        allFriends.forEach(friend => {
        let container = document.querySelector(".yourFriends")
        let friendHeader = document.createElement("h3");
        friendHeader.innerHTML=`<h2>${friend.username}</h2>`;
        container.appendChild(friendHeader)
          let deleteFriendButton = document.createElement("button")
          deleteFriendButton.textContent = "Delete"
          deleteFriendButton.setAttribute("id", `friend--${friend.id}`)
        container.appendChild(deleteFriendButton)
                deleteFriendButton.addEventListener("click", () => {
                let friendDeleteId = event.target.id.split("--")[1]
                data.deleteFriend(friendDeleteId)
                .then(response => {
                    friends.friendPageBuilder()
                })
                })
    })
})

    let output = document.querySelector(".output");
    output.innerHTML=" ";
    let friendContainer = document.createElement("article");
    friendContainer.setAttribute("class", "friendContainer")
    output.appendChild(friendContainer);
    let friendHeader = document.createElement("h1");
    friendHeader.setAttribute("class", "yourFriends")
    friendHeader.innerHTML = "Your Friends:";
    friendContainer.appendChild(friendHeader);

    let friendInput = document.createElement("input");
    friendInput.classList.add("friendInputField");
    friendInput.setAttribute("placeholder", "Type in Friend Name Here");
    let friendInputButton = document.createElement("button");
    friendInputButton.classList.add("friendInputButton");
    friendInputButton.textContent = "Search for your friend";
    friendContainer.appendChild(friendInput);
    friendContainer.appendChild(friendInputButton);

    friendInputButton.addEventListener("click", eventListeners.addAFriend)

    // data.getFriendsList()
    // .then(response => {
    //     response.forEach(friend => {
    //     let container = document.querySelector(".yourFriends")
    //     let friendHeader = document.createElement("h3");
    //     friendHeader.textContent=friend.otherId;
    //     container.appendChild(friendHeader);
    //     })
    // })}
    }
}

export default friends