import React from 'react';
import { connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';

 import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const { title, items} = collection;
    console.log(collection);
    return (<div className='collection-page'>
        <h2 className='title'>{title} </h2>
        <div className='items'>
            { items.map(el => <CollectionItem className='collection-item' key={el.id} item={el} />)}
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect (mapStateToProps)(CollectionPage);