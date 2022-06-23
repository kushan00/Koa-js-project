import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { CustomerLoginFunc } from "../services/customerServices";

const CustomerLogin = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await CustomerLoginFunc(formData);
		console.log("data",data.data.data.userRole);
		localStorage.setItem("userRole",data.data.data.userRole);
        navigate("/loggedUser");
	};


	return (
		<div className="login-form">
			<h1 className="heading">Customer Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into Your Account
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div><br/>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div><br/>
				<input type="submit" className="btn btn-warning" value="Login" />
			</form><br/>
			<p className="link">
				Don't have an account? <Link to="/register" className="btn btn-primary">Sign Up</Link>
			</p>
		</div>
	);
};

export default CustomerLogin;
