import React from 'react';
import classes from './AlternativeButton.module.css'
const AlternativeButton = ({children, ...props})  => {
    return (
        <button {...props} className={classes.aBtn}>
            {children}
        </button>
    );
};

export default AlternativeButton;