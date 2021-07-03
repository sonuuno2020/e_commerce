import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {selectHidden} from '../../redux/cart/cart.selector';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.style.scss';

const Header=({currentUser,hidden})=>(

	<div className="header">
		<Link to='/' className="logo-container">
			<Logo />
		</Link>
		<div className="options">
			<Link to='/shop' className="option">
				SHOP
			</Link>
			<Link to='/shop' className="option">
				CONTACT
			</Link>
			{
				currentUser?(
						<div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
					):
				(<Link className="option" to="/sign in"> Sign In</Link>)
			}
			<CartIcon />
		</div>
		{hidden?null:<CartDropdown />}
	</div>



	)

const mapStateToProps=createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectHidden
})

export default connect(mapStateToProps)(Header);