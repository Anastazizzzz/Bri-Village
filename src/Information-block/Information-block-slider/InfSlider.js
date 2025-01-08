import React, { useState } from "react";
import sliderInformation from "./InfSlider-data.js"

function InformationSlider(){
    const [id, setIndex] = useState(0);
  
    const CreateSlider = () => {
      setIndex((sliderRender) => (sliderRender + 1) % sliderInformation.length);
    }
  
    const reverceCreateSlider = () => {
      setIndex((sliderRender) => (sliderRender - 1 + sliderInformation.length) % sliderInformation.length);
    };

    return(
        <div>

            <img src={sliderInformation[(id + 1) % sliderInformation.length].src} alt="Slider-img" className="slider-card"/>

            
            <button onClick={CreateSlider} id="arrow1">Click</button>
                            
            <button onClick={reverceCreateSlider} id="arrow2">Click</button>

        </div>
    )
}

export default InformationSlider;