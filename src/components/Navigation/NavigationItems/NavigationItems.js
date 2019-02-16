import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
        <NavigationItem link="/users">Users</NavigationItem>
        <NavigationItem link="/demo">Demo</NavigationItem>
        <NavigationItem link="/demoreduxform">DemoReduxForm</NavigationItem>
    </ul>
);

export default navigationItems;