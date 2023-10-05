import ExpenseForm from '../ExpenseForm/Index';
import './Style.css';

const NewExpense = (props) => {

    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={SaveExpenseData} />
        </div>
    );
};

export default NewExpense;