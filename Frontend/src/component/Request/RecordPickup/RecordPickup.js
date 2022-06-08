import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import { rmsRequest } from '../../../api/index'

function RecordPickup() {
    const [mandatoryfield, setMandatoryfield] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        const location = document.getElementById('Location').value;
        const noof_files = document.getElementById('nooffiles').value;
        const request_date = document.getElementById('Pickupdate').value;
        const request_time = document.getElementById('pickuptime').value;
        const remark = document.getElementById('remark').value;
        if (!location || !noof_files || !request_date || !request_time) {
            setMandatoryfield(true)
        }
        else {
            const result = await rmsRequest('RecordPickup', location, noof_files, request_date, request_time, '', '', '', '', '', '', remark, localStorage.getItem('CUST_ID'))
            console.log(result)
        }

    }

    return (
        <>
            <div className="generatorlogcontainer">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "75px auto", width: "630px" }}>
                        <div className="card " style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" style={{ background: "rgba(0,0,0,0.2)" }}>
                                <h4 className="card-title mt-2" >Request for record pickup</h4>
                            </header>
                            <article className="card-body ">
                                <form style={{ margin: "0px 15px 0px 15px" }}>
                                    {/* <h3 className="card-title mt-4">Request for record pickup</h3><br/> */}
                                    <br />
                                    <div className="form-group">
                                        <label>Location <span style={{ color: "red" }}>*</span></label>
                                        <input placeholder="Location, City & PIN etc" type="Text" className="form-control" id='Location' />
                                    </div>
                                    <div className="form-group">
                                        <label>No of Files <span style={{ color: "red" }}>*</span> </label>
                                        <input type="number" placeholder="Total no of Files" className="form-control" id="nooffiles" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Pickup Date <span style={{ color: "red" }}>*</span></label>
                                            <input type="date" className="form-control" id='Pickupdate' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Pickup Time <span style={{ color: "red" }}>*</span></label>
                                            <input type="time" className="form-control" id='pickuptime'
                                            />

                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' />
                                    </div>
                                    {
                                        mandatoryfield ?
                                            <p style={{ color: "red" }}>Please! fill the mandatory field.</p>
                                            : null
                                    }

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary  float-right mb-4" onClick={handleClick}>Submit</button>
                                        <button type="submit" className="btn btn-secondary mr-4 float-right mb-4">Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecordPickup
