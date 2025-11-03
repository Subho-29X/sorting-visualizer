export async function radixSort(array, setArray, shouldStop) {
  let arr = [...array];
  const n = arr.length;

  if (n === 0) return;

  // Find the maximum number to know number of digits
  const maxNum = Math.max(...arr);
  const maxDigits = String(maxNum).length;

  // Perform counting sort for each digit position
  for (let exp = 1; exp <= Math.pow(10, maxDigits - 1); exp *= 10) {
    if (shouldStop()) return;
    await countingSortByDigit(arr, exp, setArray, shouldStop);
  }

  setArray([...arr]);
}

async function countingSortByDigit(arr, exp, setArray, shouldStop) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  // Store count of occurrences
  for (let i = 0; i < n; i++) {
    if (shouldStop()) return;
    const digit = Math.floor((arr[i] / exp) % 10);
    count[digit]++;
  }

  // Change count[i] so that it contains actual position
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    if (shouldStop()) return;
    const digit = Math.floor((arr[i] / exp) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }

  // Copy the output array to arr
  for (let i = 0; i < n; i++) {
    if (shouldStop()) return;
    arr[i] = output[i];
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }
}
