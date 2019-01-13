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

        // let sessionUser = sessionStorage.getItem("User");
        // console.log("Session User:", sessionUser);

        // Create empty array
        let articleArray = [];

        // GET all friends of current user
        data.getFriends()                           // gets all connections filtered by sessionUser
        .then(allFriends => {
            allFriends.forEach(friend => {
                // console.log("Friend ID:", friend.otherId);
                let friendID = friend.otherId;
                data.newsDataFriends(friendID)
                .then(allFriendArticles => {
                    allFriendArticles.forEach(friendArticle => {
                        // console.log("Friend ID:", friendID, "Article Title:", friendArticle.title);
                        articleArray.push(friendArticle);
                    })
                })
            })
        })

        data.newsData()
        .then(allUserArticles => {
            allUserArticles.forEach(article => {
                // console.log("Session User's Article Title:", articleObj.title);
                articleArray.push(article);
            })
        })

        // .then(function(){

            console.log("Final Array before");
            console.table(articleArray);

            // forEach article inside array, create HTML
            articleArray.forEach(article => {

                // Loop through items and build each news item

                console.log(article.title);

                // let articleSection = document.createElement("div");
                // articleSection.setAttribute("class", "article_section");

                // let articleInfo = document.createElement("div");
                // articleInfo.setAttribute("class", "news_info");

                // let newsTitle = document.createElement("h3");
                // newsTitle.textContent = article.title;

                // let newsSynopsis = document.createElement("div");
                // newsSynopsis.setAttribute("class", "news_synopsis");
                // newsSynopsis.textContent = article.synopsis;

                // let newsURL = document.createElement("div");
                // newsURL.setAttribute("class", "news_link");
                // newsURL.innerHTML = `<a href="${article.url}">Read article</a>`;

                // let newsEtc = document.createElement("div");
                // newsEtc.setAttribute("class", "news_etc");

                // let newsAuthor = document.createElement("div");
                // newsAuthor.setAttribute("class", "news_author");
                // newsAuthor.innerHTML = `Posted by ${article.user.name}`; // replace with username

                // // Add conditional
                // // If userId = current user, show "Delete" button
                // let deleteArticleBtn = document.createElement("button");
                // deleteArticleBtn.setAttribute("class", "article_delete_btn");
                // deleteArticleBtn.textContent = "Delete";

                // deleteArticleBtn.addEventListener("click", () => {
                //     let articleId = article.id;
                //     data.deleteNewsData(articleId)
                //     .then(response => {
                //         newsArticles.buildArticles()
                //     })
                // })

                // // Add title, synopsis, and URL to article info
                // articleInfo.appendChild(newsTitle);
                // articleInfo.appendChild(newsSynopsis);
                // articleInfo.appendChild(newsURL);

                // // Add author & delete button to etc
                // newsEtc.appendChild(newsAuthor);
                // newsEtc.appendChild(deleteArticleBtn);

                // // Add article info & etc to article section
                // articleSection.appendChild(articleInfo);
                // articleSection.appendChild(newsEtc);

                // // Append each item to doc frag
                // newsDocFrag.appendChild(articleSection);

            })

        // });

        // Append doc frag to ARTICLE container
        articleContainer.appendChild(newsDocFrag);

        console.log("Final array after", articleArray);

    }

}

export default newsArticles;