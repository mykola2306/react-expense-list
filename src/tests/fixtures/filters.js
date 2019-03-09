import moment from 'moment';

const filters = {
  text: '',
  sortByAmount: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'bill',
  sortByAmount: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

export { filters, altFilters };