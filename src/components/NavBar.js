import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  
<header>
 <div className='container'>
 <nav>
  <ul>
  <li>
   <Link to="/photos"><span id='photos'>All Photos</span></Link>
  </li>
  <li>|</li>
  <li>
   <Link to="/favourite-photos">Favourite Photos</Link>
  </li>
 </ul>
 </nav>
 </div>
 </header>

);

export default NavBar;
