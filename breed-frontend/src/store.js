import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import app from './reducers/app'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
    const { logger } = require(`redux-logger`)
    middlewares.push(logger)
}

const store = createStore(
    combineReducers({
        app
    }),
    applyMiddleware(...middlewares)
)

export default store
