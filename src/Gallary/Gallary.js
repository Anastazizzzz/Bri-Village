import React from "react";
import "./Gallary.css"
import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"
import card4 from "./card4.png"
import card5 from "./card5.jpg"
import card6 from "./card6.png"
import card7 from "./card7.png"

function GallaryRender(){
    return(
        <div>
            <div className="Gallary-slider">
                <div className="Header-n-button">
                    <h2 className="Header-block">Лучшие домики на природе</h2>

                    <div className="buttons">
                        <button className="button1">
                            <img/>
                        </button>

                        <button className="button1">
                            <img/>
                        </button>
                    </div>
                </div>

                <div className="Gallary-slider_Content">
                    <div className="block1">
                        <div className="block1-grid">
                            <div className="block1-grid_row1">
                                <img src={card1} alt="cards" className="column-card"/>
                                <img src={card2} alt="cards" className="column-card"/>
                            </div>

                            <div className="block1-grid_row2">
                                <img src={card3} alt="cards" className="row-card"/>
                            </div>
                        </div>
                    </div>

                    <div className="block2">
                        <div className="block2-grid">
                            <img src={card4} alt="cards" className="center-card"/>
                        </div>
                    </div>

                    <div className="block3">
                        <div className="block3-grid">
                            <div className="block3-grid_row1">
                                <img src={card5} alt="cards" className="row-card"/>
                            </div>

                            <div className="block3-grid_row2">
                                <img src={card6} alt="cards" className="column-card"/>
                                <img src={card7} alt="cards" className="column-card"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GallaryRender;