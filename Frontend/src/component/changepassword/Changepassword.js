import react,{ useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './changepass.css'

function Changepassword() {
    const [mandatoryfield, setMandatoryfield] = useState();
    const [showpass, setShowpass] = useState(false);
    const [showpass2, setShowpass2] = useState(false);
    const [showpass3, setShowpass3] = useState(false);

    const toggleicon = () => {
        setShowpass(!showpass);
    }
    const toggleicon2 = () => {
        setShowpass2(!showpass2);
    }
    const toggleicon3 = () => {
        setShowpass3(!showpass3);
    }

    return (
        <>
            <div className="changepasscontainer">
                <Navbar />
                <div >

                    <div className="col " style={{ margin: "100px auto", width: "620px" }}>
                        <div className="card" >
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <form className='col'>
                                    <h3 className="card-title mt-2 text-center">Change Password</h3><br />
                                    <label>Current Password <span style={{ color: "red" }}>*</span></label>

                                    <div className="input-group">

                                        <span className="input-group-addon" onClick={toggleicon}>
                                            {showpass ? <i className="glyphicon glyphicon-eye-close"></i>
                                                : <i className="glyphicon glyphicon-eye-open"></i>}</span>

                                        <input id="password" type={showpass ? 'text' : 'password'} className="form-control" name="password" placeholder="Password" required />

                                    </div><br/>

                                    <label>New Password <span style={{ color: "red" }}>*</span></label>

                                    <div className="input-group">

                                        <span className="input-group-addon" onClick={toggleicon2}>
                                            {showpass2 ? <i className="glyphicon glyphicon-eye-close"></i>
                                                : <i className="glyphicon glyphicon-eye-open"></i>}</span>

                                        <input id="password" type={showpass2 ? 'text' : 'password'} className="form-control" name="password" placeholder="Password" required />

                                    </div><br/>


                                    <label>Confirm Password <span style={{ color: "red" }}>*</span></label>

                                    <div className="input-group">

                                        <span className="input-group-addon" onClick={toggleicon3}>
                                            {showpass3 ? <i className="glyphicon glyphicon-eye-close"></i>
                                                : <i className="glyphicon glyphicon-eye-open"></i>}</span>

                                        <input id="password" type={showpass3 ? 'text' : 'password'} className="form-control" name="password" placeholder="Password" required />

                                    </div><br/>

                                    {
                                        mandatoryfield ?
                                            <p style={{ color: "red" }}>Please! fill the mandatory field.</p>
                                            : null
                                    }


                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-5 mt-3" id="subnitbtn">Change</button>
                                        <button  className="btn btn-secondary mr-4 float-right mb-5 mt-3" onClick={()=>{window.location.href='/Dashboard'}}>Cancel</button>
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

export default Changepassword;