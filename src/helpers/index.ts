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

export const randomId = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const extractObjectKeys = (obj: object = {}, keys: string[]) => {
  const objectEntries = Object.entries(obj)
  const newObject: any = {}
  for (const [key, value] of objectEntries) {
    if (keys.includes(key)) {
      newObject[key] = value
    }
  }
  return newObject
}

export const toTitleCase = (str: string | undefined) => {
  if (!str) return
  return str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}