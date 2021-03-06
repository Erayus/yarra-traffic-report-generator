import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import * as serviceWorker from './serviceWorker';



import trafficReducer from './store/reducers/traffic';


const store = createStore(trafficReducer)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>    
    </Provider>
        
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
