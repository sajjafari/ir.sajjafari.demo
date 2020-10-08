import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
       // console.log('executed service')
       //var instance = axios.create({ baseURL: 'http://localhost:8080' });
        //instance.get('/book/loadAll');
        return axios.get('http://localhost:8080/book/loadAll');
    }
}

export default new HelloWorldService()