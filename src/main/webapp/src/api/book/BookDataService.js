import axios from 'axios'

class BookDataService {

    retrieveAllBooks() {
        //console.log('executed service')
        return axios.get("http://localhost:8080/book/loadAll");
    }

    retrieveBook(id) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/book/load/${id}`);
    }

    retrieveEmptyBook() {
        //console.log('executed service')
        return axios.get("http://localhost:8080/book/load");
    }

    updateBook(book) {
        return axios.post("http://localhost:8080/book/save/", book);
    }

    deleteBook(id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/book/delete/${id}`);
    }




}

export default new BookDataService()