const fatNumber = (event) => (event < 2) ? 1 : event * fatNumber(event-1);

console.log(fatNumber(102))
