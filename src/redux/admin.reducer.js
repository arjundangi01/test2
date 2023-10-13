import { GET_BOOK_REQ, GET_BOOK_REQ_FAIL, GET_BOOK_REQ_SUC } from "./action";


const initialState = {
    isLoading: true,
    isError: false,
    bookData:[]
};

export const reducer = (state = initialState, { type, payload })=>{
    console.log(payload)
    switch (type) {
        case GET_BOOK_REQ_SUC:
            return {...state,isLoading:false,bookData:payload}
        case GET_BOOK_REQ:
            return {...state,isLoading:true}
        case GET_BOOK_REQ_FAIL:
            return {...state,isLoading:false,isError: true,}
        default:
            return state
    }
}