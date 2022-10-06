import React from 'react';

import classes from '../../styles/general/sections.module.css';

const DisplayItem = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <div className={classes['display-number']}>{`${props.number} ₽`}</div>
        </div>
    );
};

export default DisplayItem;