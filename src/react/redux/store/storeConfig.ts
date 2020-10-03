import { combineReducers } from 'redux';
import { createStore } from 'redux';

import { uiReducer } from '../reducers/ui';
import { pageReducer } from '../reducers/page';


const rootReducer = combineReducers({
    ui: uiReducer,
    page: pageReducer
})

export const configureStore = () => {
    const store = createStore(rootReducer);
    return store;
};



export type RootState = ReturnType<typeof rootReducer>
/*
export default () => {
    return createStore(
        combineReducers({
            ui: uiReducer,
            page: pageReducer
        })
    );
};
*/