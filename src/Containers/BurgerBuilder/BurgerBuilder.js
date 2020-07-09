import React , {Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    bacon:0.5,
    salad:0.3,
    meat:0.8,
    cheese:0.4
}

class BurgerBuilder extends Component {

    state={
        ingredients:{
            bacon:0,
            cheese:0,
            meat:0,
            salad:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing: false
    }

    continueHandler = ()=>{
        alert('Order Placed Successfully');
    } 

    backdropHandler= ()=>{
        this.setState({
            purchasing:false
        })
    }

    purchaseHandler = ()=>{
        this.setState({
            purchasing:true
        })
    }

    updatePurchaseState = (ingredients)=>{

        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0)

        this.setState({
            purchasable:sum>0
        })
    }

    addIngredients = (type)=>{
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const ingredientPrice = INGREDIENTS_PRICE[type]
        const updatedPrice = oldPrice + ingredientPrice;
        this.setState({
            totalPrice: updatedPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredients = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const ingredientPrice = INGREDIENTS_PRICE[type]
        const updatedPrice = oldPrice - ingredientPrice;
        this.setState({
            totalPrice: updatedPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        return(
            <Aux>
                <Modal show={this.state.purchasing} hide={this.backdropHandler}>
                    <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} cancel={this.backdropHandler} continue={this.continueHandler}/>
                </Modal>
                <Burger ingredient={this.state.ingredients}/>
                <BuildControls 
                add={this.addIngredients} 
                remove={this.removeIngredients}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder