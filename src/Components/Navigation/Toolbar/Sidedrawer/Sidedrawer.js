import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.css'; 
import Aux from '../../../../hoc/Aux';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const sideDrawer = (props)=>{
    let sideDrawerClass = [classes.SideDrawer,classes.close];
    if(props.open){
        sideDrawerClass = [classes.SideDrawer,classes.open];
    } 
    return(
        
        <Aux>
            <Backdrop show={props.open} hide={props.close}/>
            <div className={sideDrawerClass.join(' ')}>
                <Logo height="11%"/>
                <hr/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    )
} 

export default sideDrawer;