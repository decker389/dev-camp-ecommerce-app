import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './infohelp';


class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        let subtotal = 0;
        let tax = 0.16;
        let shipping = 0.0;
        let shippingTax = tax + shipping;
        let stickersAmount = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            stickersAmount += cartProduct.quantity;
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-summary__subtotal' title={`${stickersAmount} stickers`} value={`${subtotal}`} />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${shippingTax}`} />
                <InfoTitle className='order-summary__Total info-title-green' title='Total' value={`$${subtotal + shippingTax}`} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;