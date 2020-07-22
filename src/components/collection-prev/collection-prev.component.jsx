import React from 'react';
import './collection-prev.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPrev = ({title, items}) => (
    <div className="collection-prev">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) =>(
                   <CollectionItem key={id} {...otherItemProps}  />
                ))
            }
        </div>
    </div>
)

export default CollectionPrev;