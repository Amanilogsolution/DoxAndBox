import React from 'react'
import Navbar from '../../Navbar/Navbar'
import SelectSearch, { fuzzySearch } from "react-select-search";
import './RecordRetrival.css'


function RecordRetrival() {
    return (
        <>
            <div className="generatorlogcontainer">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "100px auto", width: "600px" }}>
                        <div className="card" >
                            {/* <header className="card-header">
                                <h4 className="card-title mt-2">Record Retrival</h4>
                            </header> */}
                            <article className="card-body" style={{boxShadow:"2px 2px 5px #333"}}>
                                <form>
                        <h3 className="card-title mt-2">Record Retrival</h3><br/>

                                    <div className="form-group">
                                        <label>Search Select Files *</label>
                                        <SelectSearch
                                            //   options={options}
                                            //   value={value}
                                            //   onChange={setValue}
                                            search
                                            filterOptions={fuzzySearch}
                                            placeholder="Search something"
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4" >
                                            <label>Type Of Retrival *</label>
                                            <select className="form-control" id='meeting_with' style={{ height: "32px" }}>
                                                <option defaultValue hidden>Choose ...</option>
                                                <option>Digital (Scan)</option>
                                                <option >Physical-Returnable</option>
                                                <option defaultValue hidden>Physical-Permanent</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4" >
                                            <label>Type Of Delivery *</label>
                                            <select className="form-control" id='meeting_with' style={{ height: "32px" }}>
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

export default RecordRetrival
