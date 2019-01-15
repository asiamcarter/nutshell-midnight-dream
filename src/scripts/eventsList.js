import eventListeners from "./eventListeners"
import events from "./events"
import data from "./data"

const eventsList = {
    yesterdaysDate(){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        if (day < 10) {
            day = `0${day}`;
        }
        if (month < 10) {
            month = `0${month}`
        }

        let yesterday = day - 1;

        // format:  "2019-01-15T11:00"

        let endOfYesterday = `${year}-${month}-${yesterday}T23:59`

        return endOfYesterday
    },
    listEvents(){
        let eventString = "events?_expand=user";
        let sessionUser = sessionStorage.getItem("User");

        // create container for events heading and all events
        events.eventPageBuilder();
        eventListeners.newEventButtonClick();

        // create and array that will hold the IDs of each friend
        let friendsList = [];
        // add each friend ID into friendsList array
        data.getFriends()
        .then(allFriends => {
            allFriends.forEach(friend => {
                friendsList.push(friend.otherId)
            })
        })

        // get events from database
        .then(function() {
            data.getData(eventString)
            .then(allEvents => {
                allEvents.sort(function(a, b){
                    return new Date(a.date) - new Date(b.date);
                });

                // declare document fragment that will grab all events as they are built into HTML elements
                let docFrag = document.createDocumentFragment();

                let endOfYesterday = eventsList.yesterdaysDate();
                console.log(endOfYesterday);

                // add HTML for each event in the database and add to document fragment
                allEvents.forEach(event => {

                    let expired = false;
                    let checkExpired = new Date(event.date) - new Date(endOfYesterday);
                    console.log(checkExpired);
                    if(checkExpired < 0){
                        expired = true
                    }

                    // create an if else statement that will grab only the events of either the session user or the friend connections of the user
                    if (event.user.id === Number(sessionUser) && expired === false){
                        let eventIteration = events.eventBuilder(event.id, event);
                        docFrag.appendChild(eventIteration);
                    } else {
                        // loop through each friend ID to find events that belong only to those users and add them to the DOM
                        for(let i = 0; i < friendsList.length; i++) {
                            if (event.user.id === friendsList[i] && expired === false){
                            let eventIteration = events.eventBuilder(event.id, event);
                            docFrag.appendChild(eventIteration);
                            }
                        }
                    }

                })

                // add document fragment to the container
                let eventDiv = document.querySelector(".posted--container");
                eventDiv.appendChild(docFrag);
                eventDiv.firstChild.classList.add("first--event");
        })
        })
    }
}

export default eventsList