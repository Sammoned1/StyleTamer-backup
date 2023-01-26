import React from 'react';
import classes from './AddPhotoInput.css'

const AddPhotoInput = (props) => {
    return (
        <div className='addPhotoInput'>
            <input name="file" type="file" id="input__file" className="input input__file" multiple {...props}/>
            <label htmlFor="input__file" className="input__file-button">
                <span className="input__file-button-text">Выберите фото</span>
            </label>
        </div>
    );
};

export default AddPhotoInput;