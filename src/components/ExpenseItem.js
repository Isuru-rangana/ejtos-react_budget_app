import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        // You can adjust the increase logic here
        // For now, let's assume it increases by 10
        const expense = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = () => {
    
        
        const expense = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td align="center">
                <button className="btn-plus" onClick={increaseAllocation}>+</button>
            </td>
            <td align="center">
                <button className="btn-minus" onClick={decreaseAllocation}>-</button>
            </td>
            <td align="center">
                <TiDelete size='1.5em' onClick={handleDeleteExpense} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
