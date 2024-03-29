import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';


const MenuItem = ({title , imageUrl, size, history, linkURL}) => ( 
    <div className={ `${size} menu-item`} onClick={() => history.push(`${linkURL}`)}>
        <div
        className="background-imag"
        style={{
            backgroundImage: `url(${imageUrl})`
            }} /> 
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">subtitle will go here</span>
        </div>
    </div>
);

export default withRouter(MenuItem);