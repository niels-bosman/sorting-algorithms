import {SortStrategy} from './sorting/SortStrategy'
import {BubbleSortStrategy} from './sorting/BubbleSortStrategy'
import {QuickSortStrategy} from "./sorting/QuickSortStrategy";

// How to run:
// tsc main.ts && node main.js

// Initialize the Bubble Sort algo.
let bubbleSort: SortStrategy = new BubbleSortStrategy()
bubbleSort.start()

// Initialize the Quick Sort algo.
let quickSort: SortStrategy = new QuickSortStrategy();
quickSort.start();