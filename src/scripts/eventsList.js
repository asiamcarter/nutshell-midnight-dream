import eventListeners from "./eventListeners"
import events from "./events"
import data from "./data"

const eventsList = {
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
        data.getData(eventString)
            .then(allEvents => {
                allEvents.sort(function(a, b){
                    return new Date(a.date) - new Date(b.date);
                });

                // declare document fragment that will grab all events as they are built into HTML elements
                let docFrag = document.createDocumentFragment();

                // add HTML for each event in the database and add to document fragment
                allEvents.forEach(event => {
                    // create an if else statement that will grab only the events of either the session user or the friend connections of the user
                    if (event.user.id === Number(sessionUser)){
                        let eventIteration = events.eventBuilder(event.id, event);
                        docFrag.appendChild(eventIteration);
                    } else {
                        // loop through each friend ID to find events that belong only to those users and add them to the DOM
                        for(let i = 0; i < friendsList.length; i++) {
                            if (event.user.id === friendsList[i]){
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
    }
}

export default eventsList