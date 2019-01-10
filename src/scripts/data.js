
// object that contains all fetch calls for the database JSON file
const data = {
    getData(data) {
        return fetch(`http://localhost:8088/${data}`)
        .then(response => response.json())
    }
};

export default data

