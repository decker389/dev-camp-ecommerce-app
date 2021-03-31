import React, { Component } from 'react';

import CartProduct from './cartproduct';

function CartButton({ className, icon }) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon} />
        </div>
    )
}

function CartContent({ className, products }) {
    let count = products.length
    let displayedProducts = products.map(product => <CartProduct key={product} />)
    return (
        <div className={`${className} cart-content`} >
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {displayedProducts}
            </div>
            <CartFooter className='cart-content__footer' products={products} />
        </div>
    )
}

function CartFooter({ className, products }) {
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`} >
            <a className='cart-footer__check-out' >
                Checkout
            </a>
            <div className='cart-footer__subtotal' >
                Subtotal
            </div>
            <div className='cart-footer__price' >
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times' />
                <CartContent className='shop-cart__content' products={[4, 123, 2, 23, 500, 430, 23212, 443, 2313, 412412, 153, 8888, 898, 899, 999, 909]} />
            </div>
        )
    }
}

export default ShopCart;