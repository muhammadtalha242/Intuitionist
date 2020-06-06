import axios from 'axios'

export const register = newUser => {
    return axios
        .post('/register', {
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log("positive: ", response)
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}