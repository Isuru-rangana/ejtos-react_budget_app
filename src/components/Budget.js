import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Destructuring context values
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    // Function to handle budget change
    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        // Alert if the new budget is less than total expenses
        if (val < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending");
        } 
        // Alert if the new budget exceeds 20000
        else if (val > 20000) {
            alert("The budget can't exceed 20000!");
        } 
        // Dispatch new budget if it passes validation
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            {/* Input for changing the budget */}
            <input 
                type="number" 
                step="10" 
                value={budget} 
                // onChange event to trigger the changeBudget function
                onChange={(event) => changeBudget(event.target.value)}
            />
        </div>
    );
};

export default Budget;
