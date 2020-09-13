import React from 'react';
import Hero_One from '../../images/hero_one.jpg';
import Hero_Two from '../../images/hero_two.jpg';
import Hero_Three from '../../images/hero_three.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/Banner.css';

const Banner = () => {

	return (
		<div className="carousel">
			<Carousel>
			  <Carousel.Item>
			    <img
			    	className="carousel-img-1 d-block w-100"
			    	src={Hero_One}
			      	alt="First slide"
			    />
			  </Carousel.Item>

			  <Carousel.Item>
			    <img
			    	className="carousel-img-2 d-block w-100 c-img-1"
			    	src={Hero_Two}
			    	alt="Third slide"
			    /> </Carousel.Item>

			  <Carousel.Item>
			    <img
			    	className="carousel-img-3 d-block w-100"
			    	src={Hero_Three}
			    	alt="Third slide"
			    />
			  </Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Banner;