import * as CURRENCY from '../constants/curency';

const currencyFilter = (arr) => {
  const filteredArr = arr.filter(({ currencyCodeA, currencyCodeB }) => {
    return (
      (currencyCodeA === CURRENCY.USD.code &&
        currencyCodeB === CURRENCY.UAH.code) ||
      (currencyCodeA === CURRENCY.EUR.code &&
        currencyCodeB === CURRENCY.UAH.code) ||
      (currencyCodeA === CURRENCY.RUB.code &&
        currencyCodeB === CURRENCY.UAH.code)
    );
  });
  console.log(filteredArr);
  return filteredArr;
};

export default currencyFilter;
