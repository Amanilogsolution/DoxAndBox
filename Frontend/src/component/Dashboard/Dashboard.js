import Navbar from '../Navbar/Navbar'
import './dashboard.css'

function Dashboard() {
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
                                            <h6 className="card-subtitle helpicon1" ><i className="material-icons " >info</i> &nbsp;Active files 0</h6>
                                            <h6 className="card-subtitle" style={{ visibility: "hidden" }}><i className="material-icons">info</i> Active files</h6>
                                            <h6 className="card-subtitle helpcont">
                                                Total Number of Active files stored till date</h6>

                                        </div>


                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Inbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "orange" }} />
                                            <h6 className="card-subtitle"><i className="material-icons" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle" ><i className="material-icons" >info</i>&nbsp;Life time 0</h6>
                                            <h6 className="card-subtitle helpcont">
                                                Total Number of Inbound files in current month</h6>
                                            <h6 className="card-subtitle helpcont2">
                                                Total Number of Inbound files </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Outbound files</h4>
                                            <hr style={{ height: "4px", borderWidth: "0", background: "rgb(85, 96, 255)" }} />
                                            <h6 className="card-subtitle" ><i className="material-icons" >info</i>&nbsp;Current Month 0</h6>
                                            <h6 className="card-subtitle sechelp" ><i className="material-icons">info</i>&nbsp;Life time 0</h6>
                                            <h6 className="card-subtitle helpcont">
                                                Total Number of Outbound files in current month</h6>
                                            <h6 className="card-subtitle helpcont2">
                                                Total Number of Outbound files </h6>
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