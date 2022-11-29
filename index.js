function taxDue(tax) {
    return `£${tax} tax due`;
  }
  function calculateLBTT(price) {
    let tax = 0;
    if (price <= 145000) {
      return taxDue(0);
    } else if (price <= 250000) {
      const taxableAmount = price - 145000;
      tax = (taxableAmount * 2) / 100;
      return taxDue(tax);
    } else if (price <= 325000) {
      const taxableAmount = price - 250000;
      tax = (taxableAmount * 5) / 100;
      //tax += ((250000-145000) * 2)/100 or
      tax += 2100;
      return taxDue(tax);
    } else if (price <= 750000) {
      const taxableAmount = price - 325000;
      tax = (taxableAmount * 10) / 100;
      tax += 2100;
      //tax += ((325000-250000) *5)/100 or
      tax += 3750;
      return taxDue(tax);
    }
    const taxableAmount = price - 750000;
    tax = (taxableAmount * 12) / 100;
    tax += 2100 + 3750;
    //tax += ((750000-325000) *10)/100 or
    tax += 42500;
    return taxDue(tax);
  }
  


module.exports = {calculateLBTT}