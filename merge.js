function merge(arr1, arr2) {
  let out = [];
  let i = 0;
  let j = 0;
  while( i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    out.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    out.push(arr2[j]);
    j++;
  }
  return out;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const middleIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middleIdx));
  const right = mergeSort(arr.slice(middleIdx));
  return merge(left, right);
}

module.exports = { merge, mergeSort};