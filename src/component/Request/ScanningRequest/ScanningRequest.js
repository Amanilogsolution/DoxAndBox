import React from 'react';
import Navbar from '../../Navbar/Navbar'


function ScanningRequest() {
  return (
    <>
    <div className="generatorlogcontainer">
    <Navbar/>
        <div>
        
            <div className="col " style={{ margin: "100px auto",width:"600px" }}>
                <div className="card" >
                    <header className="card-header">
                        <h4 className="card-title mt-2">Shredding Request</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            
                            <div className="form-group">
                                <label>Total no of Pages to be Scanned *</label>
                                <input type="number" className="form-control" id='visitor_name' />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6" >
                                    <label>Date Of Scanning *</label>
                                    <input type="date" className="form-control" id='no_of_visitor' />
                                </div>
                                <div className="form-group col-md-6" >
                                    <label>On Site Scan *</label>
                                    <select className="form-control" id='meeting_with' style={{ height:"32px"}}>
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
                         
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-4">Submit</button>
                                <button type="submit" className="btn btn-secondary ">Reset</button>
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
