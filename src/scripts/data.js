
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
      },
    newsData() {
        return fetch("http://localhost:8088/articles?userId=1&_expand=user") // pass through userID and change to ${userID}
        .then(response => response.json())
    },

    getChatData() {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(response => response.json())
    },

    postChatData(savedMessage) {
        return fetch("http://localhost:8088/messages",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(savedMessage)
        });
    },

    taskListData() {
        return fetch("http://localhost:8088/tasks?userId=1")
        .then(response => response.json())
    },

    // When called, this function goes and "gets" the user name and email (see main.js eventListeners.userLogin)
    getUserDataForLogin(username, email){
        return fetch(`http://localhost:8088/users?name=${username}&email=${email}`)
        .then(response => response.json())
    },

    postEventData(newEvent) {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent)
        })
    },
    editEvents(eventId, name, date, location) {
        return fetch(`http://localhost8088/events?=${eventId}`)
    }
};

export default data

