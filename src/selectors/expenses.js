import moment from "moment";

// Get visible expense

const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    // if startDate is 'undefined', it is not == to 'number', which is what we want
    // because we are not filterting by date, else we check the date 
    // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

export default getVisibleExpense;