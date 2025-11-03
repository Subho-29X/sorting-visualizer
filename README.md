# Sorting Visualizer

A minimal, interactive sorting algorithm visualizer built with React. Use it to learn and demonstrate how common sorting algorithms (bubble sort, selection sort, insertion sort, merge sort, quick sort, heap sort, etc.) operate step-by-step on an array of values. The visualizer animates comparisons, swaps, and array state changes so you can see how each algorithm transforms an array into a sorted sequence.

This project was bootstrapped with Create React App.

## Live preview

Run the app locally (instructions below) and open http://localhost:3000 to view the visualizer.

## Features

- Visual animations of array operations: comparisons, swaps, merges.
- Multiple sorting algorithms to choose from.
- Adjustable array size and animation speed.
- Generate new random arrays.
- Play / pause controls and step-through (if implemented in UI).
- Responsive, simple UI for focused learning and demos.

## Supported algorithms

(Example — adjust depending on what your app implements)
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

## Quickstart — Install and run locally

Make sure Node.js (v14+ recommended) and npm are installed.

1. Clone the repo:
   git clone https://github.com/Subho-29X/sorting-visualizer.git
2. Change into the project directory:
   cd sorting-visualizer
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open http://localhost:3000 in your browser. The app reloads automatically when you edit source files.

## Available scripts

In the project directory you can run:

- npm start
  - Starts the development server and opens the app at http://localhost:3000.
- npm test
  - Runs the test runner in interactive watch mode (if tests exist).
- npm run build
  - Builds the production-ready app into the build/ directory.
- npm run eject
  - Ejects Create React App configuration — one-way operation (only if you need full control).

For more details on these scripts, refer to Create React App docs: https://create-react-app.dev/docs/getting-started

## Usage tips

- Use the slider or input to change array size and watch how algorithm performance and animations scale.
- Adjust the speed control to slow down or speed up animations for clearer understanding.
- Generate a new array before running different algorithms to compare behaviors on the same input.

## Implementation notes

- Algorithms are typically implemented as generators or as sequences of recorded steps (operations). The UI takes these recorded steps and animates them.
- Visual state usually highlights the indices being compared and uses a distinct color when elements are swapped or placed in final position.

## Contributing

Contributions, bug reports and suggestions are welcome.

- Open an issue to discuss proposed changes or report bugs.
- Fork the repository, create a feature branch, and open a pull request with a clear description of your change.
- Keep changes small and focused; include screens or GIFs for UI/animation improvements when possible.

## License

This project is provided under the MIT License — see LICENSE file for details.

## Acknowledgements

- Built with Create React App.
- Inspired by many sorting visualizer tutorials and educational tools.
