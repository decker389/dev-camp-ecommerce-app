import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../actions';
import PageTitle from "../pagetitle";
import ReviewForm from './reviewform';

class Review extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        let subtotal = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
        })
        
        return(
            <div className='review'>
                <PageTitle className='review__page-title' title='Order Review' />
                <ReviewForm className='review__form' onSubmit={this.onSubmit} subtotal={subtotal}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

Review = connect(mapStateToProps, action)(Review);

export default Review;