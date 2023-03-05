import Link from 'next/link';
import React from 'react';
import style from './Style.module.css';

export const ProductsList = () => <div className={style['Wrapper']}>
	{
		[
			{title: 'Punk not die', price: '4.000Р', href: 1},
		].map((product, idx) => <Link className={style['Product']} href={`/product/${product.href}`} key={idx}>
			<div className={style['ProductPreview']} style={{
                backgroundImage: `url(./img/item.png)`
            }} />

			<div className={style['Description']}>
				<p className={style['Title']}>{product.title}</p>
				<p className={style['Price']}>{product.price}</p>
			</div>
		</Link>)
	}
</div>;
