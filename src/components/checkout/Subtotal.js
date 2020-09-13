import React from 'react';
import  '../../css/Checkout.css';
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../context/Reducer';


const Subtotal = () => {

	const [{basket}] = useStateValue();

	return (
		<div className="subtotal">
			<p>
				Subtotal ({basket.length} items) : 
				<strong>
					<small style={{fontWeight:'500'}}>&#8377;</small> {getBasketTotal(basket)}
				</strong>
			</p>
			<small className="subtotal_gift">
				<input type="checkbox" /> <span>This order contains a gift</span>
			</small>
			<button className="amazon_btn subtotal_btn">Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;