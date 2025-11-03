export async function mergeSort(array, setArray, shouldStop) {
  let arr = [...array];
  await mergeSortHelper(arr, 0, arr.length - 1, setArray, shouldStop);
}

async function mergeSortHelper(arr, left, right, setArray, shouldStop) {
  if (left >= right) return; // base case

  if (shouldStop()) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSortHelper(arr, left, mid, setArray, shouldStop);
  await mergeSortHelper(arr, mid + 1, right, setArray, shouldStop);
  await merge(arr, left, mid, right, setArray, shouldStop);
}

async function merge(arr, left, mid, right, setArray, shouldStop) {
  let temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (shouldStop()) return;
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    if (shouldStop()) return;
    temp.push(arr[i]);
    i++;
  }

  while (j <= right) {
    if (shouldStop()) return;
    temp.push(arr[j]);
    j++;
  }

  // copy back to original array
  for (let k = left; k <= right; k++) {
    arr[k] = temp[k - left];
    setArray([...arr]); // update bars
    await new Promise((r) => setTimeout(r, 20)); // animation
  }
}
