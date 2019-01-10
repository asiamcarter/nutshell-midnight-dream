
// object that contains all fetch calls for the database JSON file
const data = {
    getData(data) {
        return fetch(`http://localhost:8088/${data}`)
        .then(response => response.json())
    },
    newsData() {
        return fetch("http://localhost:8088/articles?userId=1") // pass through userID and change to ${userID}
        .then(response => response.json())
    }
};

export default data

