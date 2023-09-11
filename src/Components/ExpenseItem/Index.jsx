import ExpenseDate from '../ExpenseDate/Index';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    return (
            <div className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item_price">${props.amount}</div>
                </div>
            </div>
    );
};



export default ExpenseItem;