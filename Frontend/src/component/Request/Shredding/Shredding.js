import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar';
import {rmsRequest} from '../../../api/index'
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

function Shredding() {
    const [mandatoryfield, setMandatoryfield] = useState(false);


    const handleClick = async(e) => {
        e.preventDefault();
        const file_name = document.getElementById('file_name').value;
        const noof_pages = document.getElementById('noofpages').value;
        const request_date = document.getElementById('dateofShreading').value;
        const onsite = document.getElementById('onSite').value;
        const remark = document.getElementById('remark').value;

        if( !onsite || !request_date){
            setMandatoryfield(true)
        }
        else{
        const result = await rmsRequest('ShreddingRequest','','',request_date,'',file_name,'','',noof_pages,onsite,'',remark,localStorage.getItem('CUST_ID'));
        console.log(result)
        }
    }

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
                                            less than 10
                                        </label>
                                        &nbsp;&nbsp;
                                        <label>
                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option2" onClick={handlemorethan} />
                                          more than 10
                                        </label>
                                    </div>

                                    <div className="form-group" id="Search&Select">
                                        <label>Search *</label>
                                        <Select 
                                        options={options}
                                        isMulti={true}
                                        // onChange={handleChange} 
                                        />                                    
                                        </div>
                                    <div className="form-group" id="PagesToBeShred" style={{ display: "none" }}>
                                        <label>Shredd *</label>
                                        <input type="number" className="form-control" id='noofpages' />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Date Of Shredding <span style={{color:"red"}}>*</span></label>
                                            <input type="date" className="form-control" id='dateofShreading' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>On Site Shredding <span style={{color:"red"}}>*</span></label>
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
                                    <button type="submit" className="btn btn-primary float-right" onClick={handleClick}>Submit</button>
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
