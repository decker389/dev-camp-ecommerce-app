import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                    {
                        this.props.navbarLinks.map((link, index) => {
                            return(
                                <a className={`navbar_link ${link.active ? 'green-text' : ''} `} key={index} onClick={() => console.log('trying to ')}>
                                    {link.title}
                                </a>
                            )
                        })
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headernavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;