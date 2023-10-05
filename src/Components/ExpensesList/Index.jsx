/* eslint-disable react/prop-types */
import { useState } from "react";
import ExpenseItem from "../ExpenseItem/Index";
import ExpensesFilter from "../ExpensesFilter/Index";

const ExpensesList = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div className="expensesList">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            )
            )
            }

        </div>
    );
};

export default ExpensesList;
