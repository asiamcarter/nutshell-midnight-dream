import eventListeners from "./eventListeners"
import data from "./data"
import newsArticles from "./news"
const welcome = {
    // Builds welcome page
    welcomeBuilderAndAppender(){
        let nav = document.getElementById("navigation")
        nav.style.visibility = "hidden"
        // creating "the turtle tub" and appending it
        let container = document.querySelector(".output");
        container.innerHTML = " ";
        let welcomeContainer = document.createElement("article");
        welcomeContainer.setAttribute("class", "welcome_container");
        let theTurtleTub = document.createElement("h1");
        theTurtleTub.innerHTML = "THE TURTLE TUB";
        container.appendChild(welcomeContainer)
        welcomeContainer.appendChild(theTurtleTub);
        container.appendChild(welcomeContainer);

        //
        // creating "Welcome to the tub!" and appending it
        let welcomeToTheTub = document.createElement("h2");
        welcomeToTheTub.innerHTML = "Welcome to the tub!";
        welcomeContainer.appendChild(welcomeToTheTub);
        container.appendChild(welcomeContainer);

        //
        // creating the "login" label and input for username (that has an account) and appending it
        let usernameLabel = document.createElement("label");
        container.appendChild(usernameLabel);
        usernameLabel.setAttribute("for", "username");
        usernameLabel.innerHTML = "Username:";
        welcomeContainer.appendChild(usernameLabel);
        container.appendChild(welcomeContainer);
        let usernameInput = document.createElement("input");
        usernameInput.setAttribute("id", "username");
        usernameInput.setAttribute("name", "username");
        usernameInput.setAttribute("type", "text");
        welcomeContainer.appendChild(usernameInput);
        container.appendChild(welcomeContainer);
        //
        // creating the "email" label and input for username (that has an account) and appending it
        let emailLabel = document.createElement("label");
        welcomeContainer.appendChild(emailLabel);
        container.appendChild(welcomeContainer);
        emailLabel.setAttribute("for", "email");
        emailLabel.innerHTML = "Email Address:";
        let emailInput = document.createElement("input");
        emailInput.setAttribute("id", "email");
        emailInput.setAttribute("name", "email");
        emailInput.setAttribute("type", "text");
        welcomeContainer.appendChild(emailInput);
        container.appendChild(welcomeContainer);
        //
        // creating button to login
        let loginButton = document.createElement("button");
        loginButton.setAttribute("id", "loginButton");
        loginButton.innerHTML = "Login";
        welcomeContainer.appendChild(loginButton);
        container.appendChild(welcomeContainer);
        //
        // creating the "not a member? No sweat. Click" text
        let notAMemeber = document.createElement("h3");
        notAMemeber.innerHTML = "Not a member? <br> No sweat. Click";
        welcomeContainer.appendChild(notAMemeber);
        container.appendChild(welcomeContainer);
        //
        // creating the "here" text and hyperlink to the Register page
        let hereHyperlink = document.createElement("a");
        hereHyperlink.setAttribute("href", "#");
        hereHyperlink.setAttribute("class", "hereHyperLink");
        hereHyperlink.innerHTML = " here.";
        welcomeContainer.appendChild(hereHyperlink);
        container.appendChild(welcomeContainer);
        notAMemeber.appendChild(hereHyperlink)
    },

    // Builds registration page:
    registrationBuilderAndAppend(){
        // Clears DOM
        let clearAndRepopulateDom = document.querySelector(".output");
        let registrationContainer = document.createElement("article");
        let resetHTML = document.querySelector(".welcome_container")
        registrationContainer.setAttribute("class", "registration_container")
        clearAndRepopulateDom.appendChild(registrationContainer)
        resetHTML.innerHTML = " ";
        //
        // Creating "The Turtle Tub" header and appending it to .welcome_container
        let theTurtleTubHeader = document.createElement("h1");
        theTurtleTubHeader.innerHTML = "THE TURTLE TUB";
        registrationContainer.appendChild(theTurtleTubHeader);
        //
        // Creating "Enter your turtle-tastic info!" h2 and appending it to .welcome_container
        let enterInfo = document.createElement("h2");
        enterInfo.innerHTML = "Enter your turtle-tastic info!";
        registrationContainer.appendChild(enterInfo);
        //
        // Creating "enter your username:" with input
        let usernameLabel = document.createElement("label");
        registrationContainer.appendChild(usernameLabel);
        usernameLabel.setAttribute("for", "registrationUsername");
        usernameLabel.innerHTML = "Enter your username:";
        registrationContainer.appendChild(usernameLabel);
        let usernameInput = document.createElement("input");
        usernameInput.setAttribute("id", "registrationUsername");
        usernameInput.setAttribute("name", "registrationUsername");
        usernameInput.setAttribute("type", "text");
        registrationContainer.appendChild(usernameInput);
        //
        // Creating "enter your email address:"
        let emailLabel = document.createElement("label");
        registrationContainer.appendChild(emailLabel);
        emailLabel.setAttribute("for", "email");
        emailLabel.innerHTML = "Enter your email address:";
        let emailInput = document.createElement("input");
        emailInput.setAttribute("id", "registrationEmail");
        emailInput.setAttribute("name", "registrationEmail");
        emailInput.setAttribute("type", "text");
        registrationContainer.appendChild(emailInput);
        //
        // Creatiing submit button for new user:
        let submitNewUsernameAndEmail = document.createElement("button")
        submitNewUsernameAndEmail.setAttribute("id", "submitNewUserButton");
        submitNewUsernameAndEmail.innerHTML = "Submit";
        registrationContainer.appendChild(submitNewUsernameAndEmail);
        //
        // Targeting the "submit" and giving it an event listener and function found in eventListeners.js (line 9)
        let submitClick = document.querySelector("#submitNewUserButton");
        submitClick.addEventListener("click", eventListeners.newUserRegistrationPOST);
    },

    // Posts an entry to JSON if "register" if pressed
    postAnEntryFromRegistration(){
        // Gets values that USER inputs in registration page
        const registrationUsername = document.querySelector("#registrationUsername").value;
        const registrationEmail = document.querySelector("#registrationEmail").value;
        // Loging those values in console
        // console.log(registrationUsername);
        // console.log(registrationEmail);

        // Creating an object to store the values (above) in
        const entryToSave ={
            name: registrationUsername,
            email: registrationEmail
        };
        // Loging those values in console in OBJECT FORM
        // console.log(entryToSave)

        data.postUsernameAndEmailToJSON(entryToSave)
        .then(() => {

            // fetch call that retrieves user id in order to set session storage
            data.getUserDataForLogin(registrationUsername, registrationEmail)
                .then(allEntries => {
                    allEntries.forEach(entry => {
                        let loggedIn = false;
                        sessionStorage.setItem("User", entry.id);
                        let sessionUser = sessionStorage.getItem("User");
                        console.log(sessionUser);
                        if(registrationUsername === entry.name && registrationEmail === entry.email){
                            loggedIn = true;
                        }
                        if(loggedIn === true){
                            newsArticles.buildArticles();
                        }
                    })
                })
        });
    },

    incorrectUsernameOrEmailBuilderAndAppend(){
        let container = document.querySelector(".output");
        container.innerHTML = " ";
        let incorrectContainer = document.createElement("article")
        incorrectContainer.setAttribute("class", "incorrect_container")
        let wereSorry = document.createElement("h1");
        wereSorry.innerHTML = "Hmm we don't seem to recongnize your name or email";
        container.appendChild(incorrectContainer)
        incorrectContainer.appendChild(wereSorry);
        let backButton = document.createElement("button")
        backButton.setAttribute("id", "goBackButton");
        backButton.innerHTML = "Go Back";
        incorrectContainer.appendChild(backButton);
        let goBackButton = document.querySelector("#goBackButton");
        goBackButton.addEventListener("click", eventListeners.goBack)
    },

    youreIn(){
        let container = document.querySelector(".output");
        container.innerHTML = " ";
        let welcomeHomeContainer = document.createElement("article")
        welcomeHomeContainer.setAttribute("class", "welcome_home_container")
        let welcome = document.createElement("h1");
        welcome.innerHTML = "Welcome";
        container.appendChild(welcomeHomeContainer)
        welcomeHomeContainer.appendChild(welcome);
    },

    goBackToWelcome(){
        let incorrectContainer = document.querySelector(".incorrect_container")
        incorrectContainer.innerHTML = " "
        welcome.welcomeBuilderAndAppender();
        window.location.reload(true)
    },

    userCheckInputBoxes(){
        const userLogin = document.querySelector("#username").value;
        const userEmail = document.querySelector("#email").value;
        if (userLogin.length === 0 || userEmail.length === 0){
            alert("Whoops! Please fill out all your info.")
            window.location.reload
        } else {
            welcome.userChecker();
        }
    },


    userChecker(){
        const userLogin = document.querySelector("#username").value;
        const userEmail = document.querySelector("#email").value;
        // if (userLogin.length === 0 || userEmail.length === 0){
        //     alert("Whoops! Please fill out all your info.")
        //     welcome.welcomeBuilderAndAppender();
        // }
        data.getUserDataForLogin(userLogin, userEmail)
        .then (allEntries => {
            // console.log(allEntries)
            if (allEntries.length < 1) {
                welcome.incorrectUsernameOrEmailBuilderAndAppend();
            } else {
            allEntries.forEach(entry => {
                // let loggedIn = false
                // console.log(entry.name);
                // console.log(entry.email);
                // console.log(entry.id);
                sessionStorage.setItem("User", entry.id)
               let sessionUser = sessionStorage.getItem("User")
                console.log("session User:", sessionUser);
                // if(userLogin === entry.name && userEmail === entry.email){
                //     loggedIn = true;
                // }
                // if(loggedIn === true){
                    newsArticles.buildArticles();
                // } else if (loggedIn === false){


            })};
        })
    }
}
export default welcome