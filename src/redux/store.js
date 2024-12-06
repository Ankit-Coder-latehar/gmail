import {configureStore, createSlice} from '@reduxjs/toolkit'
import createReducer from './createSlice'



const store = configureStore({
    reducer: {
       appSlice: createReducer,
    }
})

export default store;