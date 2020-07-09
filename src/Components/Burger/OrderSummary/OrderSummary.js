import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props)=>{
    
    const ingredients = Object.keys(props.ingredients)
    .map(igKey=>{
    return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span>:{props.ingredients[igKey]}</li>
    })

    return(
        <Aux>
            <h3>A delicious burger with the following ingredients:</h3>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
        </Aux>
    ) 
}

export default orderSummary;