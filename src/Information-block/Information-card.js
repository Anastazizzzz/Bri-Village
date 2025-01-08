import React from "react";
import InformationSlider from "./Information-block-slider/InfSlider";
import InformmationGrid from "./Information-grid/Information-grid.js"

function InformationCard(){
    return(
        <div>
            <div className="Information-block">
                <div className="Information-block__text-part">
                    <h2>О нашем глэмпинге BriVillage</h2>
                    <p>Bri Village - это уютный глэмпинг, расположенный в экологически чистом районе недалеко от Казани. Мы предлагаем незабываемый отдых в комфортабельных домиках среди живописных лесов и озер. Наш глэмпинг идеально подходит для тех, кто хочет насладиться природой, не отказываясь от удобств современной жизни.</p>
                    <p>Мы гарантируем экологически чистый район, где вы сможете насладиться свежим воздухом и красотой природы. Наши комфортабельные домики оборудованы всем необходимым для приятного проживания.</p>

                    <button>Читать подробнее</button>
                </div>
 
                <div className="Information-sllider">
                    <InformationSlider/>
                </div>
            </div>

            <div>
                <InformmationGrid />
            </div>
        </div>
    )
}

export default InformationCard;