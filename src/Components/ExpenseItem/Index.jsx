import ExpenseDate from '../ExpenseDate/Index';
import './ExpenseItem.css';
import '../ExpensesList/ExpensesList.css'
import Card from  '../Card/Index'
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    return (
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change title!</button>
            </Card>
    );
};



export default ExpenseItem;