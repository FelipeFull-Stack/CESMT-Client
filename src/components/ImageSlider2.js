import React, { useState, useEffect } from "react";
import "./ImageSlider2.css"; // Importe o arquivo CSS com as classes

const ImageSlider2 = ({ image1, image2, text1, text2, width, height }) => {

    text1 = "Unidade de Jequié - BA";
    text2 = "Unidade de Vitória da Conquista - BA"
    const [currentImage, setCurrentImage] = useState(image1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [image1, image2]);

    return (
        <div>
            {currentImage === image1 ? (
                <div>
                    <img
                        src={image1}
                        alt="sliding-image"
                        className="slider-image active"
                        style={{ width, height }}
                    />
                    <p>{text1}</p>
                </div>
            ) : (
                <div>
                    <img
                        src={image2}
                        alt="sliding-image"
                        className="slider-image active"
                        style={{ width, height }}
                    />
                    <p>{text2}</p>
                </div>
            )}
        </div>
    );
};

export { ImageSlider2 };
