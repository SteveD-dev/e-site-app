import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollectionsForPrev} from '../../redux/shop/shop.selector';
import  CollectionPrev from '../../components/collection-prev/collection-prev.component';


import './collections-overview.styles.scss';


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
 collections: selectCollectionsForPrev
}  )

export default connect(mapToStateToPros)(CollectionOverview);