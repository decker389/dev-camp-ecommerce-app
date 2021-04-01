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
        return(
            <div className='review'>
                <PageTitle className='review__page-title' title='Order Review' />
                <ReviewForm className='review__form' onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

Review = connect(null, action)(Review);

export default Review;