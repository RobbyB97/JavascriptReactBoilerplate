/* State types */
export interface PageState {
    id: string;
}

/* Actions */
export const PAGE_ID__SET = 'PAGE_ID__SET';

interface PageIDSetAction {
    type: typeof PAGE_ID__SET;
    id?: string;
}

export type PageActionTypes = PageIDSetAction;