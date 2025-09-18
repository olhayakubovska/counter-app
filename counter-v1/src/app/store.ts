import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { appReducer } from '../model/counter-reducer'

// объединение reducer'ов с помощью combineReducers
const rootReducer = combineReducers({
  app: appReducer,
})

// создание store
export const store = configureStore({
  reducer: rootReducer,
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

