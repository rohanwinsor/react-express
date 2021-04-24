import './App.css';
import React, {useState} from "react";
import axios from "axios";
function App() {
    const [registerEmail, setregisterEmail] = useState();
    const [registerUser, setregisterUser] = useState();
    const [registerPassword, setregisterPassword] = useState();
    const [loginEmail, setloginEmail] = useState();
    const [loginPassword, setloginPassword] = useState();
    const register = () => {
        const body = { 
            email : registerEmail,
            username : registerUser,
            password: registerPassword}
            axios({
                method : "post",
                data : body,
                withCredentials : true,
                url : "http://localhost:8000/register"
            })
            }
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
                return ( < div className = "App" >
        <div >
        <h1 > REGISTER < /h1> 
        <input placeholder = 'Email' 
            onChange={(e) => setregisterEmail(e.target.value)} 
            />
        <input placeholder = 'username'  
            onChange={(e) => setregisterUser(e.target.value)} 
            />
        <input placeholder = 'password' 
            onChange={(e) => setregisterPassword(e.target.value)} 
            / >
        <button onClick={register}>Submit</button>
        </div> 
        <div >
        <h1 > LOGIN < /h1> 
        <input placeholder = 'Email'
            onChange={(e) => setloginEmail(e.target.value)} 
            />
        <input placeholder = 'password'
            onChange={(e) => setloginPassword(e.target.value)} 
            / >
        <button>Submit</button>
        </div> 
        <div >
        <h1 > CHECK USER < /h1>
        <button>Submit</button>
        </div> 
        </div>
    );
}

export default App;