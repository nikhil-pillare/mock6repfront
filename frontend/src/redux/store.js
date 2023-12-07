
import thunk from 'redux-thunk'
import { reducer as authReducer } from './auth/reducer'
import blogReducer from './blogs/Reducer'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
const rootReducer = combineReducers({auth:authReducer, blog: blogReducer})
export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))