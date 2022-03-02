import React, { useEffect } from 'react'
import { GetSignUP,SignOutNow } from '../ReactRedux/action'
import { useDispatch, useSelector } from 'react-redux'



export default function MainPages() {
  let dispatch = useDispatch();
  const {signs} = useSelector(state=> state.data);
  useEffect(() => {
    dispatch(GetSignUP());
  }, []);

  const handleClick =(Id)=>{
    if(window.confirm("Are you sure to signOut ?")){
      dispatch(SignOutNow(Id));
      dispatch(GetSignUP());
    }
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Email Add</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {signs?.map((sign)=>{
            return(
            <tr key={sign.Id} >
                <td>{sign.EmailAdd}</td>
                <td>{sign.Password}</td>
                <td>{sign.FirstName}</td>
                <td>{sign.LastName}</td>
                <td><button className='btn bg-primary text-light' onClick={()=>{handleClick(sign._id)}} > Signout </button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
