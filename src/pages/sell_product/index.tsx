import { Footer } from "@/shared/footer/Footer";
import { Header } from "@/shared/header/Header";
import React, { useState } from "react";
import style from './Style.module.css';

const SellProduct = () => {
    return <div className={style['Page']}>
        <Header />
        <div className={style['Information']}>
            <p className={style['Title']}>Как выставить товар?</p>

            <div className={style['Rules']}>
                <p className={style['RuleTitle']}>Напишите про товар боту</p>
                <a href='@/test' className={style['RuleLink']}>@mother_frank</a>
            </div>


            <p className={style['Title']} id='message_template'>Шаблон заявки</p>
            <div className={style['TelegramMessagePlaceholder']}>
                <div className={style['TelegramMessageContent']}>
                    <p> 1. Название товара </p>
                    <p> 2. Цена товара </p>
                    <p> 3. Размер/Размеры </p>
                    <p> 4. Телеграм id </p>
                    <p> 5. О товаре </p>
                    <p> 6. Рекомендации по уходу </p>
                    <p> 7. Размерная сетка </p>
                    <p> 8. Дополнительная информация о товаре </p>
                </div>
            </div>

            <p className={style['Title']}>Как выставить товар (по шагам)</p>
            <div className={style['Steps']}>
                <div className={style['Step']}>
                    1. Напишите любое сообщение в телеграм <a href='' className={style['RuleLink']}>@mother_frank</a>
                </div>
                <div className={style['VerticalLine']} />
                <div className={style['Step']}>
                    {'2. Ждите когда бот напишет "Я готов вас слушать"'}
                </div>
                <div className={style['VerticalLine']} />
                <div className={style['Step']}>
                    3. Отправьте ему сообщением информацию о вашем продукте (см. <a href='#message_template' className={style['RuleLink']}>Шаблон заявки</a>)
                    <br />
                    <p className={style['StepImages']}>
                        В одном сообщении с информации о вашем продукте, добавьте как минимум одно изображение вашей продукции
                    </p>
                </div>
                <div className={style['VerticalLine']} />
                <div className={style['Step']}>
                    4. Ждите когда модератор обработает ваш товар (1/2 дня)
                </div>
            </div>
        </div>



        <Footer />
    </div>
}

export default SellProduct;