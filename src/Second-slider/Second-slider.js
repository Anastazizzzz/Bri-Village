import React, { useState } from "react";
import "./Second-slider.css"
import "./Second-slider-inf.js";
import sliderImg from "./Second-slider-inf.js"

function SecondSlider(){

    const [id, setIndex] = useState(0);
  
    const CreateSlider = () => {
      setIndex((sliderRender) => (sliderRender + 1) % sliderImg.length);
    }
  
    const reverceCreateSlider = () => {
      setIndex((sliderRender) => (sliderRender - 1 + sliderImg.length) % sliderImg.length);
    };

    return(
        <div className="Second-slider">
            <div className="Second-slider__content">
                <div className="Second-slider__content card-block">
                    <div className="img-card">
                        <img src={sliderImg[(id + 1) % sliderImg.length].src} className="img-card"/>

                        <div className="Button">  
                            <div className="Button-podsition">
                                <div className="Button-block">
                                    <button onClick={CreateSlider} className="buttons1">Click</button>
                                    <button onClick={reverceCreateSlider} className="buttons2">Click</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="prices">
                        <div className="days"></div>
                        <div className="weekend"></div>
                    </div>

                    <div className="text-card">
                        <p></p>
                    </div>

                    <div className="about">
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSlider;