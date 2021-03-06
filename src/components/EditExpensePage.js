import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/')
  };
  removeExpenseClick = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/')
  };

  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.removeExpenseClick}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: ({id}) => dispatch(removeExpense({id}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);




const EditExpensePage_OLD = (props) => {
  return (
  <div>
    <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/')
      }}
    />
    <button onClick={() => { 
      console.log('clicked')    
      props.dispatch(removeExpense({id: props.expense.id}));
      props.history.push('/')
    }}>Remove</button>
  </div>
)}