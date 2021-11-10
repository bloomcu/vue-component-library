export const appendToSet = (str: string, set: string): string => {
  if (set.trim().length) {
    set += ` ${str}`;
  } else {
    set = `${str}`;
  }
  return set
};

export const dummyArray = (amountToGenerate = 8) => {
  const arr = [];
  for (let i = 0; i < amountToGenerate; i++) {
    arr.push(i);
  }
  return arr;
}