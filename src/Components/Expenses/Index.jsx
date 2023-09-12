import ExpenseItem from "../ExpenseItem";
import './Style.css';

const Expenses = (props) => {
    return (
        <>
            <ExpenseItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            />
        </>
    );
};

export default Expenses;