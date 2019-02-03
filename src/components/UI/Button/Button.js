import React from 'react';
import Button from '@material-ui/core/Button';

import classes from './Button.css';

const button = (props) => (
    <Button variant="contained" {...props}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        disabled={props.disabled}
        onClick={props.clicked}>{props.children}</Button>
);

export default button;