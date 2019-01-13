// Creates and displays News Form and saves new articles entered via form.
// Author: Megan Cruzen

import eventListeners from "./eventListeners"
import data from "./data"
import newsArticles from "./news"

const newsForm = {

    displayForm() {

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        // Create main form container
        let formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form_container");

        // Add main title
        let formContainerTitle = document.createElement("h1");
        formContainerTitle.textContent = "Add New Article";
        formContainer.appendChild(formContainerTitle);

        // Create "Title" field
        let title = document.createElement("fieldset");
        let titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleLabel.setAttribute("for", "article_name");
        let titleInput = document.createElement("input");
        titleInput.setAttribute("id", "article_name");
        titleInput.setAttribute("name", "article_name");
        title.appendChild(titleLabel);
        title.appendChild(titleInput);

        // Create "Synopsis" textarea
        let synopsis = document.createElement("fieldset");
        let synopsisLabel = document.createElement("label");
        synopsisLabel.textContent = "Synopsis";
        synopsisLabel.setAttribute("for", "article_name");
        let synopsisBox = document.createElement("textarea");
        synopsisBox.setAttribute("id", "article_synopsis");
        synopsisBox.setAttribute("name", "article_synopsis");
        synopsisBox.setAttribute("rows", "4");
        synopsisBox.setAttribute("cols", "50");
        synopsis.appendChild(synopsisLabel);
        synopsis.appendChild(synopsisBox);

        // Create "URL" field
        let url = document.createElement("fieldset");
        let urlLabel = document.createElement("label");
        urlLabel.textContent = "URL";
        urlLabel.setAttribute("for", "article_url");
        let urlInput = document.createElement("input");
        urlInput.setAttribute("id", "article_url");
        urlInput.setAttribute("name", "article_url");
        url.appendChild(urlLabel);
        url.appendChild(urlInput);

        // Create "Save Article" button and attach event listener
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save Article";
        saveBtn.setAttribute("class", "save_new_article");

        // Attach event listener to button, to POST to database
        saveBtn.addEventListener("click", eventListeners.saveNewsArticle);

        // Add each field to form
        formContainer.appendChild(title);
        formContainer.appendChild(synopsis);
        formContainer.appendChild(url);
        formContainer.appendChild(saveBtn);

        // Add form to output container
        outputContainer.appendChild(formContainer);

    },

    checkFields() {

        // Get user input
        let inputArticleName = document.querySelector("#article_name").value;
        let inputSynopsis = document.querySelector("#article_synopsis").value;
        let inputURL = document.querySelector("#article_url").value;

        // If forms are not filled out, display error message.
        // Otherwise, continue on to POST entry to database.

        if (inputArticleName.length === 0 || inputSynopsis.length === 0 || inputURL.length === 0) {
            alert("Please fill out all fields.");
        }
        else {
            newsForm.postArticle();
        }
    },

    postArticle() {

        // Get user input
        let inputArticleName = document.querySelector("#article_name").value;
        let inputSynopsis = document.querySelector("#article_synopsis").value;
        let inputURL = document.querySelector("#article_url").value;

        // Get current time
        let months = ["1", "2", "3", "4", "May", "June", "July", "August", "September", "October", "November", "December"];
        let d = new Date();
        let month = d.getMonth();
        let date = d.getDate();
        let year = d.getFullYear();
        let hours = d.getHours();
        let minutes = ("0" + d.getMinutes()).slice(-2);
        // let secs = ("0" + d.getSeconds()).slice(-2);
        let dateDisplay = months[month] + "/" + date + "/" + year + " at " + hours + ":" + minutes;
        let timestamp = d.getTime();

        // Get current userId
        let sessionUser = sessionStorage.getItem("User")
        let userID = sessionUser;

        // Create new object with correct DB structure to represent a single news article:
        let articleToSave = {
          title: inputArticleName,
          synopsis: inputSynopsis,
          url: inputURL,
          timestamp: timestamp,
          date: dateDisplay,
          userId: userID
        }

        // Save article to database
        // Then rebuild the article list on DOM
        data.postNewsData(articleToSave)
        .then(response => {
            newsArticles.buildArticles()
        })

    }

}

export default newsForm;