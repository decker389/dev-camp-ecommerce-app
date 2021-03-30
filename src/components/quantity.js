import React, { Component } from 'react';

class Quantity extends Component {
    render() {
        const { className, Quantity } = this.props
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {Quantity}
                </div>
                <div className='quantity__plus'>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='quantity__minus'>
                    <i className='fas fa-minus'></i>
                </div>
            </div>
        )
    }
}

export default Quantity;