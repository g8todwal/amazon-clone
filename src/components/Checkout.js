import React from 'react';
import Purchase from '../images/Purchase.png';
import {useStateValue} from '../context/StateProvider';
import {Link} from 'react-router-dom';
import Empty from '../images/basket_empty.svg';
import  '../css/Checkout.css';
import CheckoutProduct from './checkout/CheckoutProduct';
import Subtotal from './checkout/Subtotal';
import { getBasketTotal } from '../context/Reducer';

const Checkout = () => {

	const [{basket}] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout_left">
				{basket?.length === 0 ? (
					<div className="empty_div">
						<img className="empty_img" src={Empty} alt="svg_empty" />
						<div className="empty_content">
							<span className="empty_content_1">Your Amazon Basket is empty</span> <br />
							<span className="empty_content_2">Shop today's deal</span> <br/>
							<Link to="/"><button className="amazon_btn checkout_btn">Go Shop!!</button></Link>
							<Link to="/login"><button className="checkout_btn_1">Sign Up</button></Link>					
						</div>
					</div>		
				) : (
					<div>
						<div className="basket">
							<div className="basket_top">
								<span className="basket_header">Shopping Basket</span>
								<hr className="line_checkout" />
								{basket.map(item =>(
									<CheckoutProduct
										key={item.id} 
										id = {item.id}
										title = {item.title}
										image = {item.image}
										price = {item.price}
										rating = {item.rating}
									/>
								))}
							</div>
						</div>
						<hr className="line_checkout" />
						<p className="down_total">
							Subtotal ({basket.length} items) : <strong><small style={{fontWeight:'500'}}>&#8377;</small> {getBasketTotal(basket)}</strong>
						</p>
						<div className="empty_content1">
							The price and availability of items at Amazon.in are subject to change. 
							The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br />
							Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
						</div>
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout_right">
					<span className="purchase"><img src={Purchase} alt="p" /></span>
					<Subtotal />
				</div>
			)}	
		</div>
	);
}

export default Checkout;