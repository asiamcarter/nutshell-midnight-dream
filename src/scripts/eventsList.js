import events from "./events"
import data from "./data"

const eventsList = {
    listEvents(){
        let eventString = "events"

        events.eventPageBuilder();
        // get events from database
        data.getData(eventString).then(allEvents => {
            let docFrag = document.createDocumentFragment();

            allEvents.forEach(event => {
                let eventIteration = events.eventBuilder(event.name, event.date, event.location);
                docFrag.appendChild(eventIteration);
            })
            let eventSection = document.querySelector(".event--container")
            eventSection.appendChild(docFrag)
        })
    }
}

export default eventsList