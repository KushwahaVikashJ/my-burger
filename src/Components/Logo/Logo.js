import React from 'react';
import classes from './Logo.css';
import burger from '../../Assets/Image/burger-logo.png';


const logo = (props)=>{
    return(
        <div className={classes.Logo} style={{height:props.height}}>
            <img src={burger} alt="MyBurger"/>
        </div>

    )
}

export default logo;
