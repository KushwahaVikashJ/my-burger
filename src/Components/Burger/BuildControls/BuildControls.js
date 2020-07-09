import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const buildControls= (props)=>{

    const controls = [
        {label:'Bacon',type:'bacon'},
        {label:'Salad',type:'salad'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
    ]

    return(
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
            <BuildControl label={ctrl.label} key={ctrl.label} add={()=>props.add(ctrl.type)} remove={()=>props.remove(ctrl.type)}/>
            ))}
            <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default buildControls;