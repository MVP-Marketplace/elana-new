import axios from 'axios'

const API_URL = '/api/practitionerProfiles/'

// Create new practitioner profile
const createPractitionerProfile = async (practitionerProfileData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, practitionerProfileData, config)

    return response.data
}

const practitionerProfileService = {
    createPractitionerProfile,
}

export default practitionerProfileService