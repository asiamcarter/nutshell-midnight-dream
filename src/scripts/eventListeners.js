import welcome from "./welcome"
import data from "./data"
import newsArticles from "./news"

const eventListeners = {
    // Function that runs function from WELCOME.JS (Builds registration form whem "here" is clicked)
    onRegistrationFormClick(){
        welcome.registrationBuilderAndAppend();
    },

    newUserRegistrationPOST(){
        welcome.postAnEntryFromRegistration();
        newsArticles.buildArticles()
    },

    userLogin(){
        welcome.userChecker();
    },

    goBack(){
        welcome.goBackToWelcome();
    },

    checkUserInputForm(){
        welcome.userCheckInputBoxes();
    }

}

export default eventListeners