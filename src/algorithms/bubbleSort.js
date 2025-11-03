export async function bubbleSort(array, setArray, shouldStop) {
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (shouldStop()) return; // stop check
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await new Promise((r) => setTimeout(r, 20));
      }
    }
  }
}
