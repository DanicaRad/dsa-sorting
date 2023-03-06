function insertionSort(arr) {
  let i = 1;
  while(i < arr.length) {
    if(arr[i - 1] < arr[i]) i++;
    else {
      let j = 0;
      while(arr[i] > arr[j]) {
        j++;
      }
      let toInsert = arr.splice(i, 1);
      arr.splice(j, 0, toInsert[0]);
      i++;
    }
  }
  return arr;
}

module.exports = insertionSort;