import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { postApi } from '../services/postAPI'
// import userReducer from '../features/userSlice'
// import authReducer from '../features/authSlice'


export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [postApi.reducerPath] : postApi.reducer
    // user: userReducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware),
})

setupListeners(store.dispatch)