export async function insertionSort(array, setArray, shouldStop) {
  let arr = [...array];
  for (let i = 0; i <= arr.length - 1; i++) {
    // let key = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      if (shouldStop()) return;
      // arr[j + 1] = arr[j];
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
      setArray([...arr]);
      await new Promise((r) => setTimeout(r, 20));
    }
    // arr[j + 1] = key;
    // setArray([...arr]);
  }
}
