import React from 'react';

import './menu-item.styles.scss';


const MenuItem = ({tit , imgUrl, theSize}) => ( 
    <div className={ `${theSize} menu-item`}>
        <div
        className="background-imag"
        style={{
            backgroundImage: `url(${imgUrl})`
            }} /> 
        <div className="content">
            <h1 className="title">{tit.toUpperCase()}</h1>
            <span className="subtitle">voila voila voila</span>
        </div>
    </div>
);

export default MenuItem;