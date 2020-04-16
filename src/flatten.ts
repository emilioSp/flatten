const flatten = (arr: Array<any>): Array<any> => {
  // Type check reinforcement, to avoid runtime errors.
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid input ${arr} is not an array`);
  }

  const flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? flatArray.push(...flatten(arr[i])) : flatArray.push(arr[i]);
  }
  return flatArray;
};

export default flatten;
