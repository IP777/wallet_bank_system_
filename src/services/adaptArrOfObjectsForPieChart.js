import colorGenerator from './colorGenerator';

const adaptArrOfObjectsForPieChart = (transactions) =>
  transactions.map((transaction) => ({
    title: transaction.category,
    value: transaction.amount,
    color: colorGenerator(),
    ...transaction.date,
  }));

export default adaptArrOfObjectsForPieChart;
// {
//     comments: 'за август',
//     _id: '5f4d37453b62e40d0f7b0e62',
//     date: '31.08.2020',
//     type: '+',
//     category: 'Зарплата',
//     amount: 2000,
//     balanceAfter: 2000,
//     typeBalanceAfter: '+',
//     updatedAt: '2020-08-31T17:45:41.412Z',
//     createdAt: '2020-08-31T17:45:41.412Z'
//   },
//   {
//     title: 'one',
//     value: 10,
//     color: '#000',
//     createdAt: {
//       mounth: 1,
//       year: 2020,
//     },
//   },
