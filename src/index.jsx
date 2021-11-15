import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose} from 'recompose';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import {reducer} from './store/reducers';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// store.dispatch(loadMoviesAsyncAction()); --->>>> Promise-action

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
