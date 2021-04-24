import React, {useState} from "react";
import axios from "axios";

function Login() {
    const [loginEmail, setloginEmail] = useState();
    const [loginPassword, setloginPassword] = useState();
    
    const login = () => {
        const body = { 
            email : loginEmail,
            password: loginPassword}
            axios({
                method : "post",
                data : body,
                withCredentials : true,
                url : "http://localhost:8000/login"
            })
            }
    return (

        <div >
        <h1 > LOGIN </ h1> 
        <input placeholder = 'Email'
            onChange={(e) => setloginEmail(e.target.value)} 
            />
        <input placeholder = 'password'
            onChange={(e) => setloginPassword(e.target.value)}   />
        <button onClick={login}>Submit</button>
        </div> 
    )
}

export default Login
