import React, { useState } from 'react';
import './navbar.css'


const SideBar = ({ openClass }) => {
  const [recorddiv,setRecorddiv] =useState(false);
  const [reportdiv,setReportdiv] =useState(false);

  const handlerecord = ()=>{
    setRecorddiv(!recorddiv);
  }

  const handlereport = ()=>{
    setReportdiv(!reportdiv);
  }
  return (
    <nav className={openClass === true ? 'closeslidernav slidernav' : ' slidernav'}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/">
            <i class="material-icons">dashboard</i>
            &nbsp;Dashboard
          </a>
        </li>

        <li>
          <a className="menu-item" >
            <i class="material-icons">list</i>
            &nbsp;Physical Files
          </a>
        </li>
        <li>
          <a className="menu-item" >

            <i class="material-icons">arrow_forward_ios</i>
            <span onClick={handlerecord}>Request</span>

           
          </a>

        </li>
        {recorddiv ?
            <ul className="innerul" id='reportinnerdiv'  >
              <li>Record Pickup</li>
              <li>Record Retrieval</li>
              <li>Scanning Request</li>
              <li>Shredding</li>
              {/* <li>Other Shredding</li> */}
              <li>Other</li>
            </ul>
            :null}

        <li>
          <a className="menu-item" >

          <span onClick={handlereport}><i class="material-icons">arrow_forward_ios</i>
            Reports</span>
          
          </a>
        </li>
        {reportdiv ?
            <ul className="innerul" id='reportinnerdiv' >
              <li>Inward Report</li>
              <li>Retrieval Report</li>
              <li>Scanning Report</li>
              <li>Stock Report</li>
            </ul>
            :null}
      </ul>
    </nav>
  );
};

export default SideBar;