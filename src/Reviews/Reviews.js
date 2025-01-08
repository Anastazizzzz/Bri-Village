import React, {useState} from "react";
import commentsPart from "./Reviews-inf.js";

function Reviews(){
    const [id, setIndex] = useState(0);
  
    const CreateSlider = () => {
      setIndex((sliderRender) => (sliderRender + 1) % commentsPart.length);
    }
  
    const reverceCreateSlider = () => {
      setIndex((sliderRender) => (sliderRender - 1 + commentsPart.length) % commentsPart.length);
    };

    return(
        <div>
            <div>
                <img src={commentsPart[(id) % commentsPart.length].img} className="img-card"/>
                <p className="publish-date">{commentsPart[(id) % commentsPart.length].date}</p>
                <p className="customerName">{commentsPart[(id) % commentsPart.length].name}</p>
                <p className="comment">{commentsPart[(id) % commentsPart.length].text}</p>
            </div>

            <div>
                <img src={commentsPart[(id + 1) % commentsPart.length].img} className="img-card"/>
                <p className="publish-date">{commentsPart[(id + 1) % commentsPart.length].date}</p>
                <p className="customerName">{commentsPart[(id + 1) % commentsPart.length].name}</p>
                <p className="comment">{commentsPart[(id + 1) % commentsPart.length].text}</p>
            </div>

            <div>
                <button onClick={CreateSlider} className="buttons1">Click</button>
                <button onClick={reverceCreateSlider} className="buttons2">Click</button>
            </div>
        </div>
    )
};

export default Reviews;