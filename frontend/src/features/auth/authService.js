import axios from 'axios'

const API_URL = '/api/practitionerUsers/'

// Register user
const register = async (practitionerUserData) => {
    const response = await axios.post(API_URL, practitionerUserData)

    if(response.data) {
        localStorage.setItem('practitionerUser', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService