import React, { useState } from "react";
import axios from "axios";

function Register(props) {
    const [registerEmail, setregisterEmail] = useState();
    const [registerUser, setregisterUser] = useState();
    const [registerPassword, setregisterPassword] = useState();
    
    const register = () => {
        const body = { 
            emailid : registerEmail,
            username : registerUser,
            password: registerPassword}
            axios({
                method : "post",
                data : body,
                withCredentials : true,
                url : "http://localhost:8000/users/register"
            })
            }
    return (
        <div>
        <h1> REGISTER </h1>
        <input
          placeholder="Email"
          onChange={(e) => setregisterEmail(e.target.value)}
        />
        <input
          placeholder="username"
          onChange={(e) => setregisterUser(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setregisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
    )
}

export default Register
