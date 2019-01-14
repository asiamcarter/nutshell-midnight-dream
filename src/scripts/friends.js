const friends = {
friendPageBuilder(){
let output = document.querySelector(".output");
let friendContainer = document.createElement("article");
output.appendChild(friendContainer);
let friendHeader = document.createElement("h1");
friendHeader.innerHTML = "Your Friends:";
friendContainer.appendChild(friendHeader);
}
}