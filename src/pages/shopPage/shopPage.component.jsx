import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollections} from '../../redux/shop/shop.selector';

import CollectionPrev from '../../components/collection-prev/collection-prev.component';



const ShopPage = ({collections}) => ( 
        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPrev key={id} {...otherCollectionProps} />
                ))
            }
        </div>)


const mapStateToProps = createStructuredSelector ({
collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
