// Creates and displays News Articles feature
// Author: Megan Cruzen

import data from "./data"
import newsForm from "./newsForm"

const newsArticles = {

    buildArticles() {
        let nav = document.getElementById("navigation");
        nav.style.visibility = "visible";

        // Current nav item
        let navItem = document.querySelector("#nav_links");
        let navUL = navItem.firstChild;
        let allLinks = navUL.childNodes;
        console.log(navUL.childNodes)
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].removeAttribute("class");
        }
        let currentLink = navUL.childNodes[0];
        currentLink.setAttribute("class", "current_page");

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        // Create main news container
        let newsWrapper = document.createElement("div");
        newsWrapper.setAttribute("id", "news_wrapper");

        // Create container to hold title and "Add New" button
        let newsTop = document.createElement("div");
        newsTop.setAttribute("id", "news_top");

        // Add main title
        let newsContainerTitle = document.createElement("h1");
        newsContainerTitle.textContent = "News Articles";

        // Add "Add New" button
        let newsAddButton = document.createElement("button");
        newsAddButton.textContent = "Add New Article";
        newsAddButton.setAttribute("class", "add_new_article");

        newsTop.appendChild(newsContainerTitle);
        newsTop.appendChild(newsAddButton);

        // Attach event listener to button, to display form
        newsAddButton.addEventListener("click", newsForm.displayForm);

        // Add container for JUST articles
        let articleContainer = document.createElement("div");
        articleContainer.setAttribute("id", "article_container");

        newsWrapper.appendChild(newsTop);
        newsWrapper.appendChild(articleContainer);

        outputContainer.appendChild(newsWrapper);

        // Create doc frag to hold each article item
        let newsDocFrag = document.createDocumentFragment();

        // Create array to hold IDs
        let idArray = [];

        // Add sessionUser ID to array
        let sessionUser = sessionStorage.getItem("User");
        idArray.push(Number(sessionUser));

        // Add each friend ID to array
        data.getFriends()
        .then(allFriends => {
            allFriends.forEach(friend => {
                idArray.push(friend.otherId);
            })
        })
        .then(function() {

            // Fetch ALL articles
            let eventString = "articles?_expand=user";
            data.getData(eventString)
            .then(allArticles => {

                // Sort articles by timestamp, newest to oldest
                allArticles.sort(function(x, y){
                    return y.timestamp - x.timestamp;
                })

                // Only create and append the articles that have a userId equal to IDs in idArray
                allArticles.forEach(article => {
                    for (let i = 0; i < idArray.length; ++i) {
                        if (idArray[i] === article.userId) {
                            let sessionUser = sessionStorage.getItem("User");

                            let articleSection = document.createElement("div");
                            articleSection.setAttribute("class", "article_section");

                            // Conditional for article styling
                            if (article.userId !== Number(sessionUser)) {
                                articleSection.classList.add("friend_article");
                            }

                            let articleInfo = document.createElement("div");
                            articleInfo.setAttribute("class", "news_info");

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

                            if (Number(sessionUser) === article.userId) {
                                newsAuthor.innerHTML = `You posted on ${article.date}`;
                            }
                            else {
                                newsAuthor.innerHTML = `${article.user.name} posted on ${article.date}`;
                            }

                            // Add author to etc
                            newsEtc.appendChild(newsAuthor);

                            // Add conditional for "Delete" button
                            // If userId = current user, show "Delete" button
                            if (Number(sessionUser) === article.userId) {
                                let deleteArticleBtn = document.createElement("button");
                                deleteArticleBtn.setAttribute("class", "article_delete_btn");
                                deleteArticleBtn.textContent = "x";

                                deleteArticleBtn.addEventListener("click", () => {
                                    let articleId = article.id;
                                    data.deleteNewsData(articleId)
                                    .then(() => {
                                        newsArticles.buildArticles()
                                    })
                                })
                                // Add delete to etc
                                newsEtc.appendChild(deleteArticleBtn);
                            }

                            // Add title, synopsis, and URL to article info
                            articleInfo.appendChild(newsTitle);
                            articleInfo.appendChild(newsSynopsis);
                            articleInfo.appendChild(newsURL);

                            // Add article info & etc to article section
                            articleSection.appendChild(articleInfo);
                            articleSection.appendChild(newsEtc);

                            // Append each item to doc frag
                            newsDocFrag.appendChild(articleSection);
                        }
                    }
                })

                // Append doc frag to ARTICLE container
                articleContainer.appendChild(newsDocFrag);

            }) // end .then(allArticles)

        }) // .then(function())
    }

}

export default newsArticles;