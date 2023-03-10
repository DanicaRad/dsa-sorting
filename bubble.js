function bubbleSort(arr) {
  if(arr.length === 0) return arr;
  for(let i = 0; i < arr.length; i++) {
    let swapped = false;
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }
    }
    if(!swapped) return arr;
  }
  return arr;
}

module.exports = bubbleSort;