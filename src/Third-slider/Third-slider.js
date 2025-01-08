import React, { useState } from "react";
import SlideInf from "./Third-slider-inf.js"

function ThirdSlider(){

    const [id, setId] = useState(0);
  
    const CreateSlider = () => {
        setId((prevId) => (prevId + 1) % SlideInf.length);
    }
  
    const reverceCreateSlider = () => {
        setId((prevId) => (prevId - 1 + SlideInf.length) % SlideInf.length);
    };

    return(
        <div>
            <h2>Инфраструктура рядом</h2>

            <button onClick={CreateSlider} className="buttons-for-crop-img">Click</button>
            <button onClick={reverceCreateSlider} className="buttons-for-crop-img">Click</button>

            <div>
                <div className="Third-slider">
                    <div className="Third-slider__content">

                        <div className="images">
                        <img src={SlideInf[id % SlideInf.length].src} className="img-card-crop" alt="crop-slide" />
                        <img src={SlideInf[(id + 1) % SlideInf.length].src} className="img-card-crop" alt="crop-slide" />
                        <img src={SlideInf[(id + 2) % SlideInf.length].src} className="img-card-crop" alt="crop-slide" />
                        <img src={SlideInf[(id + 3) % SlideInf.length].src} className="img-card-crop" alt="crop-slide" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ThirdSlider;