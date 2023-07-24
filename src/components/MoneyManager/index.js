import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import {v4 as uuidv4} from 'uuid'
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component{

  state={transactionTitleInp:'',
  transactionsList:[],
  amountInp:'',
  dropdownInp:transactionTypeOptions[0].optionId,
  }

  onChangeTitle=event=>{
    this.setState({transactionTitleInp:event.target.value})
  }

  onChangeAmount=event=>{
    this.setState({amountInp:event.target.value})
  }

  onChangeType=event=>{
    this.setState({dropdownInp:event.target.value})
  }

  onDelete=id=>{
    const {transactionsList}=this.state
    const filteredTransactions=transactionsList.filter(each=>(id!==each.id
    ))
    this.setState({transactionsList:filteredTransactions
    })
  }

  onAddTransaction=event=>{
    event.preventDefault()
    const {transactionTitleInp,amountInp,dropdownInp}=this.state
    const typeInputs=transactionTypeOptions.find(eachTransac=>(eachTransac.optionId===dropdownInp))
    const {displayText}=typeInputs
    const newTransaction={
      id:uuidv4(),
      title:transactionTitleInp,
      amount:parseInt(amountInp),
      type:displayText
    }
    this.setState(prevState=>({
      transactionsList:[...prevState.transactionsList,newTransaction],
      transactionTitleInp:'',
      amountInp:'',
      dropdownInp:transactionTypeOptions[0].optionId
    }))
  }

  getIncomeAmount=()=>{
    const {transactionsList}=this.state
    let incomeAmount=0
    transactionsList.forEach(transaction=>{
      if(transaction.type===transactionTypeOptions[0].displayText){
        incomeAmount+=transaction.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount=()=>{
    const {transactionsList}=this.state
    let expensesAmount=0
    transactionsList.forEach(transaction=>{
      if(transaction.type===transactionTypeOptions[1].displayText){
        expensesAmount-=transaction.amount
      }
      })
      return expensesAmount
  }

  getBalanceAmount=()=>{
    const {transactionsList}=this.state
    let balanceAmount=0
    let incomeAmount=0
    let expensesAmount=0
    transactionsList.forEach(transaction=>{
      if(transaction.type===transactionTypeOptions[0].displayText){
        incomeAmount+=transaction.amount
      }
      else{
        expensesAmount+=transaction.amount
      }
    })
    balanceAmount=incomeAmount-expensesAmount
    return balanceAmount
  }

  
  render(){
    const {transactionTitleInp,amountInp,dropdownInp,transactionsList}=this.state
    const incomeAmount=this.getIncomeAmount()
    const expensesAmount=this.getExpensesAmount()
    const balanceAmount=this.getBalanceAmount()
    return(
      <div className="bg-container">
      <div className="header">
      <h1 className="heading">Hi, Richard</h1>
      <p className="desc">Welcome back to your <span className="highlight">Money Manager</span></p>
      </div>
      <MoneyDetails balanceAmount={balanceAmount} incomeAmount={incomeAmount} expensesAmount={expensesAmount} />
      <div className="footer">
      <div className="transaction-container">
      <form className="form" onSubmit={this.onAddTransaction}>
      <h1 className="transac-heading">Add Transaction</h1>
      <label htmlFor="title" className="title">TITLE</label>
      <input type="text" className="title-input" id="title" onChange={this.onChangeTitle} placeholder="TITLE" value={transactionTitleInp}/>
      <label htmlFor="amount" className="amount">AMOUNT</label>
      <input type="text" className="amount-input" id="amount" onChange={this.onChangeAmount} placeholder="AMOUNT" value={amountInp}/>
      <label htmlFor="type" className="type">TYPE</label>
      <select className="drop-down" id="type" onChange={this.onChangeType} value={dropdownInp}>
      {transactionTypeOptions.map(eachType=>(
        <option value={eachType.optionId} key={eachType.optionId}>{eachType.displayText}</option>
      ))}
      </select>
      <button type="submit" className="add-btn">Add</button>
      </form>
      </div>
      <div className="history-container">
      <h1 className="history-heading">History</h1>
      <ul className="history-details-list">
      <li className="history-details-container">
      <p className="name">Title</p>
      <p className="name">Amount</p>
      <p className="name">Type</p>
      </li>
      {transactionsList.map(eachTransaction=>(
        <TransactionItem key={eachTransaction.id} transactionDetails={eachTransaction} onDelete={this.onDelete}/>
      ))}
      </ul>
      </div>
      </div>
      </div>
    )
  }
}
export default MoneyManager
