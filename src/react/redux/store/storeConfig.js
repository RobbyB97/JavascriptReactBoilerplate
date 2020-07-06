/* Packages */
import {createStore, combineReducers} from 'redux'


/* Reducers */
import UI_Reducer from '../reducers/ui.js';


/* Store */
export default () => {
    return createStore(
        combineReducers({
            ui: UI_Reducer
        })
    );
};