import React from 'react';
import Aux from '../../../../hoc/Auxilliry';
import Button from '../../../Layout/UI/Button/Button';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
                </li>
            )
        });
    console.log('ingredientSummary:: ', ingredientSummary);

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>

            <Button
                btnType="Danger"
                clicked={props.purchaseCancelled}>CANCLE
             </Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}>CONTINUE
            </Button>
        </Aux>
    )
}

export default orderSummary;