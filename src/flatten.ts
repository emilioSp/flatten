const flatOneLevel = (arr: Array<any>): Array<any> => {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...value);
    } else {
      acc.push(value);
    }
    return acc;
  }, []);
};

const hasNestedLevel = (arr: Array<any>) => arr.some(Array.isArray);

const flatten = (arr: Array<any>): Array<any> => {
  // Type check reinforcement, to avoid runtime errors.
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid input ${arr} is not an array`);
  }

  let flatArray: any[] = arr;
  while (hasNestedLevel(flatArray)) {
    flatArray = flatOneLevel(flatArray);
  }
  return flatArray;
};

export default flatten;
