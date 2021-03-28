import {SortStrategy} from "./sorting/SortStrategy";
import {BubbleSortStrategy} from "./sorting/BubbleSortStrategy";
import {QuickSortStrategy} from "./sorting/QuickSortStrategy";

export class App
{
    constructor() {
        // Initialize the Bubble Sort algo.
        new BubbleSortStrategy().start()

        // Initialize the Quick Sort algo.
        new QuickSortStrategy().start()
    }
}