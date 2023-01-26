import React from 'react';
import classes from './ItemDescription.module.css'
import ItemDescriptionTitle from "../ItemDescriptionTitle/ItemDescriptionTitle";

const ItemDescription = () => {
    return (
        <div className={classes.description}>
            <ItemDescriptionTitle title={'Описание товара'}/>
            <div className={classes.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet animi, dolor enim expedita
                inventore magnam molestias nam necessitatibus non, officiis placeat, quasi quibusdam ratione repellat
                sequi temporibus? Accusantium aspernatur assumenda deserunt doloremque, esse nihil quo similique
                suscipit! A adipisci amet asperiores beatae, commodi dignissimos earum est laborum libero nemo, nesciunt
                pariatur porro reiciendis reprehenderit repudiandae sequi soluta ut veritatis.
            </div>
        </div>
    );
};

export default ItemDescription;