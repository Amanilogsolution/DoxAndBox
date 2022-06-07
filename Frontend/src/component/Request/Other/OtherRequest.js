import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import Sucessmodal from '../../successpopup/Successmodal';
import { rmsRequest } from '../../../api/index'


function OtherRequest() {
    const [mandatoryfield, setMandatoryfield] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();

        const activity = document.getElementById('activity').value;
        const request_date = document.getElementById('dateofShreading').value;
        const onsite = document.getElementById('onSite').value;
        const remark = document.getElementById('remark').value;
        if (!activity || !request_date || !onsite) {
            setMandatoryfield(true)
        }
        else {
            const result = await rmsRequest('OtherRequest', '', '', request_date, '', '', '', '', '', onsite, activity, remark, localStorage.getItem('CUST_ID'));
            console.log(result)

        }
    }
    return (
        <>
            <div className="otherrequestcontainer" >
                <Navbar />
                {/* <Sucessmodal /> */}
                <div >

                    <div className="col " style={{ margin: "100px auto", width: "630px" }}>
                        <div className="card" >
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <form style={{margin:"0px 20px 0px 15px"}}>
                                    <h3 className="card-title mt-4">Other Request</h3><br />

                                    <div className="form-group">
                                        <label>Activity <span style={{ color: "red" }}>*</span></label>
                                        <input type="text" className="form-control" id='activity'  />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Date Of Shredding <span style={{ color: "red" }}>*</span></label>
                                            <input type="date" className="form-control" id='dateofShreading' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>On Site Shredding <span style={{ color: "red" }}>*</span></label>
                                            <select className="form-control" id='onSite' style={{ height: "32px" }}>
                                                <option defaultValue hidden>Choose ...</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
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
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" onClick={handleClick} id="subnitbtn">Submit</button>
                                        <button type="submit" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
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

export default OtherRequest
