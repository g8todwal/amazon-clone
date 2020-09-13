import React from 'react';
import '../../css/Checkout.css';
import { useStateValue } from '../../context/StateProvider';

const CheckoutProduct = ({id, title, rating, price, image}) => {

	const [{basket},dispatch] = useStateValue();

	const removeItem= () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	}

	return (
		<div className="check">
			<div className="checkoutProduct">
				<img className="checkoutProduct_image" src={image} alt="fff" />
				<div className="checkoutProduct_info" >
					<p className="checkoutProduct_title">{title}</p>
					<div className="checkoutProduct_rating">
						{
							Array(rating)
							.fill()
							.map((_) =>(
								<span className="star1">&#9733;</span>
							))
						}
					</div>
					<button 
						className="amazon_btn" 
						onClick={removeItem}
					>
						Delete
					</button>
				</div>
				<p className="checkoutProduct_prize">
					<strong>&#8377;</strong>
					<strong>{price}</strong>
				</p>
			</div>
			
		</div>
	);
} 

export default CheckoutProduct;