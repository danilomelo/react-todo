import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import reducers from './todo-reducers'
import multi from 'redux-multi'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(multi, thunk, promise, sagaMiddleware)(createStore)(
    reducers,  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(sagas)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
