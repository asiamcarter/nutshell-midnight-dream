const newsForm = {

    displayForm() {

        console.log("Button clicked!");

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        let formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form_container");

        let formTitleField = document.createElement("fieldset");

        let formTitleLabel = document.createElement("label");
        formTitleLabel.textContent = "Title";
        formTitleLabel.setAttribute("for", "article_name");

        let formTitleInput = document.createElement("input");
        formTitleInput.setAttribute("id", "article_name");
        formTitleInput.setAttribute("name", "article_name");

        formTitleField.appendChild(formTitleLabel);
        formTitleField.appendChild(formTitleInput);

        formContainer.appendChild(formTitleField);

        outputContainer.appendChild(formContainer);

    }

}

export default newsForm;