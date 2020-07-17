export const trimSpace = (obj: any) => {
  if (obj === null && !Array.isArray(obj) && typeof obj !== "object")
    return obj;

  return Object.keys(obj).reduce(
    function (acc: any, key: any) {
      acc[key.trim()] =
        typeof obj[key] === "string"
          ? obj[key].trim()
          : typeof obj[key] === "object"
          ? trimSpace(obj[key])
          : obj[key];
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
};
