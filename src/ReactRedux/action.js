import { ActionTypes } from "./actiontypes";
import { Api } from "../component/ApiData";
import axios from "axios";

const GetSign = (signupdata) => ({
  type: ActionTypes.GET_SIGNUP, //For signing up the data
  payload: signupdata,
});

export const GetSignUP = () => {
  return function (dispatch) {
    //For signing up data to api link
    axios
      .get(`${Api}`)
      .then((response) => {
        dispatch(GetSign(response.data));
      })
      .catch((ERR) => {
        console.log(ERR);
      });
  };
};

const Signout = (Signout) => ({
  type: ActionTypes.Sign_Out,
  payload: Signout,
});

export const SignOutNow = (Id) => {
  return function (dispatch) {
    axios.delete(`${Api}:${Id}`).then((res) => {
      dispatch(Signout(Id));
    });
  };
};

const LogIn = (Login) => ({
  type: ActionTypes.LOGIN_IN,
  payload: Login,
});

export const LOGIN = (Login, setError, SetLogin, history) => {
  return function (dispatch) {
    axios
      .post(`${Api}login`, Login)
      .then((res) => {
        if (res.status === 201) {
          setError(res.data.msg);
          SetLogin("");
          setTimeout(() => {
            localStorage.setItem("isauth", "true");
            setTimeout(() => {
              if(localStorage.getItem("isauth")==="true"){
                dispatch(LogIn(Login));
                history("/Addexpense");
              }
            }, [1000]);
          }, [1000]);
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.msg);
        } else if (err.request) {
          setError("server crashed");
        } else {
          localStorage.setItem("isauth", "false");
          setError("Email doesnt exists or internal server error");
        }
      });
  };
};
