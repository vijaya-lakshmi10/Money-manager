// Write your code here
import './index.css'

const MoneyDetails = props => {
    const {incomeAmount,expensesAmount,balanceAmount}=props
    return(
        <div className="money-details-container">
        <div className="balance-container">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className="img"/>
        <div>
        <p className="balance">Your Balance</p>
        <p className="balance-amt" data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
        </div>
        <div className="income-container">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income" className="img"/>
        <div>
        <p className="income">Your Income</p>
        <p className="income-amt" data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
        </div>
        <div className="expenses-container">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses" className="img"/>
        <div>
        <p className="expenses">Your Expenses</p>
        <p className="expenses-amt" data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
        </div>
        </div>
    )
}
export default MoneyDetails
