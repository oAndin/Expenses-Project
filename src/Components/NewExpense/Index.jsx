import ExpenseForm from '../ExpenseForm/Index';
import './Style.css';

const NewExpense = () => {
    return(
        <div className='new-expense'>
            <form>
                <ExpenseForm/>
            </form>       
        </div>
    );
};

export default NewExpense;