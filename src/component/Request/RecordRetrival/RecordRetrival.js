import React from 'react'
import Navbar from '../../Navbar/Navbar'


function RecordRetrival() {
  return (
    <>
    <div className="generatorlogcontainer">
    <Navbar/>
        <div>
        
            <div className="col " style={{ margin: "100px auto",width:"600px" }}>
                <div className="card" >
                    <header className="card-header">
                        <h4 className="card-title mt-2">Record Retrival</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Search Select Files *</label>
                                <input placeholder="Location, City & PIN etc" type="Text" className="form-control" id='visitor_name' />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4" >
                                    <label>Type Of Retrival *</label>
                                    <select className="form-control" id='meeting_with' style={{ height:"32px"}}>
                                            <option defaultValue hidden>Choose ...</option>
                                            <option>Digital (Scan)</option>
                                            <option >Physical-Returnable</option>
                                            <option defaultValue hidden>Physical-Permanent</option>
                                            </select>
                                </div>
                                <div className="form-group col-md-4" >
                                    <label>Type Of Delivery *</label>
                                    <select className="form-control" id='meeting_with' style={{ height:"32px"}}>
                                            <option defaultValue hidden>Choose ...</option>
                                            <option>Standard</option>
                                            <option>Urgent</option>
                                            </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Date of Delivery *</label>
                                    <input type="date" className="form-control" id='contact_no'
                                    />
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

export default RecordRetrival
