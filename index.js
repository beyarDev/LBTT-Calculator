function calculateLBTT(housePrice) {
  let tax = 0;
  const threshold = 145_000;
  const band1 = 250_000;
  const band1TaxPercentage = 2;
  const band2 = 325_000;
  const band2TaxPercentage = 5;
  const band3 = 750_000;
  const band3TaxPercentage = 10;
  const finalBand = 12;
  const band1FullTax = ((band1 - threshold) * band1TaxPercentage) / 100; // 2100
  const band2FullTax = ((band2 - band1) * band2TaxPercentage) / 100; // 3750
  const band3FullTax = ((band3 - band2) * band3TaxPercentage) / 100; // 42500
  if (housePrice <= threshold) {
    return tax;
  } else if (housePrice <= band1) {
    const taxableAmount = housePrice - threshold;
    tax = (taxableAmount * band1TaxPercentage) / 100;
  } else if (housePrice <= band2) {
    const taxableAmount = housePrice - band1;
    tax = (taxableAmount * band2TaxPercentage) / 100;
    tax += band1FullTax;
  } else if (housePrice <= band3) {
    const taxableAmount = housePrice - band2;
    tax = (taxableAmount * band3TaxPercentage) / 100;
    tax += band1FullTax + band2FullTax;
  } else if (housePrice > band3) {
    const taxableAmount = housePrice - band3;
    tax = (taxableAmount * finalBand) / 100;
    tax += band1FullTax + band2FullTax + band3FullTax;
  }
  return tax;
}

module.exports = { calculateLBTT };
