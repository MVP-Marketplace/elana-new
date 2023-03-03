import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import practitionerProfileReducer from '../features/practitionerProfiles/practitionerProfileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    practitionerProfiles: practitionerProfileReducer,
  },
});
