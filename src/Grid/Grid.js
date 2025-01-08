import React from "react";
import imagesCards from "./Grid-inf";

function Cards({img, text}){
    return(
        <div>
            <img src={img} alt="img" className="Img-content"/>
            <p className="text-content">{text}</p>
        </div>
    )
}

function GridRender(){
    return(
        <div>

            <div>
                <h2>
                    Услуги и акции
                </h2>
            </div>

            <div>
                <button>Все</button>
                <button>Круглый год</button>
                <button>Лето</button>
                <button>Зима</button>
            </div>

            <div className="CardsGrid">
                {imagesCards.map((card) => (
                    <Cards key={card.id} img={card.img} text={card.text} />
                ))}
            </div>

        </div>
    )
}

export default GridRender;