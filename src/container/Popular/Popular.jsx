import React from 'react';
import './Popular.css';
import { images } from '../../constants';

const Popular = () => (
	<section className='popular__section' id='popular'>
		<h2 className='section__title'>Popular Dishes</h2>

		<div className='popular__container container grid'>
			<article className='popular__card'>
				<img src={images.popular1} alt='popular' className='popular__img' />

				<h3 className='popular name'>Card 1</h3>
				<span className='popular__description'>Recently Added</span>
				<span className='popular__price'>950sh.</span>
				<button className='popular__button'>
					<i className='ri-shopping-bag-line'></i>
				</button>
			</article>

			<article className='popular__card'>
				<img src={images.popular2} alt='popular' className='popular__img' />

				<h3 className='popular name'>Card 2</h3>
				<span className='popular__description'>Recently Added</span>
				<span className='popular__price'>700sh.</span>
				<button className='popular__button'>
					<i className='ri-shopping-bag-line'></i>
				</button>
			</article>

			<article className='popular__card'>
				<img src={images.popular3} alt='popular ' className='popular__img' />

				<h3 className='popular name'>Card 3</h3>
				<span className='popular__description'>Recently Added</span>
				<span className='popular__price'>600sh.</span>
				<button className='popular__button'>
					<i className='ri-shopping-bag-line'></i>
				</button>
			</article>
		</div>
	</section>
);

export default Popular;
