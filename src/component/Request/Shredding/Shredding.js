import React from 'react'
import Navbar from '../../Navbar/Navbar'

function Shredding() {

    const handlelessthan = () => {
        document.getElementById('PagesToBeShred').style.display = "none"
        document.getElementById('Search&Select').style.display = "Block"
    }

    const handlemorethan = () => {
        document.getElementById('PagesToBeShred').style.display = "Block"
        document.getElementById('Search&Select').style.display = "none"
    }
    return (
        <>
            <div className="generatorlogcontainer">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "100px auto", width: "600px" }}>
                        <div className="card" >
                            {/* <header className="card-header">
                                <h4 className="card-title mt-2">Shredding Request</h4>
                            </header> */}
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                        <h3 className="card-title mt-2">Shredding Request</h3><br/>

                                <form>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked onClick={handlelessthan} />
                                            Option1
                                        </label>
                                        <label>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option2" onClick={handlemorethan} />
                                            Option2
                                        </label>
                                    </div>

                                    <div className="form-group" id="Search&Select">
                                        <label>Search *</label>
                                        <input type="number" className="form-control" id='visitor_name' />
                                    </div>
                                    <div className="form-group" id="PagesToBeShred" style={{ display: "none" }}>
                                        <label>Shread *</label>
                                        <input type="number" className="form-control" id='visitor_name' />
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
                                        <button type="submit" className="btn btn-primary  float-right">Submit</button>
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

export default Shredding
