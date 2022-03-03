import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from '../component/spinner'
import { LOGIN } from "../ReactRedux/action";
import { useDispatch,useSelector } from 'react-redux'

export default function Login() {
    let dispatch = useDispatch();
    const history = useNavigate()
    const {loading} = useSelector(state=> state.data);
    console.log(loading);
    const [Login, SetLogin] = useState({
        EmailAdd: "",
        Password: "",
    });
    const { EmailAdd, Password } = Login;
    const [Error, setError] = useState("");
    const onchanhandler = (e) => {
        let { name, value } = e.target;
        SetLogin({
            ...Login,
            [name]: value,
        });
    };
    const CheckLogin =  (Login) => {
       dispatch(LOGIN(Login,setError,SetLogin,history))
    }


    const HandleSubmit = (e) => {
        e.preventDefault();
        CheckLogin(Login);
    };
    return (
        <div className="container">
            {loading ? <Spinner /> : <form
                className=" row  needs-Validation text-center border  ms-4 ms-sm-0 ms-lg-5 ms-lg-4"
                onSubmit={HandleSubmit}
                style={{ height: "100vh", width: "80vw" }}
            >
                <div className="bg-primary " > <h1 className=" text-light " >...Wel Come To Login Page ...</h1></div>
                <div className="pt-5">
                    <label className="form-label mb-0 ">Email:</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                            type="email"
                            name="EmailAdd"
                            onChange={(e) => onchanhandler(e)}
                            value={EmailAdd || ""}
                            className="form-control"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
                    </div>
                </div>
                <div className="text-center">
                    <label className="form-label mb-0 ">Password:</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">pwd</span>
                        <input
                            type="password"
                            name="Password"
                            onChange={(e) => onchanhandler(e)}
                            autoComplete="Password"
                            value={Password || ""}
                            className="form-control"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">Please choose a Password.</div>
                    </div>
                </div>
                {Error ? <div className="text-danger fs-1" >{Error}</div> : ""}
                <div className="row bg-primary paddings  pt-4  pt-sm-5   pt-md-5" >
                    <div className="col-sm-6  " ><span className=" fs-2 paddingss" >Forget Password ?</span></div>
                    <div className="col-sm-6  " ><span className="fs-2 paddingss" >Already have account ?</span></div>
                </div>
                <div className="pt-2" >
                    <button className="btn btn-primary fs-1 mt-3" type="submit">
                        Login
                    </button>
                </div>

            </form>}
        </div>
    );
}
