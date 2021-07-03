import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken=token=>{
	console.log(token);
	alert('your payment held sucessfully');

}

const StripeCheckoutButton=({price})=>{
	const priceForStripe=price*100;
	const publishableKey='pk_test_51J8n12SDtepLYpxmnRjxSQ0CUaDd4DXQ3KR0pmQ62F685VwDFMtJwGmsA6uhGGXLuCRInjvyXxU2kWHsN8NwKfT800ibu4yBPB';

	return(
		<StripeCheckout 
		label='pay now'
		name='CRWN CLOTES Ltd.'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`your total is $${price}`}
		amout={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		/>
		)

}

export default StripeCheckoutButton;