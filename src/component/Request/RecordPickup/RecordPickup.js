import React from 'react'
import Navbar from '../../Navbar/Navbar'

function RecordPickup() {
  return (
    <>
    <div className="generatorlogcontainer">
    <Navbar/>
        <div>
        
            <div className="col " style={{ margin: "100px auto",width:"600px" }}>
                <div className="card" >
                    <header className="card-header">
                        <h4 className="card-title mt-2">Request for record pickup</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Location *</label>
                                <input placeholder="Location, City & PIN etc" type="Text" className="form-control" id='visitor_name' />
                            </div>
                            <div className="form-group">
                                <label>No of Files * </label>
                                <input type="number"placeholder="Total no of Files" className="form-control" id="company_name" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Pickup Date *</label>
                                    <input type="date"  className="form-control" id='no_of_visitor' />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Pickup Time *</label>
                                    <input type="time" className="form-control" id='contact_no'
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

export default RecordPickup
