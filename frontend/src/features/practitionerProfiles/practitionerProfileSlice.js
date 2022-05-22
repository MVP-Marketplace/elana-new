import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import practitionerProfileService from "./practitionerProfileService"; 

const initialState = {
    practitionerProfiles: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Create new practitioner profile
export const createPractitionerProfile = createAsyncThunk(
    "practitionerProfiles/create",
    async (practitionerProfileData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.practitionerUser.token
            return await practitionerProfileService.createPractitionerProfile(
                practitionerProfileData, token
            );
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const practitionerProfileSlice = createSlice({
    name: "practitionerProfile",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPractitionerProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createPractitionerProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.practitionerProfiles.push(action.payload)
            })
            .addCase(createPractitionerProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = practitionerProfileSlice.actions;
export default practitionerProfileSlice.reducer;
