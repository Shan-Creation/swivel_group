export default interface salary {
  amount: Number;
  tax: Number;
  taxAmount: number;
  netPay: Number;
}

export function isSalary(sal: any): sal is salary {
  return (
    typeof sal.amount === "number" &&
    typeof sal.tax === "number" &&
    typeof sal.taxAmount === "number" &&
    typeof sal.netPay === "number"
  );
}
