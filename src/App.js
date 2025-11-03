import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import Controls from "./components/Controls";
import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";
import { bucketSort } from "./algorithms/bucketSort";
import { radixSort } from "./algorithms/radixSort";
import { countingSort } from "./algorithms/countingSort";

function App() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(30);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("Bubble Sort");
  const shouldStopRef = useRef(false);

  useEffect(() => generateArray(), [size]);

  const generateArray = () => {
    const newArr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 300) + 10
    );
    setArray(newArr);
    shouldStopRef.current = false;
  };

  const handleSort = async () => {
    setSorting(true);
    shouldStopRef.current = false;

    const algorithms = {
      "Bubble Sort": bubbleSort,
      "Selection Sort": selectionSort,
      "Insertion Sort": insertionSort,
      "Merge Sort": mergeSort,
      "Quick Sort": quickSort,
      "Bucket Sort": bucketSort,
      "Radix Sort": radixSort,
      "Counting Sort": countingSort,
    };
    await algorithms[algorithm](array, setArray, () => shouldStopRef.current);
    setSorting(false);
  };

  const handleStop = () => {
    shouldStopRef.current = true;
    setSorting(false);
  };

  const complexities = {
    "Bubble Sort": "O(n²) | Space: O(1)",
    "Selection Sort": "O(n²) | Space: O(1)",
    "Insertion Sort": "O(n²) | Space: O(1)",
    "Merge Sort": "O(n log n) | Space: O(n)",
    "Quick Sort": "O(n log n) avg | O(n²) worst | Space: O(log n)",
    "Bucket Sort": "O(n + k) | Space: O(n + k)",
    "Radix Sort": "O(n * k) | Space: O(n + k)",
    "Counting Sort": "O(n + k) | Space: O(k)",
  };

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <Controls
        size={size}
        setSize={setSize}
        sorting={sorting}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        generateArray={generateArray}
        handleSort={handleSort}
        handleStop={handleStop}
      />
      <BarChart array={array} sorting={sorting} />
      {!sorting && (
        <p>
          <strong>{algorithm}:</strong> {complexities[algorithm]}
        </p>
      )}
    </div>
  );
}

export default App;
