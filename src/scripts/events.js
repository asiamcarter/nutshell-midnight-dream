import data from "./data";
import eventsForm from "./eventsForm";

const events = {
    eventPageBuilder(){
        let container = document.querySelector(".output");

        // to clear the DOM
        container.textContent = "";

        // create HTML elements to be added to the DOM
        let eventSection = document.createElement("section");
        let eventH1 = document.createElement("h1");
        let eventDiv = document.createElement("div")
        let eventAddNew = document.createElement("button")

        // add text to title
        eventH1.textContent = "Events";
        eventAddNew.textContent = "Add New Event"

        // add class to elements to be able to grab them later and add styling
        eventSection.classList.add("event--container");
        eventDiv.classList.add("posted--container")
        eventAddNew.classList.add("event--add")

        // add div to section
        eventSection.appendChild(eventDiv);
        eventSection.appendChild(eventAddNew);

        // add title and container for all events to the existing article
        container.appendChild(eventH1);
        container.appendChild(eventSection);
    },
    // add events to the section container within each section's unique DIV component
    eventBuilder(id, eventObject) {
        // grab events container
        let eventSection = document.createDocumentFragment();

        // create HTML elements that will be added to the DOM
        let eventDivContainer = document.createElement("div");
        let eventDetailsDiv = document.createElement("div")
        let eventH2 = document.createElement("h2");
        let eventDateP = document.createElement("p");
        let eventLocP = document.createElement("p");
        let eventUserDiv = document.createElement("div");
        let eventEdit = document.createElement("button");
        let eventPosterName = document.createElement("h4");

        // set unique id for each event container
        eventDivContainer.setAttribute("id", `event--${id}`);
        eventEdit.setAttribute("id", `event--button-${id}`);

        eventEdit.addEventListener("click", () => {
            let eventContainerId = event.target.parentNode.parentNode.id;
            let eventId =eventContainerId.split("--")[1];
            data.getEvent(eventId)
            .then(response => {
                console.log(response);
                eventsForm.editForm(id, eventObject);
            })
        });

        // add class to small containers and large container in order to use flex-box
        eventDivContainer.classList.add("event--outer--container");
        eventDetailsDiv.classList.add("event--inner--container");
        eventPosterName.classList.add("event--inner--container");
        eventEdit.classList.add("event--edit--button");

        // add text to elements that will be displaying the event information
        eventH2.textContent = eventObject.name;
        eventDateP.textContent = eventObject.date;
        eventLocP.textContent = eventObject.location;
        eventEdit.textContent = "EDIT";
        eventPosterName.textContent = eventObject.user.name;

        // append specific event information to their respective containers
        eventDetailsDiv.appendChild(eventH2);
        eventDetailsDiv.appendChild(eventDateP);
        eventDetailsDiv.appendChild(eventLocP);
        eventUserDiv.appendChild(eventPosterName);
        eventUserDiv.appendChild(eventEdit);

        // append smaller containers to total event container
        eventDivContainer.appendChild(eventDetailsDiv);
        eventDivContainer.appendChild(eventUserDiv);

        // append the containers with specific event information to the section
        eventSection.appendChild(eventDivContainer);

        // put the section with events into a fragment
        return eventSection
    }
};

export default events