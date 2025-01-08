import React from "react";

function CustomerBanner(){
    return(
        <div>
            <h2>Забронировать домик</h2>

            <div className="form-block">
                <form action="" method="get">
                    <input type="text" name="name" id="name" placeholder="Как вас зовут?"/>
                    <input type="tel" name="phone" id="phone" placeholder="+7 (999) 999 99 99"/>
                </form>
            </div>

            <div>
                <div>
                    <button>ЗАБРОНИРОВАТЬ</button>
                </div>
                <p>
                    Оставляя заявку Вы принимаете условия соглашения об обработке персональных данных
                </p>
            </div>
        </div>
    )
};

export default CustomerBanner;