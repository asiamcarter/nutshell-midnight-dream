import events from "./events"
import data from "./data"

const eventsList = {
    listEvents(){
        let eventString = "events"

        // create container for events heading and all events
        events.eventPageBuilder();

        // get events from database
        data.getData(eventString).then(allEvents => {
            // declare document fragment that will grab all events as they are built into HTML elements
            let docFrag = document.createDocumentFragment();

            // add HTML for each event in the database and add to document fragment
            allEvents.forEach(event => {
                let eventIteration = events.eventBuilder(event.name, event.date, event.location);
                docFrag.appendChild(eventIteration);
            })

            // add document fragment to the container
            let eventSection = document.querySelector(".event--container")
            eventSection.appendChild(docFrag)
        })
    }
}

export default eventsList