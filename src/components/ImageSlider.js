import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Importe o arquivo CSS com as classes

const ImageSlider = ({ image1, image2, width, height }) => {
	const [currentImage, setCurrentImage] = useState(image1);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
		}, 5000);

		return () => clearInterval(intervalId);
	}, [image1, image2]);

	return (
		<div className="teste">
			<img
				alt=""
				src={image1}
				className={
					currentImage === image1 ? "slider-image active" : "slider-image"
				}
				style={{ width, height }}
			/>
			<img
				alt=""
				src={image2}
				className={
					currentImage === image2 ? "slider-image active" : "slider-image"
				}
				style={{ width, height }}
			/>
		</div>
	);
};

export default ImageSlider;
