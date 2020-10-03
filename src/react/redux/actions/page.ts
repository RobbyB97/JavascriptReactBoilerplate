import { PAGE_ID__SET, PageActionTypes } from '../types/page';


export function page_ID__Set(id: string): PageActionTypes {
    return {
        type: PAGE_ID__SET,
        id: id
    }
}