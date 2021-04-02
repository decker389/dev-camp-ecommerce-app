import React, { Component } from 'react';

import { UnderlinedTitle, InfoTitle } from './infohelp';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' />
                <InfoTitle className='order-summary__subtotal' title='4 stickers' value='$asda' />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value='0.00' />
                <InfoTitle className='order-summary__Total' title='Total' value='$8.00' />
            </div>
        )
    }
}

export default OrderSummary;