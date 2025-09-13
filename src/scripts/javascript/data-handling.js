// Create a class that manages the storage of the data

export default class dataManager {
    static saveDataLocal (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static loadDataFromLocal (key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    // Add save to and load from api or database
}
