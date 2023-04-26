import React from "react";

const Footer = () => {
	return (
		<footer className="position-absolute w-100 pb-5 d-flex justify-content-center text-light">
			<h2 className="h2 me-3">Kamil Bielawski</h2>
			<h2 className="h2 ms-3">
				<a
					href="https://github.com/biel4s/weather-in-react"
					className="text-decoration-none "
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
			</h2>
		</footer>
	);
};

export default Footer;
