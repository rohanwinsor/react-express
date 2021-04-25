import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [data, setData] = useState("NO ONE");
    const getUser = () => {
        console.log("getUser")
        const config = {
          method: 'get',
          url: 'http://localhost:8000/users',
          headers: { 
            'Authorization': localStorage.getItem("acessToken")
          }
        };
        axios(config)
        .then(function (response) {
          console.log(response.data);
          setData(response.data)
        })
        .catch(function (error) {
          setData("IDK MAN IS YOU ??");
        });
        
        
      };
    return (
        <div>
        <button onClick={getUser}>Submit</button>
        <h1>Welcome Back {data}</h1>
      </div>
    )
}

export default Login
