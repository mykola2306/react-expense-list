import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  // expect(wrapper.state().error).toBe('Please provide description and amount.')
  // expect(wrapper.state('error')).toBe('Please provide description and amount.')
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const expenseDescirption = 'expense description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value: expenseDescirption }
  });
  expect(wrapper.state('description')).toBe(expenseDescirption)
});

test('should set note on textarea change', () => {
  const expenseNote = 'expense Note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value: expenseNote }
  })
  expect(wrapper.state('note')).toBe(expenseNote);
});

test('should set amount if valid input', () => {
  const amount = '23.12';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: amount }
  })
  expect(wrapper.state('amount')).toBe(amount);
});

test('should not set amount if invalid input', () => {
  const amount = '23.122';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: amount }
  })
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt,
  })
  // onSubmitSpy('mykola')
  // expect(onSubmitSpy).toHaveBeenCalled();
  // expect(onSubmitSpy).toHaveBeenCalledWith('mykola');
});

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(wrapper.state('calenderFocused')).toBe(true);
});