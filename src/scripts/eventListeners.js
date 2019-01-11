import welcome from "./welcome"
import data from "./data"

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
    },

    newEventButtonClick(){
        document.querySelector(".event--add").addEventListener("click", console.log("New Event Form will appear!"))
    }

}

export default eventListeners