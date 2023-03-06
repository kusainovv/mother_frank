import React, { useState } from 'react';
import style from './Style.module.css';
import { Footer } from '@/shared/footer/Footer';
import { Header } from '@/shared/header/Header';

const ProductPage = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const images = [`url(/img/item_main.png)`, `url(/img/slide_1.jpg)`, `url(/img/slide_2.jpg)`, `url(/img/slide_3.jpg)`];
	return <div className={style['Page']}>
		<Header />

		<div>
			<div className={style['MainInformation']}>
				<div className={style['MainInformationSlider']}>
					<div>
						<svg
							className={style['NavigationArrow']}
							onClick={() => {
								setCurrentSlide(currentSlide - 1 === 0 ? images.length : currentSlide - 1);
							}}
							width="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d={'M4 12L20 12M4 12L10 6M4 12L10 18'}
								stroke="#3A0005"
								stroke-width="1.3"
								stroke-linecap="butt"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div className={style['Preview']} style={{
						backgroundImage: images[currentSlide]
					}} />
					<div>
						<svg
							className={style['NavigationArrow']}
							onClick={() => { 
								setCurrentSlide(currentSlide + 1 === images.length ? 0 : currentSlide + 1);
							}}
							width="30px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d={'M20 12L4 12M20 12L14 18M20 12L14 6'}
								stroke="#3A0005"
								stroke-width="1.3"
								stroke-linecap="butt"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>


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
	</div>
};


export default ProductPage;