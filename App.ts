import {BubbleSortStrategy} from './sorting/BubbleSortStrategy'
import {QuickSortStrategy} from './sorting/QuickSortStrategy'
import {NativeSortStrategy} from './sorting/NativeSortStrategy'
import {InsertionSortStrategy} from "./sorting/InsertionSortStrategy";

export class App
{
    constructor() {
        // Initialize the Native JS sorting.
        new NativeSortStrategy().start()

        // Initialize the Bubble Sort algo.
        new BubbleSortStrategy().start()

        // Initialize the Quick Sort algo.
        new QuickSortStrategy().start()

        // Initialize the Insertion Sort algo.
        new InsertionSortStrategy().start()
    }
}
