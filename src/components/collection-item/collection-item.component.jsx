import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div key={id} className="collection-item">
        <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
 
        <div className="collection-footer">
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <CustomButton inverted> Add to cart</CustomButton>
    </div>
)

export default CollectionItem;