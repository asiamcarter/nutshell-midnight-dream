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
        newEventDate.setAttribute("type", "date");
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
    editForm(eventId, eventToEdit) {
        console.log(eventId)
        let eventNameEl = document.createElement("p");

        let eventNameLabel = document.createElement("label");
        eventNameLabel.textContent = "Event Name"
        let eventNameInput = document.createElement("input");
        eventNameInput.value = eventToEdit.name;

        eventNameEl.appendChild(eventNameLabel);
        eventNameEl.appendChild(eventNameInput);

        let eventDateLabel = document.createElement("label");
        eventDateLabel.textContent = "Event Date"
        let eventDateInput = document.createElement("input");
        eventDateInput.value = eventToEdit.date;

        eventNameEl.appendChild(eventDateLabel);
        eventNameEl.appendChild(eventDateInput);

        let eventLocationLabel = document.createElement("label");
        eventLocationLabel.textContent = "Event Location"
        let eventLocationInput = document.createElement("input");
        eventLocationInput.value = eventToEdit.location;

        eventNameEl.appendChild(eventLocationLabel);
        eventNameEl.appendChild(eventLocationInput);

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";

        updateButton.addEventListener("click", () => {
            let editedEvent = {
                name: eventNameInput.value,
                date: eventDateInput.value,
                location: eventLocationInput.value,
                userId: eventToEdit.user.id
            }

            data.addEventEdit(eventId, editedEvent)
            .then(response => {
                eventsList.listEvents()
                console.log(response)
            })
        })
        let eventDiv = document.querySelector(`#event--${eventId}`)

        while (eventDiv.firstChild) {
            eventDiv.removeChild(eventDiv.firstChild)
        }
        eventDiv.appendChild(eventNameEl)
        eventDiv.appendChild(updateButton)
    }
}

export default eventsForm