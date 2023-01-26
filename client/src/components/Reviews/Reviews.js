import React from 'react';
import Review from "./Review/Review";
import classes from './Reviews.module.css'
import ItemDescriptionTitle from "../Item/ItemDescriptionTitle/ItemDescriptionTitle";
import Star from "../UI/Star/Star";
import MyButton from "../UI/Buttons/MyButton/MyButton";

const Reviews = () => {
    const firstReview = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'A error iste itaque modi placeat saepe. Ab aliquid maxime nihil quaerat! ' +
        'Accusamus aperiam dicta fugit illum molestiae officia officiis provident vitae ' +
        'voluptas voluptates? Aut consequuntur quibusdam soluta suscipit tenetur ut vel.'

    const secondReview = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Consequuntur culpa doloremque dolores eaque eveniet facilis impedit odit vitae. Labore, officia!'

    return (
        <div className={classes.reviews}>
            <ItemDescriptionTitle title={'Отзывы'}/>
            <div style={{display: 'flex'}}>
                <div className={classes.generalRatingText}>Общий рейтинг</div>
                <div className={classes.stars}>
                    <Star black={true}/>
                    <Star black={true}/>
                    <Star black={true}/>
                    <Star/>
                    <Star/>
                </div>
            </div>
            <MyButton className={classes.addReviewBtn}
                      title={'Оставить отзыв'}/>
            <div style={{display: 'flex'}}>
                <Review author={'UserName1'} text={firstReview}/>
                <Review author={'UserName2'} text={secondReview}/>
            </div>

        </div>
    );
};

export default Reviews;