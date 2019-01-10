// Creates and displays News Articles feature
// Author: Megan Cruzen

import data from "./data"

const newsArticles = {

    buildArticles() {

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        // Create news container
        let newsContainer = document.createElement("div");
        newsContainer.setAttribute("id", "news_container");

        // Add Title
        let newsContainerTitle = document.createElement("h1");
        newsContainerTitle.textContent = "News Articles";

        // Add "Add New" button - attach event listener and display form
        let newsAddButton = document.createElement("button");
        newsAddButton.textContent = "Add New Article";
        newsAddButton.setAttribute("class", "add_new_article");

        // NEED TO DO: Attach event listener to button in form
        // submitButton.addEventListener("click", this.handleAddNewFood)

        newsContainer.appendChild(newsContainerTitle);
        newsContainer.appendChild(newsAddButton);

        outputContainer.appendChild(newsContainer);

        // Create doc frag to hold each article item
        let newsDocFrag = document.createDocumentFragment();

        // GET data
        data.newsData()
        .then(allArticles => {
            // console.log(allArticles);
            allArticles.forEach(article => {

                // Loop through items and build each news item

                let articleSection = document.createElement("div");
                articleSection.setAttribute("class", "article_section");

                let newsTitle = document.createElement("h3");
                newsTitle.textContent = article.title;

                let newsSynopsis = document.createElement("p");
                newsSynopsis.setAttribute("class", "news_synopsis");
                newsSynopsis.textContent = article.synopsis;

                let newsURL = document.createElement("p");
                newsURL.setAttribute("class", "news_link");
                newsURL.innerHTML = `<a href="${article.url}">Read article</a>`;

                articleSection.appendChild(newsTitle);
                articleSection.appendChild(newsSynopsis);
                articleSection.appendChild(newsURL);

                // Append each item to doc frag
                newsDocFrag.appendChild(articleSection);

            })

            // Append doc frag to news container
            newsContainer.appendChild(newsDocFrag);

        });

    }

}

export default newsArticles;