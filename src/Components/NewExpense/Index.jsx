import ExpenseForm from '../ExpenseForm/Index';
import './Style.css';

const NewExpense = (props) => {

    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense();
    };

    return (
        <div className='new-expense'>
            <form>
                <ExpenseForm onSaveExpenseData={SaveExpenseData} />
            </form>
        </div>
    );
};

export default NewExpense;