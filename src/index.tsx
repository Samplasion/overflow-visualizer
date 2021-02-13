import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import strings from './strings';
import detectBrowserLanguage from 'detect-browser-language';

console.log(detectBrowserLanguage());

i18next
    .use(initReactI18next)
    .init({
        resources: strings,
        lng: detectBrowserLanguage()
    });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
