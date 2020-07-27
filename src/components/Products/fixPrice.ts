const fixPrice = (price: string | number) => {
  const priceString = price.toString();
  const priceArray = priceString.split('');

  // assuming it's ALWAYS 2 numbers after comma
  const twoLastDigits = priceArray.splice(priceString.length - 2);
  priceArray.push(',');

  const fixedPriceArray = priceArray.concat(twoLastDigits);

  return fixedPriceArray.join('');
};

export default fixPrice;
