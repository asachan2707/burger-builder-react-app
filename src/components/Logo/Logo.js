import React from 'react';
import classes from './Logo.css';
import burgerlogo from '../../assets/images/burger-logo.png';

const logo = props => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt='MyBurgerLogo' />
    </div>
);

export default logo;
