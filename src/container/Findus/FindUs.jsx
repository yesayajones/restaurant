import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
	<div className='app__bg app__wrapper section__padding' id='contact'>
		<div className='app__wrapper_info'>
			<SubHeading title='Contact' />
			<p
				className='p__cormorant'
				style={{ color: '#DCCA87', margin: '2rem 0' }}
			>
				Recently Added
			</p>
			<h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
				Sushi Samurai <br />
				Salmon Cheese
			</h1>
			<div className='app__wrapper-content'>
				<p className='p__opensans'>
					Take a look at what's new. And do not deprive yoursel of a good meal,
					enoy and be happy.
				</p>
			</div>
			<button
				type='button'
				className='custom__button'
				style={{ marginTop: '2rem' }}
			>
				Order Now &rarr;
			</button>
		</div>

		<div className='app__wrapper_img'>
			<img src={images.recently} alt='finus_img' />
		</div>
	</div>
);

export default FindUs;
