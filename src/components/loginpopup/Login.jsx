import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'
const Login = ({setLogin}) => {
    const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className="login">
        <form className='login-form'>
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder="Username"  required/>}
                
                <input type="email" placeholder='enter your email' required />
                <input type="password" placeholder='password' required />
            </div>
            <button>{currState==="Sign Up"? "Sign Up":"Login"}</button>
            <div className="login-popup-condition">
                <div className="condition">
                <input type="checkbox"/>
                <p>I agree to the terms of use & policy</p>
                </div>
                {currState==="Login"
                ?<p className='login-condition'>create new account ? <span onClick={()=>setCurrState("Sign up")}>click here</span></p>
                :<p className='login-condition'>Already have an account ? <span onClick={()=>setCurrState("Login")}>login</span></p>
            }
                
                

            </div>

        </form>
    </div>
  )
}

export default Login