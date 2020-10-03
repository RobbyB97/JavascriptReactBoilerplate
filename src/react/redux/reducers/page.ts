import {
    PageState, PAGE_ID__SET, PageActionTypes
} from '../types/page';

const initialState: PageState = {
    id: ''
};

export function pageReducer(
    state = initialState,
    action: PageActionTypes
): PageState {
    switch(action.type) {
        case PAGE_ID__SET:
            return {
                id: action.id!
            }
        
        default:
            return state
    }
}

/*
export default (state = initialState, action) => {
    switch(action.type) {
        case 'PAGE_ID__SET':
            return {
                ...state,
                id: action.id
            };

        default:
            return state; 
    };
};
*/