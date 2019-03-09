import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate  = jest.fn();
  sortByAmount  = jest.fn();
  setStartDate  = jest.fn();
  setEndDate  = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();  
});

test('should render ExpenseListFilters with alt correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'gass bill' }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith('gass bill')
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  })
  expect(sortByDate).toHaveBeenLastCalledWith()
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  })
  expect(sortByAmount).toHaveBeenCalled()
});

test('should handle date changes', () => {
  const startDate = moment(0).add(1, 'days')
  const endDate = moment(0).add(3, 'days')

  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('startDate');
  expect(wrapper.state('calenderFocused')).toBe('startDate');
});