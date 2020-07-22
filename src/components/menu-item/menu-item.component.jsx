import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';


const MenuItem = ({tit , imgUrl, theSize, history, linkUr, match}) => ( 
    <div className={ `${theSize} menu-item`} onClick={() => history.push(`${linkUr}`)}>
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

export default withRouter(MenuItem);