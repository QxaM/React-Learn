const Formatter = () => {
  const format = (number, currency) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    }).format(number);
  };

  return {
    format,
  };
};

export default Formatter();
