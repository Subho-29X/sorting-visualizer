export async function quickSort(array, setArray, shouldStop) {
  let arr = [...array];
  await quickSortHelper(arr, 0, arr.length - 1, setArray, shouldStop);
  setArray([...arr]);
}

async function quickSortHelper(arr, low, high, setArray, shouldStop) {
  if (low < high) {
    if (shouldStop()) return;
    const pi = await partition(arr, low, high, setArray, shouldStop);
    await quickSortHelper(arr, low, pi - 1, setArray, shouldStop);
    await quickSortHelper(arr, pi + 1, high, setArray, shouldStop);
  }
}

async function partition(arr, low, high, setArray, shouldStop) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (shouldStop()) return i + 1;
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await new Promise((r) => setTimeout(r, 20));
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await new Promise((r) => setTimeout(r, 20));
  return i + 1;
}
