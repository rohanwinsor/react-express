import React from 'react'

function Logout() {
    const logout = () => {
        localStorage.setItem("acessToken", "")
    }
    return (
        <div>
           <button onClick={logout}>Submit</button> 
        </div>
    )
}

export default Logout
