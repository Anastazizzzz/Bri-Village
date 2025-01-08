import React from "react";
import imgForBanner from "./img-for-banner.png"

function BannerFirst(){
    return(
        <div>
            <div className="Banner-Content">
                <div>
                    <img src={imgForBanner} alt="Img" className="Img-for-banner"/>
                </div>

                <div>
                    <h2>Поможем с выбором и проконсультируем по всем вопросам</h2>
                </div>

                <div>
                    <button>Забронировать</button>
                </div>
            </div>
        </div>
    )
}

export default BannerFirst;