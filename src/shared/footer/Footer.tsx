/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import style from './Style.module.css';


export const Footer = () => <div className={style['Wrapper']}>
	<a href='/politics' className={style['Link']}>
    Политика сообщества.
	</a>
</div>;
