// Creates and displays News Articles feature
// Author: Megan Cruzen

import data from "./data"
import newsForm from "./newsForm"

const newsArticles = {

    buildArticles() {

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        // Create main news container
        let newsContainer = document.createElement("div");
        newsContainer.setAttribute("id", "news_container");

        // Add main title
        let newsContainerTitle = document.createElement("h1");
        newsContainerTitle.textContent = "News Articles";

        // Add "Add New" button - attach event listener and display form
        let newsAddButton = document.createElement("button");
        newsAddButton.textContent = "Add New Article";
        newsAddButton.setAttribute("class", "add_new_article");

        // Attach event listener to button in form
        newsAddButton.addEventListener("click", newsForm.displayForm);

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

                let newsSynopsis = document.createElement("div");
                newsSynopsis.setAttribute("class", "news_synopsis");
                newsSynopsis.textContent = article.synopsis;

                let newsURL = document.createElement("div");
                newsURL.setAttribute("class", "news_link");
                newsURL.innerHTML = `<a href="${article.url}">Read article</a>`;

                let newsEtc = document.createElement("div");
                newsEtc.setAttribute("class", "news_etc");

                let newsAuthor = document.createElement("div");
                newsAuthor.setAttribute("class", "news_author");
                newsAuthor.innerHTML = `Posted by ${article.userId}`; // replace with username

                // Add conditional
                // If userId = current user, show "Delete" button
                let deleteArticleBtn = document.createElement("button");
                deleteArticleBtn.setAttribute("class", "article_delete_btn");
                deleteArticleBtn.textContent = "Delete";

                newsEtc.appendChild(newsAuthor);
                newsEtc.appendChild(deleteArticleBtn);

                articleSection.appendChild(newsTitle);
                articleSection.appendChild(newsSynopsis);
                articleSection.appendChild(newsURL);
                articleSection.appendChild(newsEtc);

                // Append each item to doc frag
                newsDocFrag.appendChild(articleSection);

            })

            // Append doc frag to news container
            newsContainer.appendChild(newsDocFrag);

        });

    }

}

export default newsArticles;