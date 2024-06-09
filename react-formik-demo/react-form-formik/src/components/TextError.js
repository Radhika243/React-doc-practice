import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function TextError(props) {
    

    return (
        <div className='btn btn-warning'>
            {props.children}
        </div>
    )
}

export default TextError;
