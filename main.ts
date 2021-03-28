import {SortStrategy} from './sorting/SortStrategy'
import {BubbleSortStrategy} from './sorting/BubbleSortStrategy'

// How to run:
// tsc main.ts && node main.js

let bubbleSort: SortStrategy = new BubbleSortStrategy()

bubbleSort.start()