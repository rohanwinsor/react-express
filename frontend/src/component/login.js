import React, {useState} from "react";
import axios from "axios";

function Login() {
    const [loginEmail, setloginEmail] = useState();
    const [loginPassword, setloginPassword] = useState();
    
    const login = () => {
        const body = { 
            emailid : loginEmail,
            password: loginPassword
        }
            const config = {
            method: 'post',
            url: 'http://localhost:8000/users/login',
            data : body
            };
            axios(config)
.then((response) => {
  console.log("acessToken " + response.data.acessToken);
  localStorage.setItem("acessToken", "Bearer " + response.data.acessToken)
})
.catch(function (error) {
  console.log(error);
});

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
