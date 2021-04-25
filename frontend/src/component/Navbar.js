import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav>
                <h3>ROUTES</h3>
                <ul>
                    <Link to="register">
                    <li>
                        REGISTER
                    </li>
                    </Link>
                    <Link to="login">
                    <li>
                        LOGIN
                    </li>
                    </Link>
                    <Link to="whois">
                    <li>
                        WHOIS
                    </li>
                    </Link>
                    <Link to="logout">
                    <li>
                        LOGOUT
                    </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
