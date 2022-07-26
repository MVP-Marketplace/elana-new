import axios from 'axios'

//API_URL needs to be whatver the server route is
const API_URL = 'http://localhost:3001/api/practitionerUsers/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'practitionerLogin', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

// Get all practitioners
const getPractitionerUsers = async () => {
  const response = await axios.get(API_URL + 'users')
  return response.data
}



const authService = {
  register,
  logout,
  login,
  getPractitionerUsers
}

export default authService