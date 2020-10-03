import { 
    MOBILE_NAV__TOGGLE, MOBILE_NAV__ON, MOBILE_NAV__OFF, UIActionTypes 
} from '../types/ui';


export function navMenu_Mobile__Toggle(): UIActionTypes {
    return {
        type: MOBILE_NAV__TOGGLE
    }
}

export function navMenu_Mobile__On(): UIActionTypes {
    return {
        type: MOBILE_NAV__ON
    }
}

export function navMenu_Mobile__Off(): UIActionTypes {
    return {
        type: MOBILE_NAV__OFF
    }
}