import React, {useEffect} from 'react';
import classes from './AddedPhoto.module.css'

const AddedPhoto = ({photo, array, setArray, checked, setChecked}) => {
    const imageSrc = URL.createObjectURL(photo)

    const deletePhoto = (name) => {
        setArray(array.filter(i => i.name !== name))
    }

    return (
        <div className={classes.photoBlock}>
            <img className={classes.photo} src={imageSrc} alt={photo.name}/>
            <div className={classes.crossBlock + " " + classes.btnBlock} onClick={() => {
                deletePhoto(photo.name)
            }}>
                <div className={classes.cross}></div>
            </div>
            <div
                className={checked === photo ?
                    classes.arrowBlock + " " + classes.btnBlock + " " + classes.active :
                    classes.arrowBlock + " " + classes.btnBlock}
                onClick={() => {
                    setChecked(photo)
                }}>
                <div className={classes.arrow}></div>
            </div>
        </div>
    );
};

export default AddedPhoto;