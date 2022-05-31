import React from 'react'
import './Login.css'
import Image from './assets/whitelogo.png'
function Login() {
	return (
		<>
			<div className="container">

				<div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3" >

					<div className="row">
						<div className="iconmelon" >

							<img src={Image} alt="logo" />
						</div>
					</div>
					<div className="panel-heading">
						<div className="panel-title text-center text-white " style={{ fontSize: "20px", fontWeight: "600" }} >Login</div>
					</div>
					<div className="panel panel-default">
						{/* <div className="panel-heading">
							<div className="panel-title text-center">Login</div>
						</div> */}

						<div className="panel-body">
							<form name="form" id="form" className="form-horizontal" >
								<div className="input-group">
									<input id="user" type="email" className="form-control" name="user" placeholder="User" required />
									<span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>

								</div>
								<div className="input-group">
									<input id="password" type="password" className="form-control" name="password" placeholder="Password" required />
									<span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>

								</div>
								<div className="form-group">
									<button type="submit" href="#" className="btn btn-primary pull-center"> Log in</button>
								</div>
							</form>
						</div>

					</div>
					<div className="bottomdiv">
						<p> <a href='#'>forget password ?</a></p>
						<p><a href="#">Register</a></p>
					</div>
				</div>
			</div>
			<div>
			</div>

		</>

	)
}

export default Login
