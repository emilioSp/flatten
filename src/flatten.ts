const flatten = (arr: Array<any>): Array<any> => {
  // Type check reinforcement, to avoid runtime errors.
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid input ${arr} is not an array`);
  }

  let flatArray: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray.push(...flatten(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

export default flatten;
