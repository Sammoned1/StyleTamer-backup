import React from 'react';
import classes from './DeleteModal.module.css'
import MyButton from "../../../UI/Buttons/MyButton/MyButton";

const DeleteModal = ({ deleteHandler, modalHandler}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalContent}>
                <div className={classes.delText}>Вы действительно хотите удалить этот товар?</div>
                <div className={classes.delText}>Это действие нельзя будет отменить</div>
                <div className={classes.delBtnsContainer}>
                    <MyButton title={'Да'} className={classes.delBtn} onClick={()=>{
                        deleteHandler()
                    }}/>
                    <MyButton title={'Нет'} className={classes.delBtn} onClick={()=>{
                        modalHandler()
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;