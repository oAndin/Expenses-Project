import ExpenseDate from '../ExpenseDate/Index';
import './ExpenseItem.css';
import '../ExpensesList/ExpensesList.css'
import Card from  '../Card/Index'
const ExpenseItem = (props) => {

    return (
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
    );
};



export default ExpenseItem;