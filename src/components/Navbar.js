import React from 'react';
import '../css/Navbar.css';
import {NavLink} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Icon } from 'react-icons-kit';
import {ic_shopping_cart} from 'react-icons-kit/md/ic_shopping_cart';
import Flag from '../images/flag-icon.png';
import {useStateValue} from '../context/StateProvider';
import {auth} from '../Firebase.js';

const Navbar = () => {

	const [{basket, user}] = useStateValue();
	const login = () => {
		if(user) {
			auth.signOut();
		}
	}

	return (
		<NavLink to="/">
			<nav className="navba">
				<img 
					className="navbar-img"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="amazon-logo"
				/>

				<div className="nav_search">
					<input type="text" className="navbar__input"/>
					<button className="search">
						<SearchIcon className="navbar-search-icon" />
					</button>
				</div>
				<div className="nav__links">
					<img 
						className="flag"
						src={Flag}
						alt="flag"
					/>
				</div>		
				<div className="nav__links">
					<NavLink to={!user && "/login"} className="nav__link">
						<div onClick={login} className="nav-link-options">
							<span className="nav-link-options-1">Hello {user?.email}</span>
							<span className="nav-link-options-2">{user ? 'Sign Out' : 'Sign In'}</span>
						</div>
					</NavLink>

					<NavLink to="/" className="nav__link" >
						<div className="nav-link-options">
							<span className="nav-link-options-1">Returns</span>
							<span className="nav-link-options-2">& Orders</span>
						</div>
					</NavLink>

					<NavLink to="/" className="nav__link">
						<div className="nav-link-options">
							<span className="nav-link-options-1">Your</span>
							<span className="nav-link-options-2">Prime</span>
						</div>
					</NavLink>

					<NavLink to="/checkout" className="nav__link__search">
						<div className="nav-link-basket">
							<span className="basket-count nav-link-options-2">{basket?.length}</span>						
							<span className="cart"><Icon 
								icon={ic_shopping_cart} size={30} 
							/>Cart</span>
						</div>
					</NavLink>
				</div>
			</nav>
		</NavLink>
	);
}

export default Navbar;