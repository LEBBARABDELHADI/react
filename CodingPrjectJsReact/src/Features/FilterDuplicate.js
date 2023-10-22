export default function filterDuplicateArray(array) {
  console.log(array);
  let res = [];
  res.push(array[0]);
  for (let index = 1; index < array.length; index++) {
    if (!res.includes(array[index])) {
      res.push(array[index]);
    }
  }
  return res;
}
