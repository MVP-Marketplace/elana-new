import axios from 'axios'

const API_URL = 'https://elana-test-server.herokuapp.com/api/practitionerProfiles/'

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

// Get practitioner profile
const getPractitionerProfiles = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Update a practitioner profile
const updatePractitionerProfile = async (practitionerProfileId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + practitionerProfileId, config)

    return response.data
}

const practitionerProfileService = {
    createPractitionerProfile, getPractitionerProfiles, updatePractitionerProfile
}

export default practitionerProfileService