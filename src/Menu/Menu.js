import React from 'react';

import {
    Link
  } from "react-router-dom";

  
function Menu() {
  return (
<nav
    aria-label="Main menu"
    role = "navigation"
    itemScope
    itemType="https://schema.org/SiteNavigationElement"
>
    <div className="menu">
        <ul>
            <li><Link itemProp="url" to="/">Home</Link></li>
            <li><Link itemProp="url" to="/login">Login</Link></li>
            <li><Link itemProp="url" to="/dashboard">Dashboard</Link></li>
            <li><Link itemProp="url" to="/enter-budget">Enter Budget</Link></li>

        </ul>
    </div>
</nav>
  );
}

export default Menu;