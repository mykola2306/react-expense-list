import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expenses', () => {
  const expense = {
    id: '21',
    description: 'Pepsi',
    note:  '',
    amount: 1750,
    createdAt: 9121
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// This is my edit version
// Andrew solution below this one
test('should edit an expenses', () => {
  const updates = {
    description: 'Train Ticket',
    amount: 35400,
    createdAt: 9821,
    note: 'Tiket to Kiev'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], {...updates, id: expenses[1].id}, expenses[2]]);
});

test('should edit an expenses', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});


// This is my edit version
// Andrew solution below this one
test('should not edit if expense if id not found', () => {
  const updates = {
    description: 'Train Ticket',
    amount: 35400,
    createdAt: 9821,
    note: 'Tiket to Kiev'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '11',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should not edit if expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});