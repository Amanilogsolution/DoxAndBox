import React,{useState} from 'react';
import Navbar from '../../Navbar/Navbar';
import {rmsRequest} from '../../../api/index'


function ScanningRequest() {
    const [mandatoryfield, setMandatoryfield] = useState(false);


    const handleClick = async(e) => {
        e.preventDefault();
        const noof_pages = document.getElementById('scanned_pages').value;
        const onsite = document.getElementById('onSite').value;
        const request_date = document.getElementById('dateofScanning').value;
        const remark = document.getElementById('remark').value;
        if(!noof_pages || !onsite || !request_date){
            setMandatoryfield(true)
        }
        else{
        const result = await rmsRequest('ScanningRequest','','',request_date,'','','','',noof_pages,onsite,'',remark,localStorage.getItem('CUST_ID'))
        console.log(result)
        }
    }
    return (
        <>
            <div className="generatorlogcontainer">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "100px auto", width: "630px" }}>
                        <div className="card" >
                            {/* <header className="card-header">
                        <h4 className="card-title mt-2">Request for Scaning</h4>
                    </header> */}
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <form style={{margin:"0px 20px 0px 15px"}}>
                                    <h3 className="card-title mt-2">Request for Scaning</h3><br />


                                    <div className="form-group">
                                        <label>Total no of Pages to be Scanned <span style={{color:"red"}}>*</span></label>
                                        <input type="number" className="form-control" id='scanned_pages' />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Date Of Scanning <span style={{color:"red"}}>*</span></label>
                                            <input type="date" className="form-control" id='dateofScanning' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>On Site Scan <span style={{color:"red"}}>*</span></label>
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

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary float-right mb-4" onClick={handleClick}>Submit</button>
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

export default ScanningRequest
