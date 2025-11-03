export async function bucketSort(array, setArray, shouldStop) {
  let arr = [...array];
  const n = arr.length;

  if (n === 0) return;

  // Find minimum and maximum values
  const minVal = Math.min(...arr);
  const maxVal = Math.max(...arr);

  // Create buckets
  const bucketCount = Math.ceil(Math.sqrt(n));
  const bucketRange = (maxVal - minVal + 1) / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let i = 0; i < n; i++) {
    if (shouldStop()) return;
    const bucketIndex = Math.floor((arr[i] - minVal) / bucketRange);
    buckets[Math.min(bucketIndex, bucketCount - 1)].push(arr[i]);
    setArray([...arr]);
    await new Promise((r) => setTimeout(r, 10));
  }

  // Sort individual buckets and concatenate
  let index = 0;
  for (let i = 0; i < buckets.length; i++) {
    if (shouldStop()) return;
    // Sort bucket using insertion sort
    for (let j = 1; j < buckets[i].length; j++) {
      if (shouldStop()) return;
      const key = buckets[i][j];
      let k = j - 1;
      while (k >= 0 && buckets[i][k] > key) {
        buckets[i][k + 1] = buckets[i][k];
        k--;
      }
      buckets[i][k + 1] = key;
    }

    // Place sorted elements back into array
    for (let j = 0; j < buckets[i].length; j++) {
      if (shouldStop()) return;
      arr[index] = buckets[i][j];
      index++;
      setArray([...arr]);
      await new Promise((r) => setTimeout(r, 10));
    }
  }
}
