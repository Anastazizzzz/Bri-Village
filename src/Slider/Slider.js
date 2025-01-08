import React, { useState } from "react";
import "./Slider.css"
import sliders from "./Slider-inf.js";
import arrow1 from "./arrow1.png";
import arrow2 from "./arrow2.png";
import Card from "./month.png"


function Slider(){
    const [index, setIndex] = useState(0);
  
    const CreateSlider = () => {
      setIndex((sliderRender) => (sliderRender + 1) % sliders.length);
    }
  
    const reverceCreateSlider = () => {
      setIndex((sliderRender) => (sliderRender - 1 + sliders.length) % sliders.length);
    };
  
    return(

        <div className="slider-Position">
  
          <div className="card-slide">
            <img src={sliders[(index + 1) % sliders.length].src} alt="Slider-img" className="slider-card"/>
            
            <div>
              <div className="Slider-main-inf">
                <p>{sliders[(index + 1) % sliders.length].day}</p>
                <p>{sliders[(index + 1) % sliders.length].autor}</p>
              </div>
            </div>

          </div>

          <div className="textContent">
            <div>
              <h1>Глэмпинг в Казани</h1>
              <p className="txt-desc">на холмистых склонах в окружении соснового бора с красивым голубым небом</p>
            </div>

            <div className="Button-content">
              <button className="Button-Click">
                ЗАБРОНИРОВАТЬ ДОМИК <img src={Card} alt="Card" className="Card"/>
              </button>
            </div>
          </div>
  
              <div className="button-position">
                <div className="arrows">
                    <div className="arrow1">
                        <button onClick={CreateSlider} id="arrow1">
                          <img src={arrow1} alt="arrow1" className="button-icon"/>
                        </button>

                    </div>
                
                    <div className="arrow2">
                        <button onClick={reverceCreateSlider} id="arrow2">
                          <img src={arrow2} alt="arrow2" className="button-icon"/>
                        </button>
                    </div>
                </div>
              </div>
    </div>
    )
  };
  
  export default Slider;