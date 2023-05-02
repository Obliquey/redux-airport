import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const airlines = [
    {
        id:1,
        name: 'Southwest',
    },
    {
        id:2,
        name: 'Delta'
    }
    
]

/** TODO: Add REDUCERS */
const airlinesArray = (state=airlines, action) => {
    // need conditional here to ADD airlines to airport manifesto
    return state;
}


/** TODO: Create store */
const storage = createStore(
    combineReducers({
        airlinesArray
    }),
    applyMiddleware(
        logger
    )
)




// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storage}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);