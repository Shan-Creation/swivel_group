export default interface error {
  type: Number;
  eror: Error;
}

export function isErr(err: any): err is error {
  return typeof err.type === "number" && typeof err.eror === "object";
}

export function isErrArr(err: any[]): err is error[] {
  if (err.length > 0) {
    return isErr(err[0]);
  } else {
    return false;
  }
}
