import React from 'react';
import classes from "./FindMoreItems.module.css";
import {useNavigate} from "react-router-dom";
import {CATALOGUE_ROUTE} from "../../../utils/consts";

const FindMoreItems = ({title}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className={classes.item} onClick={() => navigate(CATALOGUE_ROUTE)}>
                <div className={classes.findMoreItemsText}>
                    {title}
                </div>
            </div>
        </div>
    );
};

export default FindMoreItems;