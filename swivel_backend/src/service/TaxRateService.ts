import err from "../models/eror";

export const getTax = (type: String, salary: Number): Number | err => {
  let taxRate;
  switch (type) {
    case "LKR":
      taxRate = Srilanka(salary);
      return taxRate;
      break;
    case "INR":
      taxRate = India(salary);
      return taxRate;
      break;
    case "PKR":
      taxRate = Pakistan(salary);
      return taxRate;
      break;
    case "BDT":
      taxRate = Bangaladesh(salary);
      return taxRate;
      break;

    default:
      const err: err = {
        type: 404,
        eror: {
          name: "Unknown country",
          message: "Country not found in currency",
        },
      };
      return err;
  }
};

export const Srilanka = (salary: Number) => {
  let tax = 0;
  if (salary < 100000) {
    tax = 0;
  } else if (salary >= 100000 && salary < 250000) {
    tax = 5 / 100;
  } else if (salary >= 250000) {
    tax = 10 / 100;
  }
  return tax;
};
export const India = (salary: Number) => {
  let tax = 0;
  if (salary < 100000) {
    tax = 0;
  } else if (salary >= 100000 && salary < 300000) {
    tax = 4 / 100;
  } else if (salary >= 300000) {
    tax = 7 / 100;
  }
  return tax;
};
export const Pakistan = (salary: Number) => {
  let tax = 0;
  if (salary < 500000) {
    tax = 0.5 / 100;
  } else {
    tax = 4 / 100;
  }
  return tax;
};

export const Bangaladesh = (salary: Number) => {
  let tax = 0;

  return tax;
};
