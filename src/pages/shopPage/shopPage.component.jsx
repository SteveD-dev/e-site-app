import React from 'react';
import {connect} from 'react-redux';
import { Route} from 'react-router-dom';
import { createStructuredSelector} from 'reselect';
import { selectCollections} from '../../redux/shop/shop.selector';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';



const ShopPage = ({match}) => { 
    console.log(match);
        return (<div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}  />
        </div>)}


// const mapStateToProps = createStructuredSelector ({
// collections: selectCollections
// })

export default ShopPage;
