import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configure';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Gas bill', amount: 421, createdAt: 300 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 150, createdAt: 120 }));
store.dispatch(addExpense({ description: 'Rent', amount: 3300, createdAt: 50 }));
// store.dispatch(setTextFilter('Bill'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// }, 2000);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())  
});

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));
// console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  jsx, 
  document.getElementById('app')
);