import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className='app__bg app__wrapper section__padding'>
		<div className='app__wrapper_img app__wrapper_img-reverse'>
			<img src={images.about} alt='chef_image' />
		</div>
		<div className='app__wrapper_info'>
			<SubHeading title="Chef's word" />
			<h1 className='headtext__cormorant'>About Us</h1>

			<div className='app__chef-content'>
				<div className='app__chef-content_quote'>
					<img src={images.quote} alt='quote_image' />
					<p className='p__opensans'>
					Sakura Sushi offers a fusion of Japanese tradition and culinary creativity
					</p>
				</div>
				<p className='p__opensans'>
					{' '}
					With a focus on freshness and quality, our chefs craft a diverse menu of traditional favorites and innovative creations. Join us at Sakura Sushi for a journey of taste and culture in every bite..{' '}
				</p>
			</div>

			<div className='app__chef-sign'>
				<p>Yesaya Jones</p>
				<p className='p__opensans'>Chef & Founder</p>
				<img src={images.sign} alt='sign_image' />
			</div>
		</div>
	</div>
);

export default AboutUs;
