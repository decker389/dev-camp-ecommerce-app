import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignInForm from './signinForm';
import PageTitle from '../pagetitle';


class SignIn extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        this.props.history.push('/account');
        this.props.signIn(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}

SignIn = connect(null, actions)(SignIn)

export default SignIn