
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
        return fetch("http://localhost:8088/articles?userId=1") // pass through userID and change to ${userID}
        .then(response => response.json())
    },

    taskListData() {
        return fetch("http://localhost:8088/tasks?userId=1")
        .then(response => response.json())
    },
    postNewTask(taskObject){
    //POST Fetch for the task edit form which will move the new task object information on save to the JSON
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
                });
            },

};

export default data

