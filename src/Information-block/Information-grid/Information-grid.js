import React from "react";
import icon1 from "./icons/icon1.png";
import icon2 from "./icons/icon2.png";
import icon3 from "./icons/icon3.png";
import icon4 from "./icons/icon4.png";
import icon5 from "./icons/icon5.png";
import icon6 from "./icons/icon6.png";

function InformmationGrid(){
    return(
        <div>
            <div className="Content-part">
                <div className="Content-part-grid">

                    <div className="Column1">
                        <div className="part1">
                            <img src={icon1} alt="icon" className="icons-for-grid"/>
                            <p>Наш глэмпинг курорт расположен в тишине вдали от городской суеты</p>
                        </div>

                        <div className="part2">
                            <img src={icon2} alt="icon" className="icons-for-grid"/>
                            <p>Море зеленой травы и чистые озера - летом,
                            бескрайние поля, чистейший белоснежный снег- зимой</p>
                        </div>

                        <div className="part3">
                            <img src={icon3} alt="icon" className="icons-for-grid"/>
                            <p>Террирория глемпинга оборудована камерами видеонаблюдения, заборами, а также в
                            каждом домике расположена мед аптечка</p>
                        </div>
                    </div>

                    <div className="Column2">
                        <div className="part4">
                            <img src={icon4} alt="icon" className="icons-for-grid"/>
                            <p>Наши менеджеры всегда на связи с вами, чтобы ответить на любые вопросы</p>
                        </div>

                        <div className="part5">
                            <img src={icon5} alt="icon" className="icons-for-grid"/>
                            <p>Можно заказать еду: завтрак, обед, ужин на территории глемпинга</p>
                        </div>

                        <div className="part6">
                            <img src={icon6} alt="icon" className="icons-for-grid"/>
                            <p>45 минут езды по трассе м7 «волга» от центра города Казани и вы попадаете в совершенно неповторимую
                            атмосферу сельской жизни</p>
                        </div>
                    </div>

                </div>

                <div>
                    <button>Больше преимуществ</button>
                </div>
            </div>
        </div>
    )
}

export default InformmationGrid;