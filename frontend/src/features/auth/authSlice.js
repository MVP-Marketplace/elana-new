import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// Get practitionerUser from localStorage
const practitionerUser = JSON.parse(localStorage.getItem('practitionerUser'))

const initialState = {
    practitionerUser: practitionerUser ? practitionerUser : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Login user
export const login = createAsyncThunk('auth/practitionerLogin', async (practitionerUser, thunkAPI) => {
    try{
        return await authService.login(practitionerUser)
    } catch (error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Register user
export const register = createAsyncThunk('auth/practitionerSignUp', async (practitionerUser, thunkAPI) => {
    try{
        return await authService.register(practitionerUser)
    } catch (error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.practitionerUser = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.practitionerUser = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.practitionerUser = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.practitionerUser = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.practitionerUser = null
            })
    },
})

export const {reset} = authSlice.actions
export default authSlice.reducer
