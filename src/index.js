import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'redux-zero/react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import store from "./store";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './styles/App.css';
const Index = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);
ReactDOM.render(
    <Index/>, document.getElementById('root'));
registerServiceWorker();