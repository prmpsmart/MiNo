import React, { useState, useRef, useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import user_icon from '../image/person.png'
import email_icon from '../image/email.jpg'
import password_icon from '../image/password.png'
import '../../Styles/LoginSignup.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A_Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LoginSignup = () => {
    
    
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);
    

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        console.log(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [user, password, matchPassword])
    

    const [action,setAction] = useState("Sign Up")

    return (
        
        <form className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}> {errMsg} </p>
            <div className="inputs">
            {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        placeholder="Full Name"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" required placeholder="Email"/>
                </div>
                
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        />
                </div>

                {action==="Login"?<div></div>:<div className='input'>
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => setMatchPassword(e.target.value)}
                        required
                        value={matchPassword}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)} />
                </div>}
            </div>
            
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgotten Password? <span>Click Here</span></div>}
            <div className="submit-container">
                <button className={action==="Login"?"submit gray":"submit" } onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                <button className={action==="Sign Up"?"submit gray":"submit" } onClick={()=>{setAction("Login")}}>Login</button>
            </div>
        </form>
    )
};

export default LoginSignup;