import React from 'react';
import classes from './AddPhotoInput.css'

const AddPhotoInput = (props) => {
    return (
        <div className='addPhotoInput'>
            <input name="file" type="file" id={props.number} className="input input__file" multiple {...props}/>
            <label htmlFor={props.number} className="input__file-button">
                <span className="input__file-button-text">Выберите фото</span>
            </label>
        </div>
    );
};

export default AddPhotoInput;