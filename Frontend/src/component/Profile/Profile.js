import React,{useEffect,useState} from "react";
import Navbar from "../Navbar/Navbar";
import { ProfileDetails } from "../../api";

const Profile = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const profile = async () => {
            const data = await ProfileDetails(localStorage.getItem("CUST_ID"));
            console.log(data);
            setProfile(data);
        }
        profile();
    }, []);
    return (
        <>
            <div className="Profilediv">
                <Navbar />
                <div>

                    <div className="col " style={{ margin: "20px auto", width: "600px" }}>
                    <div style={{display:"flex",flexDirection:"row-reverse",paddingRight:"15px"}}>
                        <h5>Member Since:- {profile.custdoe}</h5>
                    </div>
                        <div className="card" >
                         
                            <article className="card-body" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <form autoComplete="off">
                                    <h3 className="card-title mt-2">Contact Information</h3><br />

                                    <div className="form-group">
                                        <label>Name *</label>
                                        <input type="Text" className="form-control" value={profile.custname} id='name' />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Email </label>
                                            <input type="email" className="form-control" value={profile.custemail} id="email" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Mobile </label>
                                            <input type="number" className="form-control"value={profile.custcontactno} id="mobile" />
                                        </div>
                                    </div>
                                    <h4 className="card-title mt-2">Address</h4><br />
                                    <div className="form-group">
                                        <label>Address 1 </label>
                                        <input type="Text" className="form-control" value={profile.custadd} id='address1' />
                                    </div>
                                    <div className="form-group">
                                        <label>Address 2</label>
                                        <input type="Text" className="form-control" value={profile.custadd1} id='address2' />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Country</label>
                                            <input type="text" className="form-control" value={profile.custcountry} id='country' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>State</label>
                                            <input type="text" className="form-control" value={profile.custstate} id='city'
                                            />

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" value={profile.custcity} id='state' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Pincode </label>
                                            <input type="number" className="form-control" value={profile.custpin} id='pincode'/>

                                        </div>
                                    </div>

                                   

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary  float-right">Update</button>
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

export default Profile;