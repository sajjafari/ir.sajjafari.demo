import axios from 'axios'

class AuthenticationService{
    registerSuccessfulLogin(username, accessToken) {
        localStorage.setItem('authenticatedUser', username);
        localStorage.setItem('accessToken', this.createJWTToken(accessToken));
        this.setupAxiosInterceptors(this.createJWTToken(accessToken))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        localStorage.removeItem('authenticatedUser')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('basicToken')
    }

    isUserLoggedIn() {
        let user = localStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    executeBasicAuthenticationService(loginRequest) {
        return axios.post("http://localhost:8080/api/auth/basicauth",loginRequest)
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