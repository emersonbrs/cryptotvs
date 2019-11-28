const normalizeMoney = data =>
  data === undefined
    ? ''
    : data.toLocaleString('us-en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      });

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// });
export default normalizeMoney;
