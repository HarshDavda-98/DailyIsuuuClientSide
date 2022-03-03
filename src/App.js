import React, { useState } from "react";
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
  const [list, setlist] = useState([]);
  return (
    <React.Fragment>
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route
            path="/Login"
            element={<Login list={list} setlist={setlist} />}
          />
          <Route
            path="/signup"
            element={<Form list={list} setlist={setlist} />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/lists"
              element={<List list={list} setlist={setlist} />}
            />
            <Route path="/Addexpense" element={<AddExpenses />} />
          </Route>
        </Routes>
      </>
    </React.Fragment>
  );
}

export default App;
