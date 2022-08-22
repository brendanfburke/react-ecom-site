import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <Link to="/"><button className="nav-button">Home</button></Link>
            <Link to="/cart"><button className="nav-button">Cart</button></Link>
        </div>
    )
}

export default Nav