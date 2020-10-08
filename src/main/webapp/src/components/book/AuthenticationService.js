import axios from 'axios'

class AuthenticationService{
    registerSuccessfulLogin(username, password) {
        localStorage.setItem('authenticatedUser', username);
        localStorage.setItem('basicToken', this.createBasicAuthToken(username, password));
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        localStorage.removeItem('authenticatedUser')
        localStorage.removeItem('basicToken')
        //return axios.get("http://localhost:8080/logout");
    }

    isUserLoggedIn() {
        let user = localStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    executeBasicAuthenticationService(loginRequest) {
        return axios.post("http://localhost:8080/api/auth/basicauth",loginRequest,
            { headers: { authorization: this.createBasicAuthToken(loginRequest.username, loginRequest.password) } })
    }


     createBasicAuthToken(username, password) {
         return 'Basic ' + window.btoa(username + ":" + password)
     }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }



}

export default new AuthenticationService()