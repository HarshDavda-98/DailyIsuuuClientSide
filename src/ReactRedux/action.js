import { ActionTypes } from "./actiontypes";
import { Api } from "../component/ApiData";
import axios from "axios";




const GetSign = (signupdata) => ({
  type: ActionTypes.GET_SIGNUP,        //For signing up the data
  payload: signupdata,
});

export const GetSignUP = () => {
  return function (dispatch) {         //For signing up data to api link
    axios.get(`${Api}`).then((response) => {
      dispatch(GetSign(response.data))
    }).catch((ERR)=>{
        console.log(ERR)
    })
  };
};

const Signout = (Signout)=>({
  type:ActionTypes.Sign_Out,
  payload:Signout,
});

export const SignOutNow = (Id)=>{
  return  function (dispatch){
    axios.delete(`${Api}:${Id}`).then((res)=>{
      dispatch(Signout(Id))
    })
  }
}