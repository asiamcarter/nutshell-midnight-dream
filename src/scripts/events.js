const events = {
    eventPageBuilder(){
        let container = document.querySelector(".output");

        // to clear the DOM
        container.textContent = "";

        // create HTML elements to be added to the DOM
        let eventSection = document.createElement("section");
        let eventH1 = document.createElement("h1");

        // add text to title
        eventH1.textContent = "Events";

        // add class to section to be able to grab it later
        eventSection.classList.add("event--container");

        // add title to section
        eventSection.appendChild(eventH1);

        container.appendChild(eventSection);

    },
    // add events to the section container within each section's unique DIV component
    eventBuilder(name, date, location) {
        // grab events container
        let eventSection = document.createDocumentFragment();

        // create HTML elements that will be added to the DOM
        let eventDiv = document.createElement("div");
        let eventH2 = document.createElement("h2");
        let eventDateP = document.createElement("p");
        let eventLocP = document.createElement("p");

        // add text to elements that will be displaying the event information
        eventH2.textContent = name;
        eventDateP.textContent = date;
        eventLocP.textContent = location;

        // append specific event information to a container
        eventDiv.appendChild(eventH2);
        eventDiv.appendChild(eventDateP);
        eventDiv.appendChild(eventLocP);

        // append the containers with specific event information to the section
        eventSection.appendChild(eventDiv);

        // put the section with events into a fragment
        return eventSection
    }
};

export default events