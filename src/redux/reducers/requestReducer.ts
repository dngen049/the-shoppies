import { ReqStatus, requestActionType, SET_SEARCH_REQ_ERROR, SET_SEARCH_REQ_STATUS } from "../constant";



const initialState  = {
    searchResultReqStatus: ReqStatus.INIT,
    searchResultReqError: ""
}

const requestReducer = (state = initialState, action: requestActionType) => {

    switch(action.type){
        case SET_SEARCH_REQ_ERROR:
            return {...state, searchResultReqError: action.reqError};
        case SET_SEARCH_REQ_STATUS:
            return {...state, searchResultReqStatus: action.reqStatus};
        default:
            return state;
    }

}
export default requestReducer;