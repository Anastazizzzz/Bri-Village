import React from "react";
import Logo from "./logo-for-footer.png"

import mail from "./icons-for-footer/mail.png";
import mapPin from "./icons-for-footer/map-pin.png";
import phone from "./icons-for-footer/phone.png";

import tg from "./social-media/telegram.png";
import vk from "./social-media/vk.png";
import whatsapp from "./social-media/whatsapp.png";

function Footer(){
    return(
        <div>
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="column1">
                        <img src={Logo}/>
                    </div>

                    <div className="column2">
                        <h3>Карта сайта</h3>

                        <div>
                            <ul>
                                <li><a>Главная</a></li>
                                <li><a>Номера</a></li>
                                <li><a>Услуги и акции</a></li>
                                <li><a>О нас</a></li>
                                <li><a>Контакты</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="column3">

                        <div>
                            <h3>Администрация Bri Village</h3>
                        </div>

                        <div className="block1">
                            <img src={mapPin}/>
                            <h4>Адрес BriVillage</h4>
                            <p>c.Бритвино, Зеленодольский район, Республика Татарстан</p>
                        </div>

                        <div className="block1">
                            <img src={phone}/>
                            <h4>Телефон для связи</h4>
                            <p>+7 995 383 16 16</p>
                        </div>

                        <div className="block1">
                            <img src={mail}/>
                            <h4>Email для связи</h4>
                            <p>bri.village@mail.ru</p>
                        </div>

                    </div>

                    <div className="column4">

                        <div>
                            <h3>Социальные сети</h3>
                        </div>

                        <div className="block1">
                            <img src={tg}/>
                            <h4>Telegram</h4>
                        </div>

                        <div className="block1">
                            <img src={whatsapp}/>
                            <h4>Whatsapp</h4>
                        </div>

                        <div className="block1">
                            <img src={vk}/>
                            <h4>VK</h4>
                        </div>

                    </div>
                </div>

                <div>
                    <line />

                    <p>© BriVillage 2023. Все права защищены. Любое копирование информации возможно только с
                    согласия правообладателя ресурса.</p>

                    <div>
                        <a>Договор оферты</a>
                        <a>Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;