import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {rmsRequest} from '../../../api/index'

function RecordPickup() {
    const handleClick = async(e) => {
        e.preventDefault();
        const Location = document.getElementById('Location').value;
        const nooffiles = document.getElementById('nooffiles').value;
        const result = await rmsRequest()
        console.log(result)
    }

  return (
    <>
    <div className="generatorlogcontainer">
    <Navbar/>
        <div>
        
            <div className="col " style={{ margin: "100px auto",width:"600px" }}>
                <div className="card" >
                   
                    <article className="card-body" style={{boxShadow:"2px 2px 5px #333"}}>
                        <form>
                        <h3 className="card-title mt-2">Request for record pickup</h3><br/>

                            <div className="form-group">
                                <label>Location *</label>
                                <input placeholder="Location, City & PIN etc" type="Text" className="form-control" id='Location' />
                            </div>
                            <div className="form-group">
                                <label>No of Files * </label>
                                <input type="number"placeholder="Total no of Files" className="form-control" id="nooffiles" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Pickup Date *</label>
                                    <input type="date"  className="form-control" id='Pickupdate' />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Pickup Time *</label>
                                    <input type="time" className="form-control" id='pickuptime'
                                    />

                                </div>
                            </div>
                         
                            <div className="form-group">
                                <label>Remarks</label>
                                <textarea className="form-control" placeholder="Comments" type="text" id='remark' />
                            </div>
                         
                            <div className="form-group" >
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

export default RecordPickup
