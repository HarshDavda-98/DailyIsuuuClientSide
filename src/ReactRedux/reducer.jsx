import { ActionTypes } from "./actiontypes";

const initialvalue = {
    signs: [],
    sign: {},
    loading: false,
    isAuth: localStorage.getItem('isauth'),
}

const UseReduser = (state = { initialvalue }, action) => {
    switch (action.type) {
        case ActionTypes.GET_SIGNUP:
            return {
                ...state,
                signs: action.payload,
                // loading: localStorage.getItem('isauth'),
                isAuth: localStorage.getItem('isauth'),
            }
        case ActionTypes.Sign_Out:
            return {
                ...state,
                loading: false,
                isAuth:localStorage.getItem('isauth'),
            }
        case ActionTypes.LOGIN_IN:
            return {
                ...state,
                // loading: true,
                isAuth: localStorage.getItem('isauth'),
            }
        case ActionTypes.LOGIN_OUT:
            return {
                ...state,
                // loading: false,
                isAuth: localStorage.getItem('isauth'),
            }
        default:
            return {
                
                ...state,
                loading:false,
                isAuth:localStorage.getItem('isauth'),
            }
    }
}

export default UseReduser;