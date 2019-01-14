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
        let newsWrapper = document.createElement("div");
        newsWrapper.setAttribute("id", "news_wrapper");

        // Add main title
        let newsContainerTitle = document.createElement("h1");
        newsContainerTitle.textContent = "News Articles";

        // Add "Add New" button
        let newsAddButton = document.createElement("button");
        newsAddButton.textContent = "Add New Article";
        newsAddButton.setAttribute("class", "add_new_article");

        // Attach event listener to button, to display form
        newsAddButton.addEventListener("click", newsForm.displayForm);

        // Add container for JUST articles
        let articleContainer = document.createElement("div");
        articleContainer.setAttribute("id", "article_container");

        newsWrapper.appendChild(newsContainerTitle);
        newsWrapper.appendChild(newsAddButton);
        newsWrapper.appendChild(articleContainer);

        outputContainer.appendChild(newsWrapper);

        // Create doc frag to hold each article item
        let newsDocFrag = document.createDocumentFragment();

        // Create empty array to hold articles
        let articleArray = [];

        // ALTERNATE (more concise) OPTION:
        // 1. Create array to hold IDs
        // 2. Add sessionUser ID to array
        // 3. Add each friend ID to array
        // 4. For each ID, fetch articles

        // GET all friends of current user
        // Fetches all friends' articles
        // Pushes each article into array
        data.getFriends()                           // Gets all connections filtered by sessionUser
        .then(allFriends => {
            allFriends.forEach(friend => {
                let friendID = friend.otherId;
                data.newsDataFriends(friendID)
                .then(allFriendArticles => {
                    allFriendArticles.forEach(article => {
                        articleArray.push(article);
                    })
                })
            })
        })
        // Fetches current user's articles
        // Pushes each article into array
        .then(function(){
            data.newsData()
            .then(allUserArticles => {
                allUserArticles.forEach(article => {
                    articleArray.push(article);
                })
            })
            .then(function() {

                // Sort articles by timestamp, newest to oldest
                articleArray.sort(function(x, y){
                    return y.timestamp - x.timestamp;
                })

                articleArray.forEach(article => {

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
                            deleteArticleBtn.textContent = "Delete";

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
                })

            // Append doc frag to ARTICLE container
            articleContainer.appendChild(newsDocFrag);

            })
        })

    }

}

export default newsArticles;