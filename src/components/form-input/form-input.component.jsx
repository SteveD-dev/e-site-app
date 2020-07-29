import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handleChange, labelExist , ...otherProps}) => (
<div className='group'>
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {
        labelExist ? 
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>

            {labelExist}

        </label>)
        :
        null
    }
</div>
);

export default FormInput;