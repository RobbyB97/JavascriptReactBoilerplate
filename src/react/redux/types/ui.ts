/* State types */
export interface UIState {
    navMenu_Mobile: boolean;
}


/* Actions */
export const MOBILE_NAV__TOGGLE = 'MOBILE_NAV__TOGGLE';
export const MOBILE_NAV__ON = 'MOBILE_NAV__ON';
export const MOBILE_NAV__OFF = 'MOBILE_NAV__OFF';

interface MobileNavToggleAction {
    type: typeof MOBILE_NAV__TOGGLE;
}

interface MobileNavOnAction {
    type: typeof MOBILE_NAV__ON;
}

interface MobileNavOffAction {
    type: typeof MOBILE_NAV__OFF;
}

export type UIActionTypes = MobileNavToggleAction | MobileNavOnAction | MobileNavOffAction;