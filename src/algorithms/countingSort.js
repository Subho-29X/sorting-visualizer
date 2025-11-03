export async function countingSort(array, setArray, shouldStop) {
  let arr = [...array];
  const n = arr.length;

  if (n === 0) return;

  // Find the maximum value in the array
  const maxVal = Math.max(...arr);
  const minVal = Math.min(...arr);

  // Create a count array
  const range = maxVal - minVal + 1;
  const count = new Array(range).fill(0);

  // Store count of each element
  for (let i = 0; i < n; i++) {
    if (shouldStop()) return;
    count[arr[i] - minVal]++;
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }

  // Change count[i] so that it contains actual position
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  const output = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (shouldStop()) return;
    const index = count[arr[i] - minVal] - 1;
    output[index] = arr[i];
    count[arr[i] - minVal]--;
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }

  // Copy the sorted elements into original array
  for (let i = 0; i < n; i++) {
    if (shouldStop()) return;
    arr[i] = output[i];
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }
}
