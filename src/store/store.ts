import { configureStore } from '@reduxjs/toolkit'
import { AuthApi2 } from './api/genuis.api'
import { AuthApi } from './api/auth.api'
import { PostApi } from './api/post.api'

export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [AuthApi2.reducerPath]:AuthApi2.reducer,
    [PostApi.reducerPath]:PostApi.reducer,
  },
  middleware: (getDefaultMiddleware)=> 
    getDefaultMiddleware().concat([AuthApi2.middleware,AuthApi.middleware,PostApi.middleware]),

   
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch