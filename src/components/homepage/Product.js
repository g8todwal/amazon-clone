import React from 'react'
import '../../css/Product.css';
import { useStateValue } from '../../context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
			<div className="product_info">
				<p className="product_title">{title}</p>
				<p className="product_price">
					<small>&#8377;</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{
						Array(rating)
						.fill()
						.map((_) =>(
							<span className="star">&#9733;</span>
						))
					}
				</div>
			</div>
			<img src={image} alt="product-1" />
			<button 
				className="amazon_btn"
				onClick={addToBasket}
			>
				Add to Cart
			</button>
		</div>
    )
}

export default Product;