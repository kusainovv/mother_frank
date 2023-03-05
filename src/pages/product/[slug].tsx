import React from 'react';
import style from './Style.module.css';
import { Footer } from '@/shared/footer/Footer';
import { Header } from '@/shared/header/Header';

const ProductPage = () => <div className={style['Page']}>
	<Header />

	<div>
		<div className={style['MainInformation']}>
			<div className={style['Preview']} style={{
                backgroundImage: `url(/img/item_main.png)`
            }} />

			<div className={style['Information']}>
				<p className={style['Title']}>Punks not dead</p>
				<p className={style['Price']}>4.000$</p>
				<div className={style['Sizes']}>
					<div className={style['Size']}>S</div>
					<div className={style['Size']}>L</div>
					<div className={style['Size']}>M</div>
				</div>
				<button className={style['Button']}>
                    Связаться
				</button>

				<div className={style['AdditionalInformation']}>
					<p className={style['Option']}>О товаре</p>
					<p className={style['Option']}>Рекомендации по уходу</p>
					<p className={style['Option']}>Размерная сетка</p>
				</div>
			</div>
		</div>

		<div className={style['FullDescription']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facere, dolore recusandae tenetur mollitia laudantium modi possimus obcaecati deserunt voluptatem nam voluptate doloribus perspiciatis corrupti iusto illo maiores. Ab non delectus illo provident nostrum obcaecati ut reiciendis reprehenderit. Facere atque quas nam quaerat, incidunt impedit ab ducimus nisi et distinctio fugit doloremque quam ratione esse natus ut aspernatur voluptatum libero? Voluptatem animi, rerum ipsa porro veniam pariatur aut commodi sint dolorem a harum esse, facilis asperiores dolorum laboriosam deserunt eveniet enim! Optio nemo dolore, ea quas assumenda repellendus praesentium ad aut modi, fugit cum saepe, a atque? Voluptate voluptates eaque exercitationem itaque doloremque eos ipsam? Placeat sequi in ad accusamus sit natus fugiat necessitatibus laboriosam. Libero pariatur incidunt sunt non quidem similique, blanditiis natus? Tenetur laborum quos quo.
		</div>

		<Footer />
	</div>
</div>;


export default ProductPage;