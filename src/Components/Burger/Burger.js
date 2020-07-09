import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css'; 

const burger = (props)=>{


    let transformIngredients = Object.keys(props.ingredient)
    .map(igkey=>{
        return [...Array(props.ingredient[igkey])]
        .map((_,i)=>{
            return <BurgerIngredients type={igkey} key={igkey+i}/>
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]); 

    if(transformIngredients.length === 0){
        transformIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
               {transformIngredients} 
            <BurgerIngredients type="bread-bottom"/>
        </div>
    ) 
}

export default burger;