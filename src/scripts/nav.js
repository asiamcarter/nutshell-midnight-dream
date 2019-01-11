import news from "./news"
import eventsList from "./eventsList"
import taskList from "./tasks"
import chat from "./chat"

const nav = {
    buildNav() {
        let navContainer = document.querySelector("#navigation");

        let logo = document.createElement("div");
        logo.setAttribute("id", "logo");
        logo.textContent = "The Turtle Tub";

        let navLinks = document.createElement("div");
        navLinks.setAttribute("id", "nav_links");
        let navUL = document.createElement("ul");

        let item1 = document.createElement("li");
        let link1 = document.createElement("a");
        link1.setAttribute("href", "#");
        link1.textContent = "News";
        item1.appendChild(link1);
        item1.addEventListener("click", news.buildArticles);

        let item2 = document.createElement("li");
        let link2 = document.createElement("a");
        link2.setAttribute("href", "#");
        link2.textContent = "Events";
        item2.appendChild(link2);
        item2.addEventListener("click", eventsList.listEvents);

        let item3 = document.createElement("li");
        let link3 = document.createElement("a");
        link3.setAttribute("href", "#");
        link3.textContent = "Tasks";
        item3.appendChild(link3);
        item3.addEventListener("click", taskList.createTaskList);

        let item4 = document.createElement("li");
        let link4 = document.createElement("a");
        link4.setAttribute("href", "#");
        link4.textContent = "Chat";
        item4.appendChild(link4);
        item4.addEventListener("click", chat.chatPageLoad);

        let item5 = document.createElement("li");
        item5.textContent = "Friends";

        let item6 = document.createElement("li");
        item6.textContent = "Logout";

        navUL.appendChild(item1);
        navUL.appendChild(item2);
        navUL.appendChild(item3);
        navUL.appendChild(item4);
        navUL.appendChild(item5);
        navUL.appendChild(item6);
        navLinks.appendChild(navUL);

        navContainer.appendChild(logo);
        navContainer.appendChild(navLinks);
    }
}

export default nav;