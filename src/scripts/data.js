// object that contains all fetch calls for the database JSON file
const data = {
    getData(data) {
        return fetch(`http://localhost:8088/${data}`)
        .then(response => response.json())
    },

    postUsernameAndEmailToJSON(entryToSave){
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Where the argument is called and the object is passed that has been declared in eventListener.js
            body: JSON.stringify(entryToSave)
                })
                .then(response => response.json())
      }
};

export default data