// Write your code here
import './index.css'

const TransactionItem = props => {
    const {transactionDetails,onDelete}=props
    const {id,title,amount,type}=transactionDetails

    const onClickDelete = () => {
        onDelete(id)
    }

    return(
        <li className="transactions-list">
        <p className="desc">{title}</p>
        <p className="desc">Rs {amount}</p>
        <p className="desc">{type}</p>
        <button type="button" onClick={onClickDelete} className="btn" data-testid="delete">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" className="delete-image" alt="delete"/>
        </button>
        </li>
    )
}
export default TransactionItem
