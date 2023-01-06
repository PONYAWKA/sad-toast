export const handleFindInclude = (str, parameter) => {
  return str
    .split(" ")
    .filter((e) => parameter.includes(e))
    .join("");
};
