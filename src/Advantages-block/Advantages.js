import React from "react";
import "./Advantages.css"
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";

function Advantages(){
    return(
        <div className="grid-section">

            <div className="firstLine">
                <div className="icons-card" id="icon-slide1">
                    <div className="icons">
                        <img src={icon1} alt="icon" className="icons-img"/>
                    </div>
                    <p>Подарочные сертификаты</p>
                </div>

                <div className="icons-card" id="icon-slide2">
                    <div className="icons">
                        <img src={icon2} alt="icon" className="icons-img"/>
                    </div>
                    <p>Специальные условия и цены при снятии домика на месяц</p>
                </div>

            </div>

            <div className="secondLine">
                <div className="icons-card" id="icon-slide3">
                    <div className="icons">
                        <img src={icon3} alt="icon" className="icons-img"/>
                    </div>
                    <p>Скидка на заселение молодоженам</p>
                </div>

                <div className="icons-card" id="icon-slide4">
                    <div className="icons">
                        <img src={icon4} alt="icon" className="icons-img"/>
                    </div>
                    <p>Специальные цены при бронировании всего глэмпинга</p>
                </div>

                <div className="icons-card" id="icon-slide5">
                    <div className="icons">
                        <img src={icon5} alt="icon" className="icons-img"/>
                    </div>
                    <p>Специальные цены на будний день</p>
                </div>
            </div>

        </div>
    )
}

export default Advantages;