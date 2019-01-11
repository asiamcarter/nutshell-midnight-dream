
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

};

export default data

