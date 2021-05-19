import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.scss';

window.addEventListener('load', async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./serviceWorker.js')
        }
        catch (err) {
            console.log('Service worker register failed ', err.message)
        }
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
)