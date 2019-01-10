const events = {
    eventPageBuilder(){
        let container = document.querySelector(".output");

        // to clear the DOM
        container.textContent = "";

        // create HTML elements to be added to the DOM
        let eventSection = document.createElement("section");
        let eventH1 = document.createElement("h1");
        let eventDiv = document.createElement("div")

        // add text to title
        eventH1.textContent = "Events";

        // add class to elements to be able to grab them later and add styling
        eventSection.classList.add("event--container");
        eventDiv.classList.add("posted--container")

        // add title and div to section
        eventSection.appendChild(eventH1);
        eventSection.appendChild(eventDiv)

        container.appendChild(eventSection);

    },
    // add events to the section container within each section's unique DIV component
    eventBuilder(name, date, location, user) {
        // grab events container
        let eventSection = document.createDocumentFragment();

        // create HTML elements that will be added to the DOM
        let eventDivContainer = document.createElement("div");
        let eventDetailsDiv = document.createElement("div")
        let eventH2 = document.createElement("h2");
        let eventDateP = document.createElement("p");
        let eventLocP = document.createElement("p");
        let eventUserDiv = document.createElement("div")
        let eventEdit = document.createElement("button");
        let eventPosterName = document.createElement("h4")

        // add class to small containers and large container in order to use flex-box
        eventDivContainer.classList.add("event--outer--container")
        eventDetailsDiv.classList.add("event--inner--container")
        eventPosterName.classList.add("event--inner--container")

        // add text to elements that will be displaying the event information
        eventH2.textContent = name;
        eventDateP.textContent = date;
        eventLocP.textContent = location;
        eventEdit.textContent = "EDIT";
        eventPosterName.textContent = user;

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