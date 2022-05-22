import axios from 'axios'

const API_URL = '/api/practitionerUsers/'

// Login user
const login = async (practitionerUserData) => {
    const response = await axios.post(API_URL + 'login', practitionerUserData)

    if(response.data) {
        localStorage.setItem('practitionerUser', JSON.stringify(response.data))
    }

    return response.data
}

// Register user
const register = async (practitionerUserData) => {
    const response = await axios.post(API_URL, practitionerUserData)

    if(response.data) {
        localStorage.setItem('practitionerUser', JSON.stringify(response.data))
    }

    return response.data
}

// Logout User
const logout = () => {
    localStorage.removeItem('practitionerUser')
}

const authService = {
    register, logout, login,
}

export default authService