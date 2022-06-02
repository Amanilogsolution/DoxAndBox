import React from 'react'
import Navbar from '../../Navbar/Navbar'


function OtherRequest() {
  return (
    <>
    <div className="generatorlogcontainer">
        <Navbar />
        <div>

            <div className="col " style={{ margin: "100px auto", width: "600px" }}>
                <div className="card" >
                    {/* <header className="card-header">
                        <h4 className="card-title mt-2">Other Request</h4>
                    </header> */}
                    <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                        <form>
                        <h3 className="card-title mt-2">Other Request</h3><br/>
                            

                            <div className="form-group">
                                <label>Activity *</label>
                                <input type="text" className="form-control" id='activity' />
                            </div>
                          
                            <div className="form-row">
                                <div className="form-group col-md-6" >
                                    <label>Date Of Shredding *</label>
                                    <input type="date" className="form-control" id='no_of_visitor' />
                                </div>
                                <div className="form-group col-md-6" >
                                    <label>On Site Shredding *</label>
                                    <select className="form-control" id='meeting_with' style={{ height: "32px" }}>
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
                                <button type="submit" className="btn btn-primary float-right">Submit</button>
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

export default OtherRequest
