/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import style from './Style.module.css';

export const Header = () => <Link href={'/'} className={style['CustomLink']}>
	<img className={style['Logotype']} src={'/img/logo.png'} alt='Logo' />
</Link>;
