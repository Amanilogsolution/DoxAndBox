import Navbar from '../Navbar/Navbar'
import React,{useEffect,useState} from 'react';
import './dashboard.css'
import { rmsReports } from '../../api/index';

function Dashboard() {
    const [totalRecordCount,setTotalRecordCount]=useState()
    const [totalInbound,setTotalInbound] = useState()
    useEffect (() => {
        const data = async() => {
        const res = await rmsReports('RecordCount',localStorage.getItem('CUST_ID'))
        console.log(res)
        setTotalRecordCount(res[2].TotalRecord)
        setTotalInbound(res[3].TotalRecord)
   
        }
        data()
    }, [])
    return (
        <>
            <div className="dashboardcontainer">
                <Navbar />
                <div className='dashboardwrapper' >
                    <div className='dashboardstatuscard' >

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Active files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "green" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons " delay="0" data-toggle="tooltip" title="Total Number of Active files stored till date" >info</i> &nbsp;Active files {totalRecordCount}</h6>
                                            <h6 className="card-subtitle" style={{ visibility: "hidden" }}><i className="material-icons">info</i> Active files</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle"><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Inbound files in current month">info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Inbound files">info</i>&nbsp;Life time {totalInbound}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Outbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "rgb(85, 96, 255)" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time 0</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='dashboardstatuscard dashboardcards2' >
                                <div className="col" style={{visibility:"hidden"}}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound Box</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time 0</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound Box</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time 0</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Outbound Box</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "rgb(85, 96, 255)" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time 0</h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;