export async function selectionSort(array, setArray, shouldStop) {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (shouldStop()) return;
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 20));
  }
}
