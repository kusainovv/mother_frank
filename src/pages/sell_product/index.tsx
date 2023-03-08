import { Footer } from "@/shared/footer/Footer";
import { Header } from "@/shared/header/Header";
import React, { useState } from "react";
import style from './Style.module.css';
import {MultiSelect} from 'react-multi-select-component';

const SellProduct = () => {
    const [productSettings, setProductSettings] = useState({
        title: '',
        price: '',
        telegram_username: '',
        about: '',
        recommendation: '',
        sizes_grid: '',
        additional_information: ''
    });

    const [sizes, setSizes] = useState([]);

    return <div className={style['Page']}>
        <Header />
        <div className={style['Information']}>
            <p className={style['Title']}>Как выставить товар?</p>

            <div className={style['Rules']}>
                <ul>
                    <li>
                        <p>Напишите про товар боту</p>
                        <a href='@/test'>@mother_frank</a>
                    </li>
                </ul>
            </div>


            <p className={style['Title']}>Сделать заявку</p>
            <div className={style['Playground']}>
                <div className={style['TelegramMessagePlaceholder']}>
                    <div className={style['TelegramMessageContent']}>
                        <p> 1. {productSettings.title || 'Пусто'}</p>
                        <p> 2. {productSettings.price || 'Пусто'}</p>
                        <p> 3. {sizes.length ? sizes.map((size, idx) => <React.Fragment key={idx}>{size.label}</React.Fragment>) : 'Пусто'}</p>
                        <p> 4. {productSettings.telegram_username || 'Пусто'}</p>
                        <p> 5. {productSettings.about || 'Пусто'}</p>
                        <p> 6. {productSettings.recommendation || 'Пусто'}</p>
                        <p> 7. {productSettings.sizes_grid || 'Пусто'}</p>
                        <p> 8. {productSettings.additional_information || 'Пусто'}</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default SellProduct;