import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signIn'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        //fetch shop products action creator
        //fetch the navbar links
        //set the navbar links
        //filter products with navbar links
    }
    render() {
        return (
            <div className='shop'>
                shop...
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;