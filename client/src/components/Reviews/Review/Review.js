import React from 'react';
import classes from './Review.module.css'
import Star from "../../UI/Star/Star";

const Review = ({author, text}) => {
    return (
        <div className={classes.review}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <div className={classes.author}>
                    {author}
                </div>
                <div className={classes.stars}>
                    <Star golden={true}/>
                    <Star golden={true}/>
                    <Star golden={true}/>
                    <Star/>
                    <Star/>
                </div>
            </div>
            {text}
        </div>
    );
};

export default Review;