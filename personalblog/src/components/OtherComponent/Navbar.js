import React from 'react';
import {
    Route, 
    Link,
    Switch} from 'react-router-dom'
const Navbar = () => {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#ff8364' }}>
                <div className="navbar-nav">
                    <button className="btn btn-link">
                        <Link to="/">Home</Link>
                    </button>
                    <button className="btn btn-link">
                        <Link to="/admin">Admin</Link>
                    </button>
                </div>
            </nav>
    );
}

export default Navbar