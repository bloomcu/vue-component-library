export const appendToSet = (str: string, set : string): string => {
  if (set.trim().length) {
    set += ` ${str}`;
  } else {
    set = `${str}`;
  }
  return set
};
