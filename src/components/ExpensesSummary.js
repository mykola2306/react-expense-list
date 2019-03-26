import React from 'react';
import  { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const totalFormated = numeral(expensesTotal/100).format('$0,0.00');

  return (
    <div>
      <div>Viewing {expensesCount} expense{expensesCount > 1 && 's'} totalling {totalFormated}</div>      
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);