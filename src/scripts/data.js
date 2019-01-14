
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
        let sessionUser = sessionStorage.getItem("User")
        return fetch(`http://localhost:8088/articles?userId=${sessionUser}&_expand=user`) // pass through userID and change to ${userID}
        .then(response => response.json())
    },
    postNewsData(articleToSave) {
        return fetch("http://localhost:8088/articles",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleToSave)
        });
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
        return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
    },
    postNewTask(taskObject){
    //POST Fetch for the task edit form which will move the new task object information on save to the JSON
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
                });
            },
    // When called, this function goes and "gets" the user name and email (see main.js eventListeners.userLogin)
    getUserDataForLogin(username, email){
        return fetch(`http://localhost:8088/users?name=${username}&email=${email}`)
        .then(response => response.json())
    },

    putChatEdit(id, description) {
       return fetch(`http://localhost:8088/messages/${id}`, {
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(description)
       })
    },

    getChatData2(id) {
        return fetch(`http://localhost:8088/messages/${id}`)
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
    getEvent(eventId) {
        return fetch(`http://localhost:8088/events?id=${eventId}`)
        .then(response => response.json())
    },

    addEventEdit(eventId, eventObject){
        return fetch(`http://localhost:8088/events/${eventId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
    },

    deleteNewsData(articleId) {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
        })
    }

};

export default data

