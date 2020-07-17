export default interface Currency {
  Country: String;
  Type: String;
  Rate: String;
}

export function isCurency(cur: any): cur is Currency {
  return (
    typeof cur.Country === "string" &&
    typeof cur.Type === "string" &&
    typeof cur.Rate === "string"
  );
}
