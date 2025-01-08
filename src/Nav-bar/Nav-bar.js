import React from "react";
import "./Nav-bar.css"
import phoneIcon from "./phone-icon.png";
import Logo from "./logo.png";

function NavBar(){
    return(
        <div className="nav-bar">
            <div className="Content-nav-bar">
                
                <div className="nav-bar__Logo">
                    <img src={Logo} alt="Logo" className="Logo"/>
                </div>

                <div className="nav-bar__list">
                    <ul className="List">
                        <li className="list-point">Главная</li>
                        <li className="list-point">Номера</li>
                        <li className="list-point">Услуги</li>
                        <li className="list-point">О нас</li>
                        <li className="list-point">Контакты</li>
                    </ul>
                </div>

                <div className="click-part">
                    <div className="nav-bar__tell">
                        <div className="tell-content">
                            <img src={phoneIcon} alt="icon" className="icon"/>
                            <a type="tell" className="phone-number">+7 995 383 16 16</a>
                        </div>
                    </div>

                    <div className="nav-bar__click">
                        <button className="Button-click">
                            ЗАБРОНИРОВАТЬ
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default NavBar;