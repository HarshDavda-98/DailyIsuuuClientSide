import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function Navbar() {
    const {isAuth} = useSelector(state=> state.data);
    const history = useNavigate();


    const checkstatus = () => {
        localStorage.setItem('isauth',"false")
        setTimeout(()=>{
            history("/");
        },[1000])
    }
    return (
        <React.Fragment><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/" className="dropdown-item" href="#">Action</Link></li>
                                <li><Link to="/" className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/" className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>

                    </ul>
                    {isAuth ==="true" ? <div className="d-flex">
                        <button className="btn btn-outline-success mx-2" onClick={() => history("/Profile")} type="button">Profile</button>
                        <button className="btn btn-outline-success" onClick={() => checkstatus()} type="button">Log out</button>
                    </div> : <div className="d-flex">
                        <button className="btn btn-outline-success mx-2" onClick={() => history("/signup")} type="button">Sign Up</button>
                        <button className="btn btn-outline-success" onClick={() => history("/Login")} type="button">Log In</button>
                    </div>}
                </div>
            </div>
        </nav></React.Fragment>
    )
}
