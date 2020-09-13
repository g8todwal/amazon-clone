import React from 'react';
import '../../css/HomePage.css';
import Banner from './Banner.js';
import {Link} from 'react-router-dom';
import Product from './Product.js';
import Product_1 from '../../images/Product_1.jpg';
import Product_2 from '../../images/Product_2.jpg';
import Product_3 from '../../images/Product_3.jpg';
import Product_4 from '../../images/Product_4.jpg';
import Product_5 from '../../images/Product_5.jpg';
import Product_6 from '../../images/Product_6.jpg';
import capture from '../../images/Capture.JPG';
import Product_7 from '../../images/Product_7.jpg';
import Product_Big from '../../images/Picture_Big.jpg';
import Product_8 from '../../images/Product_8.jpg';
import Product_9 from '../../images/Product_9.jpg';
import Product_10 from '../../images/Product_10.jpg';
import capture3 from '../../images/Capture3.JPG';
import Product_11 from '../../images/Product_11.jpg';
import Ad_home from '../../images/Ad_home.jpg';
import { useStateValue } from '../../context/StateProvider';

const HomePage = () => {

	const [{ user }] = useStateValue();

	return (
		<div className="homepage">
			<Banner />
			<section className="home_section">
				<div className="home_row">
					<Product 
						id="1"
						title="iVooMi Infrared Thermometer with 14 months warranty, Non Contact Digital Thermometer"
						price={1499}  
						rating={2}
						image={Product_4}
					/>
					<Product 
						id="2"
						title="Fluke-4393789 59MAX+ Infrared Thermometer,multicolor"
						price={8227}  
						rating={4}
						image={Product_5}
					/>
					<div className="cont">
						{!user ? (
							<div className="sign_up">
								<div className="sign_in_1">
									<p className="sign_p">Sign in for your best experience</p>
									<Link to="/login"><button className="amazon_btn sign_up_btn">Sign in securely</button></Link>
								</div>
							</div>
						) : (

							<div className="sign_up">
								<div className="sign_in_1">
									<p className="sign_p">Go to your cart and Checkout!!!</p>
									<Link to="/checkout"><button className="amazon_btn sign_up_btn">Go To Your Cart </button></Link>
								</div>
							</div>

						)}
						<div className="sign_up sign_in_2">
							<img
								className="image_sign" 
								src={Product_3} 
								alt="dd" />
						</div>
					</div>
				</div>

				<div className="home_row">
					<Product 
						id="3"
						title="Lenovo Legion Y540 Intel Core i5 9th Gen 15.6 inch FHD Gaming Laptop"
						price={96900}  
						rating={5}
						image={Product_1}
					/>
					<Product 
						id="4"
						title="AVITA LIBER NS13A1IN005P 13.3-inch FHD Ultra Slim & Light Laptop"
						price={69999}  
						rating={5}
						image={Product_2}
					/>
				</div>

				<div className="capture">
					<img src={capture} alt="capture" />
				</div>

				<div className="home_row">
					<Product 
						id="5"
						title="Raspberry Pi 4 Computer Model B - 2GB RAM -Completely upgraded, re-engineered, Faster, more powerful, Dual displays 4K output"
						price={3950}  
						rating={4}
						image={Product_6}
					/>
					<Product 
						id="6"
						title="Mi 10 (Coral Green, 8GB RAM, 128GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready"
						price={49999}  
						rating={3}
						image={Product_7}
					/>
				</div>

				<div className="home_row">
					<Product 
						id="7"
						title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player-Our most powerful streaming media stick —over 80% more powerful than the best-selling Fire TV Stick."
						price={3950}  
						rating={4}
						image={Product_Big}
					/>
				</div>

				<div className="capture">
					<img src={capture3} alt="capture" />
				</div>

				<div className="Ad">
					<img src={Ad_home} alt="capture" />
				</div>

				<div className="home_row">
					<Product 
						id="8"
						title="Allen Solly Men's Polo"
						price={395}  
						rating={3}
						image={Product_8}
					/>
					<Product 
						id="9"
						title="Van Heusen Men's Solid Regular Fit Polo"
						price={469}  
						rating={3}
						image={Product_9}
					/>
					<Product 
						id="10"
						title="Van Heusen Men's Solid Regular Fit Polo"
						price={999}  
						rating={4}
						image={Product_10}
					/>
					<Product 
						id="11"
						title="Vaamsi Women's Poly Crepe straight Kurta (VPK1583Par_ Yellow_ Large)"
						price={299}  
						rating={2}
						image={Product_11}
					/>
				</div>
			</section>
		</div>
	);
}

export default HomePage;