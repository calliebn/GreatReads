import axios from "axios";

export default {
    // Gets books from the Google API
    getBooks: function (q) {
        return axios.get("/api/google", { params: { q: "title" + q } });
    },

    // Gets all saved books
    getSavedBooks: function () {
        return axios.get("/api/books");
    },

    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};