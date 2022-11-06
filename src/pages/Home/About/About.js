import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
	return (
		<div className="hero min-h-screen bg-base-200 mb-10 rounded-md">
			<div className="hero-content flex-col lg:flex-row">
				<div className="w-1/2 relative">
					<img src={person} className="max-w-sm rounded-lg shadow-2xl w-4/5" />
					<img
						src={parts}
						className=" absolute top-1/2
             max-w-sm rounded-lg shadow-2xl w-[50%] right-[100px] border-8"
					/>
				</div>
				<div className="w-1/2">
					<p className="text-2xl text-orange-700">About Us</p>
					<h1 className="text-5xl font-bold">
						We are qualified <br /> & of experience <br /> in this field
					</h1>
					<p className="py-6">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<p className="pb-6">
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, by injected
						humour, or randomised words which don't look even slightly
						believable.
					</p>
					<button className="btn btn-primary">Get More Info</button>
				</div>
			</div>
		</div>
	);
};

export default About;
