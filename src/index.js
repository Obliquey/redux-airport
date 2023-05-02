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
        planes: 5
    },
    {
        id:2,
        name: 'Delta',
        planes: 6
    },
    {
        id: 3,
        name: 'Lufthansa',
        planes: 7
    },
    {
        id: 4,
        name: 'Qatar Airways',
        planes: 30
    }
    
]

/** TODO: Add REDUCERS */
const airlinesArray = (state=airlines, action) => {
    // need conditional here to ADD airlines to airport manifesto
    if(action.type === 'ADD_AIRLINE') {
        const newAirlineName = action.payload.name;
        const newAirID = state.length + 1;
        const newAirPlanes = action.payload.planes;
        const newAirline = {
            id: newAirID,
            name: newAirlineName,
            planes: newAirPlanes
        }

        return [...state, newAirline]
    }
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