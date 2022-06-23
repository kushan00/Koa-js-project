import React from "react";
import { Link, Redirect } from "react-router-dom";


const SelectPage = () => {


	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1>Select Register type</h1>
					<br />
					<div className="buttons">
						<Link to="/customerRegister" className="btn btn-success">
							Customer
						</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/traderRegister" className="btn btn-success">
							Trader
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};



export default SelectPage;
