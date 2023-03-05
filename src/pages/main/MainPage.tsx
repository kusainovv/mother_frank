import { Footer } from "@/shared/footer/Footer";
import { Header } from "@/shared/header/Header";
import { ProductsList } from "@/widgets/ProductsList/ProductsList";
import React from "react";
import style from './Style.module.css';

const MainPage = () => <div className={style['Page']}>
    <Header />

    <div>
        <ProductsList />
    </div>

    <Footer />
</div>;


export default MainPage;