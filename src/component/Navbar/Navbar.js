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
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="#fff"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
          </a>
        </div>

        <div className="navlogo">Dox and Box</div>
        <div className="profilediv" onClick={()=>{setProfilecard(!profilecard)}}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill='#fff'><path d="M11.1 35.25Q14.25 33.05 17.35 31.875Q20.45 30.7 24 30.7Q27.55 30.7 30.675 31.875Q33.8 33.05 36.95 35.25Q39.15 32.55 40.075 29.8Q41 27.05 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 27.05 7.95 29.8Q8.9 32.55 11.1 35.25ZM24 25.5Q21.1 25.5 19.125 23.525Q17.15 21.55 17.15 18.65Q17.15 15.75 19.125 13.775Q21.1 11.8 24 11.8Q26.9 11.8 28.875 13.775Q30.85 15.75 30.85 18.65Q30.85 21.55 28.875 23.525Q26.9 25.5 24 25.5ZM24 44Q19.9 44 16.25 42.425Q12.6 40.85 9.875 38.125Q7.15 35.4 5.575 31.75Q4 28.1 4 24Q4 19.85 5.575 16.225Q7.15 12.6 9.875 9.875Q12.6 7.15 16.25 5.575Q19.9 4 24 4Q28.15 4 31.775 5.575Q35.4 7.15 38.125 9.875Q40.85 12.6 42.425 16.225Q44 19.85 44 24Q44 28.1 42.425 31.75Q40.85 35.4 38.125 38.125Q35.4 40.85 31.775 42.425Q28.15 44 24 44ZM24 41Q26.75 41 29.375 40.2Q32 39.4 34.55 37.4Q32 35.6 29.35 34.65Q26.7 33.7 24 33.7Q21.3 33.7 18.65 34.65Q16 35.6 13.45 37.4Q16 39.4 18.625 40.2Q21.25 41 24 41ZM24 22.5Q25.7 22.5 26.775 21.425Q27.85 20.35 27.85 18.65Q27.85 16.95 26.775 15.875Q25.7 14.8 24 14.8Q22.3 14.8 21.225 15.875Q20.15 16.95 20.15 18.65Q20.15 20.35 21.225 21.425Q22.3 22.5 24 22.5ZM24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65Q24 18.65 24 18.65ZM24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Q24 37.35 24 37.35Z"/></svg> */}
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
