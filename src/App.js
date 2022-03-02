import React, { useState} from "react";
import "./App.css";
import Form from "./pages/Signup";
import List from "./component/list";
import { Route, Routes } from "react-router-dom";
import MainPages from "./pages/MainPages";
import Login from "./pages/Logini";
import AddExpenses from "./pages/AddExpenses";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Navbar from "./component/Navbar";
function App() {
  
  // sessionStorage.setItem('isauthed',false)
  // const A = sessionStorage.getItem('isauthed')
  // const [isAuth,setIsauth]=useState(A)

  // sessionStorage.setItem('button',true);
  // const B = sessionStorage.getItem('button');
  // const [btns,setbtns]=useState(B)
 
  
  // console.log("Hellow final",A)
  // console.log("Hellow final",B)
  const [list, setlist] = useState([]);
  return (
    <React.Fragment>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/Login"element={<Login list={list} setlist={setlist}/>} />
          <Route path="/signup"element={<Form list={list} setlist={setlist} />} />
          <Route element={<ProtectedRoutes isAuth={true} />}>
          <Route path="/lists"element={<List list={list} setlist={setlist} />}  />
         < Route path="/Addexpense" element={<AddExpenses/>}/>
         </Route> 
        </Routes>
      </>
    </React.Fragment>
  );
}

export default App;
