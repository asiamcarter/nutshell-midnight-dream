const welcome = {
    // Builds welcome page
    welcomeBuilderAndAppender(){
        // creating "the turtle tub" and appending it
        let container = document.querySelector(".output");
        let welcomeContainer = document.createElement("article")
        welcomeContainer.setAttribute("class", "welcome_container")
        let theTurtleTub = document.createElement("h1");
        theTurtleTub.innerHTML = "THE TURTLE TUB";
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
        hereHyperlink.innerHTML = "here.";
        welcomeContainer.appendChild(hereHyperlink);
        container.appendChild(welcomeContainer);
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
        emailInput.setAttribute("id", "email");
        emailInput.setAttribute("name", "email");
        emailInput.setAttribute("type", "text");
        registrationContainer.appendChild(emailInput);
        //
        // Creatiing submit button for new user:
        let submitNewUsernameAndEmail = document.createElement("button")
        submitNewUsernameAndEmail.setAttribute("id", "submitNewUserButton");
        submitNewUsernameAndEmail.innerHTML = "Submit";
        registrationContainer.appendChild(submitNewUsernameAndEmail);
            }
}

export default welcome