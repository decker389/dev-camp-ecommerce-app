import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__email' type='email' title='Email' placeholder='Email' name='email' component={FormInput} />

                <Field className='account-information-form__password' type='password' title='Password' placeholder='Password' name='password' component={FormInput} />
                <div className="account-information-form__line"></div>

                <Field className='account-information-form__login' onClick={() => history.push('/account')} type='submit' title='Login' name='login' component={FormButton} />

            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm