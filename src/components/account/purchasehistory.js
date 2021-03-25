import React, { Component } from 'react';

import PageTitle from '../pagetitle';
import PurchaseDetail from './purchasedetail';
import Purchases from './purchases';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History' />
                <Purchases className='purchase-history__purchases' />
                <PurchaseDetail className='purchase-history__purchase-detail' />
                <div className='purchase-history__bottom-border'></div>
            </div>
        )
    }
}

export default PurchaseHistory;