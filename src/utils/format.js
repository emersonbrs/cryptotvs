const normalizeMoney = data =>
  data === undefined
    ? console.tron.log('oi')
    : data.toLocaleString({
        style: 'currency',
        minimumFractionDigits: 2,
      });

export default normalizeMoney;
