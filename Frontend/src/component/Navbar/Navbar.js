import React from 'react';
import SideBar from './Sidebar';
import './navbar.css';

function Navbar() {
  const [on, setOn] = React.useState(false);
  const [profilecard, setProfilecard] = React.useState(false);
  const handleOn = () => {
    setOn(!on);
  };
  return (
    <div>
      <nav className="topnav">
        <div  className="navicon">
          <a href="#" onClick={handleOn}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#333"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
          </a>
        </div>

        <div className="navlogo">Dox and Box</div>
        <div className="profilediv" onClick={()=>{setProfilecard(!profilecard)}}>
        <i class="material-icons">person</i>
        Account</div>
     
     {
      profilecard?
      <div className='profileactiondiv' >
          <ul>
           <a href='/Profile'> <li>Profile</li></a>
           <a href='#'> <li>Logout</li></a>
          </ul>
        </div>
        : null
     }
        
      </nav>
       <SideBar openClass={on} />
    </div>
  )
}

export default Navbar
