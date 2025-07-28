export const jsonStringify = <T>(value: T): string => {
  const replacer = (_: string, value: unknown) => {
    if (typeof value === "bigint") {
      return `__bigint__${value.toString()}`;
    }
    return value;
  };
  return JSON.stringify(value, replacer);
};

export const jsonParse = <T>(value: string): T => {
  const reviver = (_: string, value: unknown) => {
    if (typeof value === "string" && value.startsWith("__bigint__")) {
      return BigInt(value.substring(10));
    }
    return value;
  };
  return JSON.parse(value, reviver) as T;
};
