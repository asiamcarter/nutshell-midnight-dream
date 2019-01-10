const events = {
    eventBuilder(name, date, location) {
        // to clear the DOM
        document.querySelector(".output").textContent = "";

        

        // create HTML elements that will be added to the DOM
        let eventSection = document.createElement("section");
        let eventH1 = document.createElement("h1");
        let eventDiv = document.createElement("div");
        let eventH2 = document.createElement("h2");
        let eventDateP = document.createElement("p");
        let eventLocP = document.createElement("p");

        // add text to elements that will be displaying the event information
        eventH1.textContent = "Events";
        eventH2.textContent = name;
        eventDateP.textContent = date;
        eventLocP.textContent = location;

        // append specific event information to a container
        eventDiv.appendChild(eventH2);
        eventDiv.appendChild(eventDateP);
        eventDiv.appendChild(eventLocP);

        // append the containers with specific event information to the section
        eventSection.appendChild(eventH1);
        eventSection.appendChild(eventDiv);

        // put the section with events into a fragment
        let content = docFrag.appendChild(eventSection);
        document.querySelector(".output").appendChild(content)
    }
};

export default events