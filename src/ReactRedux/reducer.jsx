import { ActionTypes } from "./actiontypes";

const initialvalue = {
    signs:[],
    sign:{},
    loading:true,
}

const UseReduser = (state = { initialvalue }, action) => {
    switch (action.type) {
        case ActionTypes.GET_SIGNUP:
            return {
                ...state,
                signs:action.payload,
                loading:false,
            }
        case ActionTypes.Sign_Out:
            return {
                ...state, 
                loading:false,
            }
        default:
            return {
                ...state
            }
    }
}

export default UseReduser;