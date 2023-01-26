import React from 'react';
import classes from './AddedPhoto.module.css'

const AddedPhoto = ({photo, array, setArray}) => {
    const imageSrc = URL.createObjectURL(photo)

    const deletePhoto = (name) => {
        setArray(array.filter(i => i.name !== name))
    }

    return (
        <div className={classes.photoBlock}>
            <img className={classes.photo} src={imageSrc} alt={photo.name}/>
            <div className={classes.crossBlock} onClick={()=>{
                deletePhoto(photo.name)
            }}>
                <div className={classes.cross}></div>
            </div>
        </div>
    );
};

export default AddedPhoto;