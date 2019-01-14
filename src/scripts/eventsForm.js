import data from "./data";
import eventsList from "./eventsList";

const eventsForm = {
    createEventForm(){
        let container = document.querySelector(".output");

        // create form HTML elements
        let newEventDiv = document.createElement("div");
        let newEventName = document.createElement("input");
        let newEventDate = document.createElement("input");
        let newEventLocation = document.createElement("input");
        let saveEventFormButton = document.createElement("button");

        // add class to form container
        newEventDiv.classList.add("add--event--form");
        saveEventFormButton.classList.add("event--save--button");
        newEventName.classList.add("new--event--name");
        newEventDate.classList.add("new--event--date");
        newEventLocation.classList.add("new--event--location");

        // add text to button
        saveEventFormButton.textContent = "Save Event"

        // define input attributes
        newEventName.setAttribute("type", "text");
        newEventName.setAttribute("value", "Event Name");
        newEventDate.setAttribute("type", "datetime-local");
        newEventDate.setAttribute("value", "Birthday");
        newEventLocation.setAttribute("type", "text");
        newEventLocation.setAttribute("value", "Event Location")

        // append input fields to the form container
        newEventDiv.appendChild(newEventName);
        newEventDiv.appendChild(newEventDate);
        newEventDiv.appendChild(newEventLocation);
        newEventDiv.appendChild(saveEventFormButton);

        // append form container to event container (temporarily)
        container.appendChild(newEventDiv);
    },

    // method to create the form that edits existing events
    editForm(eventId, eventToEdit) {

        // create containers to hold the inputs and their labels
        let eventNameEl = document.createElement("p");
        let eventDateEl = document.createElement("p");
        let eventLocationEl = document.createElement("p");

        // declare inputs, labels, and their values
        let eventNameLabel = document.createElement("label");
        eventNameLabel.textContent = "Event Name";
        let eventNameInput = document.createElement("input");
        eventNameInput.value = eventToEdit.name;
        let eventDateLabel = document.createElement("label");
        eventDateLabel.textContent = "Event Date";
        let eventDateInput = document.createElement("input");
        eventDateInput.value = eventToEdit.date;
        eventDateInput.setAttribute("type", "datetime-local");
        let eventLocationLabel = document.createElement("label");
        eventLocationLabel.textContent = "Event Location";
        let eventLocationInput = document.createElement("input");
        eventLocationInput.value = eventToEdit.location;

        // append inputs and labels
        eventNameEl.appendChild(eventNameLabel);
        eventNameEl.appendChild(eventNameInput);
        eventDateEl.appendChild(eventDateLabel);
        eventDateEl.appendChild(eventDateInput);
        eventLocationEl.appendChild(eventLocationLabel);
        eventLocationEl.appendChild(eventLocationInput);

        // create update button
        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";

        // add an event upon clicking the update button that will take the newly added information and replace the existing event with the new information
        updateButton.addEventListener("click", () => {
            // object that contains the new information (or old information that is auto-filled into the input fields)
            let editedEvent = {
                name: eventNameInput.value,
                date: eventDateInput.value,
                location: eventLocationInput.value,
                userId: eventToEdit.user.id
            };

            // access the database and post the updated event
            data.addEventEdit(eventId, editedEvent)
            // upload the updated list of events
            .then(response => {
                eventsList.listEvents()
            })
        });

        // access the container of the event that has been selected to edit
        let eventDiv = document.querySelector(`#event--${eventId}`);

        // remove the current information in the selected div
        while (eventDiv.firstChild) {
            eventDiv.removeChild(eventDiv.firstChild);
        }

        // add the edit fields to the selected div
        eventDiv.appendChild(eventNameEl);
        eventDiv.appendChild(eventDateEl);
        eventDiv.appendChild(eventLocationEl);
        eventDiv.appendChild(updateButton);
    }
}

export default eventsForm