import { 
    UIState, MOBILE_NAV__TOGGLE, MOBILE_NAV__ON, MOBILE_NAV__OFF, UIActionTypes 
} from '../types/ui';

const initialState: UIState = {
    navMenu_Mobile: false
};

export function uiReducer(
    state = initialState,
    action: UIActionTypes
): UIState {
    switch(action.type) {
        case MOBILE_NAV__TOGGLE:
            return {
                navMenu_Mobile: state.navMenu_Mobile ? false : true
            }

        case MOBILE_NAV__ON:
            return {
                navMenu_Mobile: true
            }

        case MOBILE_NAV__OFF:
            return {
                navMenu_Mobile: false
            }

        default:
            return state;
    }
}


/*
export default (state = initialState, action) => {
    switch(action.type) {
        case 'MOBILE_NAV__TOGGLE':
            return {
                navMenu_Mobile: state.navMenu_Mobile ? false : true
            };

        case 'MOBILE_NAV__ON':
            return {
                navMenu_Mobile: true
            };
    

        case 'MOBILE_NAV__OFF':
            return {
                navMenu_Mobile: false
            };

        default:
            return state;
    };
};
*/