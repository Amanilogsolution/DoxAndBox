import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './RecordRetrival.css';
import {rmsRequest} from '../../../api/index'



function RecordRetrival() {

    const handleClick = async(e) => {
        e.preventDefault();
        const file_name = document.getElementById('filename').value;
        const retrival_type = document.getElementById('typeOfRetrival').value;
        const delivery_type = document.getElementById('deliverytype').value;
        const request_date = document.getElementById('deliverydate').value;
        const remark = document.getElementById('remark').value;

        const result = await rmsRequest('RecorRetrival','','',request_date,'',file_name,retrival_type,delivery_type,'','','',remark,localStorage.getItem('CUST_ID'))
        console.log(result)
    }




    return (
        <>
            <div className="generatorlogcontainer">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "100px auto", width: "600px" }}>
                        <div className="card" >
                            <header className="card-header">
                                <h4 className="card-title mt-2">Record Retrival</h4>
                            </header>
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <form>
                                    <h3 className="card-title mt-2">Record Retrival</h3><br />

                                    <div className="form-group">
                                        <label>Search Select Files *</label>
                                        <input placeholder="Files" type="Text" className="form-control" id='filename' />

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4" >
                                            <label>Type Of Retrival *</label>
                                            <select className="form-control" id='typeOfRetrival' style={{ height: "32px" }}>
                                                <option defaultValue hidden>Choose ...</option>
                                                <option>Digital (Scan)</option>
                                                <option >Physical-Returnable</option>
                                                <option defaultValue hidden>Physical-Permanent</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4" >
                                            <label>Type Of Delivery *</label>
                                            <select className="form-control" id='deliverytype' style={{ height: "32px" }}>
                                                <option defaultValue hidden>Choose ...</option>
                                                <option>Standard</option>
                                                <option>Urgent</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Date of Delivery *</label>
                                            <input type="date" className="form-control" id='deliverydate'
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary  float-right" onClick={handleClick}>Submit</button>

                                        <button type="submit" className="btn btn-secondary mr-4 float-right">Reset</button>
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

export default RecordRetrival
