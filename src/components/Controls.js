import React from "react";

function Controls({
  size,
  setSize,
  sorting,
  algorithm,
  setAlgorithm,
  generateArray,
  handleSort,
  handleStop,
}) {
  return (
    <div className="controls">
      <input
        type="range"
        min="10"
        max="100"
        value={size}
        disabled={sorting}
        onChange={(e) => setSize(Number(e.target.value))}
      />

      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        disabled={sorting}
      >
        <option>Bubble Sort</option>
        <option>Selection Sort</option>
        <option>Insertion Sort</option>
        <option>Merge Sort</option>
        <option>Quick Sort</option>
        <option>Bucket Sort</option>
        <option>Radix Sort</option>
        <option>Counting Sort</option>
      </select>

      <button onClick={generateArray} disabled={sorting}>
        Generate New
      </button>
      <button onClick={handleSort} disabled={sorting}>
        Sort
      </button>
      <button onClick={handleStop} disabled={!sorting}>
        Stop
      </button>
    </div>
  );
}

export default Controls;
