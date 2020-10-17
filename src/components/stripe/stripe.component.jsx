import React from 'react';


import StripeCheckout from'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hd2AIJguq6zPEsn8DZ7AneCtS2f2uLkea8LvOhQQJefgj1MngdbGbLF6Pj11FW0GTJT3IOXcngZd1SPOG82yUm100lDSiUpb7'

    const onToken = token => {
        console.log(token);
        alert('payement succeful');
    }

    return (
        <StripeCheckout 
            label='payer ici'
            name='la carte'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`le total est de ${price}`}
            amount={priceForStripe}
            panelLabel='payer maintenant'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;