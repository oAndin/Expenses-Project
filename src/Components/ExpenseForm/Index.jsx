import { useState } from 'react';
import './Style.css';

const ExpenseForm = () => {

    const inputChangeHandler = (identifier, value) => {
        const [enteredTitle, setEnteredTitle] = useState('');
        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value);
        }

        const [enteredAmount, setEnteredAmount] = useState('');
        const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value);
        }

        const [enteredDate, setEnteredDate] = useState('');
        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);
        }

        if (identifier === 'title') {
            setEnteredTitle(value);
        }
        else if (identifier === 'date') {
            setEnteredDate(value);
        }
        else {
            setEnteredAmount(value);
        }
    }


    return (
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={(event) => { inputChangeHandler('title', event.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={(event) => { inputChangeHandler('date', event.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2023-12-31' onChange={(event) => { inputChangeHandler('amount', event.target.value) }} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
};

// ----------------------
// const [userInput, setuserinput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
// });
// const titleChangeHandler = (event) => {
//     // setuserinput({
//     //     ...userInput,
//     //     enteredTitle: event.target.value,
//     // })
//     setuserinput((prevState) => {
//         return {
//             ...prevState, enteredTitle: event.target.value
//         };
//     });
// };
// const amountChangeHandler = (event) => {
//     setuserinput((prevState) => {
//         return {
//             ...prevState,
//             enteredAmount: event.target.value,
//         };
//     });
// };
// const dateChangeHandler = (event) => {
//     setuserinput((prevState) => {
//         return {
//             ...prevState,
//             enteredDate: event.target.value,
//         }
//     })
// }
// return (
//     <form >
//         <div className="new-expense__controls">
//             <div className="new-expense__control">
//                 <label>Title</label>
//                 <input type='text' onChange={titleChangeHandler} />
//             </div>
//             <div className="new-expense__control">
//                 <label>Amount</label>
//                 <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
//             </div>
//             <div className="new-expense__control">
//                 <label>Date</label>
//                 <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateChangeHandler} />
//             </div>
//         </div>
//         <div className="new-expense__actions">
//             <button type='submit'>Add expense</button>
//         </div>
//     </form>
// );


export default ExpenseForm;