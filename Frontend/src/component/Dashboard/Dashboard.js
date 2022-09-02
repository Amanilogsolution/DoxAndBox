import Navbar from '../Navbar/Navbar'
import React,{useEffect,useState} from 'react';
import './dashboard.css'
import { rmsReports } from '../../api/index';

function Dashboard() {

    const [toalActivefiles,setToalActivefiles] = useState()
    const [currentactivefiles,setCurrentActiveFiles] = useState()
    const [totalInboundfiles,setInboundFiles] = useState()
    const [currentinboundfilas,setCurrentInboundFile] = useState()
    const [totaloutboundfiles,setTotalOutboundflies] = useState()
    const[currentOutboundfiles,setCurrentOutboundflies] = useState()
    
    const[totalboxes,setTotalBox] = useState()
    const[currentactivebox,setCurrentActiveBox] = useState()
    const[totalInboundboxes,setTotalInboundBox] = useState()
    const[currentInboundboxes,setCurrentInboundBox] = useState()
   
    

 
    
    useEffect (() => {
        const data = async() => {
        const res = await rmsReports('RecordCount',localStorage.getItem('CUST_ID'))
        console.log(res)
        setToalActivefiles(res[5].TotalRecord)
        setCurrentActiveFiles(res[0].TotalRecord)
        setInboundFiles(res[6].TotalRecord)
        setCurrentInboundFile(res[1].TotalRecord)
        setTotalOutboundflies(res[7].TotalRecord)
        setCurrentOutboundflies(res[2].TotalRecord)

        setTotalBox(res[8].TotalRecord)
        setCurrentActiveBox(res[3].TotalRecord)
        setTotalInboundBox(res[9].TotalRecord)
        setCurrentInboundBox(res[4].TotalRecord)
     
   
        }
        data()
    }, [])
    return (
        <>
            <div className="dashboardcontainer">
                <Navbar />
                <div className='dashboardwrapper'  >
                    <div className='dashboardstatuscard' >

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Active files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "green" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons " delay="0" data-toggle="tooltip" title="Total Number of Active files stored till date" >info</i> &nbsp;Current Month {currentactivefiles}</h6>
                                            <h6 className="card-subtitle" ><i className="material-icons " delay="0" data-toggle="tooltip" title="Total Number of Active files stored till date" >info</i> &nbsp;Life time {toalActivefiles}</h6>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle"><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Inbound files in current month">info</i>&nbsp;Current Month {currentinboundfilas}</h6>
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Inbound files">info</i>&nbsp;Life time {totalInboundfiles}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Outbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "rgb(85, 96, 255)" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month {currentOutboundfiles}</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time {totaloutboundfiles}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='dashboardstatuscard dashboardcards2' >
                                <div className="col" >
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Active Box</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "green" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month {currentactivebox}</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time {totalboxes}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound Box</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files in current month" >info</i>&nbsp;Current Month {currentInboundboxes}</h6>
                                            <h6 className="card-subtitle " ><i className="material-icons" delay="0" data-toggle="tooltip" title="Total Number of Outbound files">info</i>&nbsp;Life time {totalInboundboxes}</h6>
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