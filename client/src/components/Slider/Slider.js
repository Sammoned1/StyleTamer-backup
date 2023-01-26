import React, {Children, cloneElement, useEffect, useState} from 'react';
import classes from './Slider.module.css'
import Item from "../Item/Item";
import {SliderContext} from "./slider-context";
import {observer} from "mobx-react-lite";


const Slider = observer(({title = null, children}) => {

    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const PAGE_WIDTH = 340
    const maxPagesCount = 5

    const handleLeftArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    // console.log(children.length)

    const handleRightArrowClick = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (children.length - maxPagesCount))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <div className={classes.sliderBlock}>
            {title
                ? <p className={classes.top}>{title}</p>
                : null
            }
            <div className={classes.sliderContainer}>
                {children.length <= 5
                    ? null
                    : <div onClick={handleLeftArrowClick} className={classes.sliderArrowContainer}>
                        <div className={classes.sliderArrow + ' ' + classes.leftArrow}></div>
                    </div>
                }
                <div style={children.length <= 5 ? {marginLeft: 60} : {}} className={classes.window}>
                    <div style={{
                        transform: `translateX(${offset}px)`,
                        transition: 'transform 0.4s'
                    }} className={classes.itemSlider}>
                        {children}
                    </div>
                </div>
                {children.length <= 5
                    ? null
                    : <div onClick={handleRightArrowClick} className={classes.sliderArrowContainer}>
                        <div className={classes.sliderArrow + ' ' + classes.rightArrow}></div>
                    </div>
                }
            </div>
            <div className={classes.sliderRangeBlock}>
                {children.length <= 5
                    ? null
                    : <input type="range" className='sliderRange' value={-offset} step={PAGE_WIDTH} min={0}
                             max={(PAGE_WIDTH * (children.length - maxPagesCount))} onChange={(e) => {
                        setOffset(-e.target.value)
                    }}/>
                }
            </div>
        </div>
    );
});

export default Slider;