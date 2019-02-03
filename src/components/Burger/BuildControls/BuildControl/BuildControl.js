import React from 'react';

import classes from './BuildControl.css';
import Button from '../../../UI/Button/Button';


const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <Button  color="secondary"
            className={classes.Less} 
            clicked={props.removed} 
            disabled={props.disabled}>Less</Button>
        <Button  color="primary"
            className={classes.More} 
            clicked={props.added}>More</Button>
    </div>
);

export default buildControl;