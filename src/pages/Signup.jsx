import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Api } from "../component/ApiData";
import { useNavigate } from "react-router-dom";
import Spinner from '../component/spinner'
import { Link } from "react-router-dom";

export default function Signup(props) {

  const history = useNavigate()
  const setlist = props.setlist;
  const [loading, setloading] = useState(false)
  useEffect(() => {
    onchangeAPI();
  },[])

  const onchangeAPI = () => {
    fetch(Api).then((res) => res.json()).then((json) => {
      setlist(json)
      setloading(false);
    }).catch((err) => { console.log(err) })
  }

  const [signData, SetSignData] = useState({
    Id: new Date().getTime(),
    UserName: "",
    FirstName: "",
    EmailAdd: "",
    LastName: "",
    Password: "",
    Confirm_Password: "",
  });
  const {
    UserName,
    EmailAdd,
    FirstName,
    LastName,
    Password,
    Confirm_Password,
  } = signData;
  const [Error, setError] = useState("");

  const onchanhandler = (e) => {
    let { name, value } = e.target;
    SetSignData({
      ...signData,
      [name]: value,
    });
  };
  const PostingData = () => {
    setloading(true);
    axios.post(Api, signData).then((res) => {
      if (res.data.msg === "Email_already_registered") {
        setloading(false);
        return setError(res.data.msg);
      } else if (res.data.msg === "Data_Entered_Successfully") {
        setError(`${res.data.msg} `)
        setTimeout(() => {
          setloading(true);
        }, [1000])
        SetSignData('');
        onchangeAPI();
        setTimeout(() => {
          history('/')
          onchangeAPI()
          setError('');
        }, [2000])
      }
    }).catch((err) => {
      console.log(err);
    })
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (signData.Confirm_Password !== signData.Password) {
      return setError("Please verify the entered  Password");
    }
    PostingData();
    setError("");
  };

  return (
    <div className="container">
      {loading ? <Spinner /> : <form
        className=" row  needs-Validation text-center border  ms-4 ms-sm-0 ms-lg-5 ms-lg-4"
        onSubmit={HandleSubmit}
        style={{ height: "100vh", width: "80vw" }}
      >
        <div className="bg-primary " > <h1 className="mt-2 mt-sm-3 mb-xl-4 pt-md-5  text-light  " >...Sign Up...</h1></div>
        <div className="col-md-4 text-start ">
          <label className="form-label mt-2 mb-0">First name:</label>
          <input
            type="text"
            onChange={(e) => onchanhandler(e)}
            name="FirstName"
            className="form-control"
            value={FirstName || ""}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 text-start">
          <label className="form-label mt-2 mb-0">Last name:</label>
          <input
            type="text"
            onChange={(e) => onchanhandler(e)}
            className="form-control"
            name="LastName"
            value={LastName || ""}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 text-start ">
          <label className="form-label mt-2 mb-0 ">Username:</label>
          <div className="input-group has-validation">
            <span className="input-group-text">@</span>
            <input
              type="text"
              name="UserName"
              onChange={(e) => onchanhandler(e)}
              value={UserName || ""}
              className="form-control"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-4 text-start ">
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
        <div className="col-md-4 text-start ">
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
        <div className="col-md-4 text-start ">
          <label className="form-label mb-0 ">Confirm Password:</label>
          <div className="input-group has-validation">
            <span className="input-group-text">pwd</span>
            <input
              type="password"
              name="Confirm_Password"
              autoComplete=" Confirm_Password"
              onChange={(e) => onchanhandler(e)}
              value={Confirm_Password || ""}
              className="form-control"
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
        </div>
        <div className="row bg-primary paddings " >
          <div className="col-sm-6 pt-2  pt-sm-3   pt-md-5 " ><span className=" fs-4" >Forget Password ?</span></div>
          <div className="col-sm-6 pt-2  pt-sm-3   pt-md-5 " ><span className="fs-4" >Already have account ?</span></div>
        </div>
        <div className="pt-2" >
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
        {Error ? <div className="text-danger fs-1" >{Error}</div> : ""}
      </form>}
    </div>
  );
}
