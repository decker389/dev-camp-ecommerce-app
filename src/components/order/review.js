import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../actions';
import PageTitle from "../pagetitle";

class Review extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    render() {
        return(
            <div className='review'>
                <PageTitle className='review__page-title' title='Order Review' />
            </div>
        )
    }
}

Review = connect(null, action)(Review);

export default Review;