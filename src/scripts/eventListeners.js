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

    saveNewsArticle() {
        console.log("Clicky click!");
    }

}

export default eventListeners