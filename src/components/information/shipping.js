import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignInForm from '../auth/signinForm';
import PageTitle from '../pagetitle';

class Shipping extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

onSubmit = (fields) => {
    console.log(fields);
}

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Shipping Address' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

Shipping = connect(null, actions)(Shipping)

export default Shipping;