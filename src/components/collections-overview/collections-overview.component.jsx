import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollections} from '../../redux/shop/shop.selector';
import  CollectionPrev from '../../components/collection-prev/collection-prev.component';


import './collections.styles.scss';


const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPrev key={id} {...otherCollectionProps} />
                ))
        }
    </div>
);


const mapToStateToPros = createStructuredSelector({
 collections: selectCollections
}  )

export default connect(mapToStateToPros)(CollectionOverview);