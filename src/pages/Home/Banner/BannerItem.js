import React from "react";

const BannerItem = ({ slide }) => {
	const { id, prev, next, image } = slide;
	return (
		<div id={`slide${id}`} className="carousel-item relative h-[600px]  w-full">
			<div className="img-gradient w-full h-full  rounded-xl">
				<img src={image} className="w-[100%] h-full rounded-xl " />
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
				<a href={`#slide${prev}`} className="btn btn-circle mr-5">
					❮
				</a>
				<a href={`#slide${next}`} className="btn btn-circle">
					❯
				</a>
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-1/3">
				<h1 className="text-6xl text-white">
					Affordable <br /> Price For Car <br /> Servicing
				</h1>
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-[60%]">
				<p className="text-xl text-white">
					There are many variations of passages of available, but <br /> the
					majority have suffered alteration in some form
				</p>
			</div>
			<div className="absolute flex justify-end transform -translate-y-1/2 left-14 top-[80%]">
				<button className="btn btn-primary mr-5">Discover More</button>
				<button className="btn btn-secondary">Latest Project</button>
			</div>
		</div>
	);
};

export default BannerItem;
