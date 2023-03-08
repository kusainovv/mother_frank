import React from "react";
import style from './Style.module.css';

const Politics = () => {
    return <div className={style['Page']}>
        <div className={style['Information']}>
            <h1>Правила</h1>
            <ul className={style['Rules']}>
                <li className={style['Rule']}>Мы не берем отвественность за успешность транзакции</li>
                <li className={style['Rule']}>Мы не отвечаем за содержание контента, вся отвественность лежит на продавце</li>
            </ul>

            <a href="/" className={style['Link']}>Вернуться назад</a>
        </div>
    </div>
}


export default Politics;