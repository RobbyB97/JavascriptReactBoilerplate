import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize.css/normalize.css';

import '../sass/main.scss';
import { configureStore } from './redux/store/storeConfig';
import Router from './routers/Router';


/* Configure store */
const store = configureStore();
store.subscribe(() => {
    // Anything put here happens on every state change
});

/* Launch App */
const $appRoot = document.querySelector('#app');
const tsx = (
    <Provider store={store as any} >
        <Router />
    </Provider>
);

ReactDOM.render(tsx, $appRoot);