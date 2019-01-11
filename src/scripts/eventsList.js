import eventListeners from "./eventListeners"
import events from "./events"
import data from "./data"

const eventsList = {
    listEvents(){
        let eventString = "events?_expand=user"

        // create container for events heading and all events
        events.eventPageBuilder();
        eventListeners.newEventButtonClick();


        // get events from database
        data.getData(eventString)
            .then(allEvents => {
                // declare document fragment that will grab all events as they are built into HTML elements
                let docFrag = document.createDocumentFragment();

                // add HTML for each event in the database and add to document fragment
                allEvents.forEach(event => {
                    let eventIteration = events.eventBuilder(event.name, event.date, event.location, event.user.name);
                    docFrag.appendChild(eventIteration);
                })

                // add document fragment to the container
                let eventDiv = document.querySelector(".posted--container");
                eventDiv.appendChild(docFrag);

                // event listener that adds edit functionality
                eventListeners.editEventButtonClick();
        })
    }
}

export default eventsList