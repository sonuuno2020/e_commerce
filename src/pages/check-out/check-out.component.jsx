import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectItemTotal} from '../../redux/cart/cart.selector';
import {selectCartItems} from '../../redux/cart/cart.selector';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-checkout/stripe-checkout.component';


import './check-out.style.scss';

const CheckoutPage=({cartItems,total})=>(
	<div className="checkout-page">
		<div className='checkout-header'>

			<div className="header-block">Product</div>
			<div className="header-block">Description</div>
			<div className="header-block">Quantity</div>
			<div className="header-block">Price</div>
			<div className="header-block">Remove</div>

			
		</div>
		{
			cartItems.map(cartItem=>
					<CheckoutItem  key={cartItem.id} cartItem={cartItem} />
				)
		}

		<div className="total">

			Total=${total}
			<StripeCheckoutButton price={total}/>
		</div>
	</div>
	)

const mapStateToProps=createStructuredSelector({
	total:selectItemTotal,
	cartItems:selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);